import { Router } from "express";
import * as Controller from "./controller";

const router = Router();

router.get("/main", Controller.mainView);

module.exports = router;