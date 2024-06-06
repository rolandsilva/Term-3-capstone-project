import { Router } from "express";
import { Reviews } from "../models";
import {
  handleGetFaqsByFaqsname,
  handleUpdateFaqs,
} from "../controllers/faqs.controller";

const faqsRoutes = Router();

faqsRoutes
  .route("/:faqsname")
  .get(handleGetFaqsByFaqsname)
  .put(handleUpdatefaqs);

export default faqsRoutes;
