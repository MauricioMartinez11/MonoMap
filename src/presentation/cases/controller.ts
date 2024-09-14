import { Request, Response } from 'express';
import { CasesModel } from '../../data/models/case.model';
import { EmailService } from '../../domain/services/email.service';

export class CasesController {
  public getCases = async (req: Request, res: Response) => {
    try {
      const days = new Date();
      days.setDate(days.getDate() - 7);

      const cases = await CasesModel.find({
        creationDate: {
          $gte: days
        }
      });
      res.send(cases);
    } catch (error) {
    }
  }
  public getCaseById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const foundCase = await CasesModel.findById(id);
      return res.send(foundCase);
    } catch (error) {
      console.error(error);
    }
  }

  public saveCase = async (req: Request, res: Response) => {
    console.log('body', req.body);
    const { genre, age, lat, lng } = req.body;
    try {
      const newCase = await CasesModel.create({
        age: age,
        genre: genre,
        lat: lat,
        lng: lng
      });
      res.json(newCase);
    } catch (error) {
      console.error(error);
    }
  }
  public updateCaseById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { genre, age, lat, lng } = req.body;
    try {
      let currentCase = await CasesModel.findById(id);
      currentCase = await CasesModel.findByIdAndUpdate(id, {
        genre: genre,
        age: age,
        lat: lat,
        lng: lng
      }, { new: true });
      res.json(currentCase);
    } catch (error) {
      console.error(error);
    }
  }
  public deleteCaseById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const currentCase = await CasesModel.findById(id);
      await CasesModel.findByIdAndDelete(id);
      res.send(currentCase);
    }
    catch (error) {
      console.error(error);
    }
  }
}
