"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const incidentSchema = new mongoose_1.default.Schema({
    creationDate: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    genre: {
        type: String,
        enum: ["Masculino", "Femenino", "No binario"],
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
    isEmailSent: {
        type: Boolean,
        default: false,
    },
});
exports.IncidentModel = mongoose_1.default.model('Incident', incidentSchema);
