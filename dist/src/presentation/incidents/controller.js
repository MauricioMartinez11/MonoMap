"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentController = void 0;
const incident_model_1 = require("../../data/models/incident.model");
class IncidentController {
    constructor() {
        this.getIncidents = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const incidents = yield incident_model_1.IncidentModel.find();
                res.json(incidents);
            }
            catch (error) {
            }
        });
        this.createIncident = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, lat, lng } = req.body;
                const newIncident = yield incident_model_1.IncidentModel.create({
                    title,
                    description,
                    lat,
                    lng
                });
                // const emailService = new EmailService();
                // await emailService.sendEmail({
                //   to: "mauricio.martineez11@gmail.com",
                //   subject: title,
                //   htmlBody: `<h1>${title}</h1><p>${description}</p>`
                // });
                return res.json(newIncident);
            }
            catch (error) {
            }
        });
        this.getIncident = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const incident = yield incident_model_1.IncidentModel.findById(id);
                res.json(incident);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.updateIncident = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, description, lat, lng } = req.body;
            try {
                const incident = yield incident_model_1.IncidentModel.findByIdAndUpdate(id, {
                    title,
                    description,
                    lat,
                    lng
                });
                res.json(incident);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.deleteIncident = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield incident_model_1.IncidentModel.findByIdAndDelete(id);
                res.json({ message: 'Incident deleted' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.IncidentController = IncidentController;
