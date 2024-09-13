
export interface IIncident {
  genre: string;
  age: number;
  lat: number;
  lng: number;
  isEmailSent: boolean;
}

export interface IIncidentDocument extends IIncident, Document {
  
}