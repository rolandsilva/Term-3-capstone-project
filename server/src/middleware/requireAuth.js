import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/app.config";

export default function requireAuth(req, res, next) {
  const token =
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log({
        "stack trace": err.stack,
        message: err.message,
      }); // helpful for debugging
      return res.status(403).json({ error: "Forbidden" });
    }
    req.customer = decoded;
    next();
  });
}
