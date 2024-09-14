import { Router, Request, Response } from "express";

import { CasesController } from "./controller";

export class CasesRoutes {
  static get routes(): Router {
    const router = Router();
    const casesController = new CasesController();
    router.get("/", casesController.getCases);
    router.post("/", casesController.getCaseById);
    router.get("/:id", casesController.saveCase);
    router.put("/:id", casesController.updateCaseById);
    router.delete("/:id", casesController.deleteCaseById);
    return router
  }
}