import { Customer } from "../models";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

// Helpers.
// Note: A lot of these could be mongoose middleware. But I want to keep it simple. - Tim Q.
function generateToken(customer) {
  return jsonwebtoken.sign(
    {
      id: customer._id,
      email: customer.customerEmail,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
}

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function validatePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function sanitizeCustomer(customer) {
  const copy = customer.toJSON();
  delete copy.passwordHash;
  return copy;
}

// end of helpers

export async function handleRegister(req, res) {
  const {
    customerFirstName,
    customerLastName,
    customerEmail,
    customerAddress1,
    customerAddress2,
    customerCity,
    customerState,
    customerZipCode,
    customerPhone,
    password,
  } = req.body;

  // Let's check that we have the data we need from the request body.
  if (
    !customerFirstName ||
    !customerLastName ||
    !customerEmail ||
    !customerAddress1 ||
    !customerCity ||
    !customerState ||
    !customerZipCode ||
    !customerPhone ||
    !password
  ) {
    return res.status(422).json({ error: "All fields are required" });
  } else if (password.length < 6) {
    return res
      .status(422)
      .json({ error: "Password must be at least 6 characters" });
  }

  try {
    const doesCustomerExist = await Customer.findOne({
      customerEmail,
    });

    if (doesCustomerExist) {
      return res
        .status(400)
        .json({ error: "customer already exists" });
    }

    const hashedPassword = hashPassword(password);

    let newCustomer = new Customer({
      customerFirstName,
      customerLastName,
      customerEmail,
      customerAddress1,
      customerAddress2: customerAddress2 ? customerAddress2 : "",
      customerCity,
      customerState,
      customerZipCode,
      customerPhone,
      passwordHash: hashedPassword,
    });

    await newCustomer.save();

    return res
      .status(201)
      .json({ customer: sanitizeCustomer(newCustomer) }); // The client will route the user to the login endpoint, so I am not sending a token here.
  } catch (error) {
    console.log(error); // Todo: in production(deploy), don't console.log errors
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function handleLogin(req, res) {
  const { customerEmail, password } = req.body;

  if (!customerEmail || !password) {
    return res.status(422).json({ error: "All fields are required" });
  }

  try {
    const customer = await Customer.findOne({
      customerEmail,
    });

    if (!customer) {
      return res.status(404).json({ error: "customer not found." });
    }

    const isValidPassword = validatePassword(
      password,
      customer.passwordHash
    );

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = generateToken(customer);

    return res
      .status(200)
      .json({ token, customer: sanitizeCustomer(customer) });
  } catch (error) {
    console.log(error); // todo: in production(deploy), don't console.log errors
    return res.status(500).json({ error: "Error logging in" });
  }
}

// In this handler, I decided to use the decoded token to get the customer id. That is
// in the middleware 'requireAuth'. It decodes the token and then puts 'customer' on the 'req' aka 'request' object. That way, we can access the id and not send the id as a param. - Tim Q.
export async function handleChangePassword(req, res) {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return res.status(422).json({ error: "All fields are required" });
  }

  if (newPassword !== confirmPassword) {
    return res
      .status(422)
      .json({ error: "New password must match." });
  }

  try {
    const customer = await Customer.findById(req.customer.id);

    if (!customer) {
      return res.status(404).json({ error: "customer not found." });
    }

    const isValidPassword = validatePassword(
      currentPassword,
      customer.passwordHash
    );

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    customer.passwordHash = hashPassword(newPassword);
    await customer.save();

    return res.status(200).json({ message: "Password updated." });
  } catch (error) {
    console.log(error); // todo: in production(deploy), don't console.log errors
    return res.status(500).json({ error: "Error updating password" });
  }
}
