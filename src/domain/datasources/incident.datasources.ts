import { IncidentModel } from "../../data/models/incident.model";
import { IIncidentDocument } from "../entities/incident.entity";


export class IncidentDataSource {
  public updateIncident = async (id: string, incident: Partial<IIncidentDocument>) => {
    await IncidentModel.findByIdAndUpdate(id, {
      age: incident.age,
      genre: incident.genre,
      lat: incident.lat,
      lng: incident.lng,
      isEmailSent: incident.isEmailSent
    });
  }
}