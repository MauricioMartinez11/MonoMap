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
exports.IncidentDataSource = void 0;
const incident_model_1 = require("../../data/models/incident.model");
class IncidentDataSource {
    constructor() {
        this.updateIncident = (id, incident) => __awaiter(this, void 0, void 0, function* () {
            yield incident_model_1.IncidentModel.findByIdAndUpdate(id, {
                age: incident.age,
                genre: incident.genre,
                lat: incident.lat,
                lng: incident.lng,
                isEmailSent: incident.isEmailSent
            });
        });
    }
}
exports.IncidentDataSource = IncidentDataSource;
