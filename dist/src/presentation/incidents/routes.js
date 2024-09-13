"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class IncidentRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const incidentController = new controller_1.IncidentController();
        router.get("/", incidentController.getIncidents);
        router.post("/", incidentController.createIncident);
        router.get("/:id", incidentController.getIncident);
        router.put("/:id", incidentController.updateIncident);
        router.delete("/:id", incidentController.deleteIncident);
        return router;
    }
}
exports.IncidentRoutes = IncidentRoutes;
