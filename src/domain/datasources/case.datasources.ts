import { CasesModel } from "../../data/models/case.model";
import { ICase } from "../entities/case.entity";


export class CaseDataSource {
  public updateCase = async (id: string, cases: Partial<ICase>) => {
    await CasesModel.findByIdAndUpdate(id, {
      age: cases.age,
      genre: cases.genre,
      lat: cases.lat,
      lng: cases.lng,
      isEmailSent: cases.isEmailSent
    });
  }
}