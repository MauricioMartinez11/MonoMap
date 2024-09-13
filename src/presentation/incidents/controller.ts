import { Request, Response } from 'express';
import { IncidentModel } from '../../data/models/incident.model';
import { EmailService } from '../../domain/services/email.service';

export class IncidentController {
  public getIncidents = async (req: Request, res: Response) => {
    try {
      const incidents = await IncidentModel.find();
      res.json(incidents);
    }
    catch (error) {
    }
  }
  public createIncident = async (req: Request, res: Response) => {
    try {
      const { title, description, lat, lng } = req.body;
      const newIncident = await IncidentModel.create({
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
  }
  public getIncident = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const incident = await IncidentModel.findById(id);
      res.json(incident);
    }
    catch (error) {
      console.log(error);
    }
  }
  public updateIncident = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, lat, lng } = req.body;
    try {
      const incident = await IncidentModel.findByIdAndUpdate(id, {
        title,
        description,
        lat,
        lng
      })
      res.json(incident);
    } catch (error) {
      console.log(error);
    }
  }
  public deleteIncident = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await IncidentModel.findByIdAndDelete(id);
      res.json({ message: 'Incident deleted' });
    } catch (error) {
      console.log(error);
    }
  }
}
