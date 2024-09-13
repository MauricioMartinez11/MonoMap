import mongoose from "mongoose"

const incidentSchema = new mongoose.Schema({
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

export const IncidentModel = mongoose.model('Incident', incidentSchema);