import { Customer } from "../models";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

// Helpers
function generateToken(customer) {
  return jsonwebtoken.sign(
    {
      id: customer._id,
      email: customer.customerEmail,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function sanitizeCustomer(customer) {
  const copy = customer.toJSON();
  delete copy.passwordHash;
  return copy;
}

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
    return res.status(422).send("All fields are required");
  } else if (password.length < 6) {
    return res
      .status(422)
      .send("Password must be at least 6 characters");
  }

  try {
    const doesCustomerExist = await Customer.findOne({
      customerEmail,
    });

    if (doesCustomerExist) {
      return res.status(400).send("Customer already exists");
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

    const token = generateToken(newCustomer);
    return res
      .status(201)
      .send({ token, customer: sanitizeCustomer(newCustomer) });
  } catch (error) {
    console.log(error); // Todo: in production(deploy), don't console.log errors
    res.status(500).send("Error registering customer");
  }
}
