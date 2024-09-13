import mongoose from "mongoose";


interface ConnectionOptions{
  mongoURL: string;
  dbName: string;
}

export class MongoDBDataBase{
  static async connect(options:ConnectionOptions){
    try{
      await mongoose.connect(options.mongoURL, {
        dbName: options.dbName
      });
      console.log('Connected to the database');
    }
    catch(error){
      console.error('Error connecting to the database', error);
    }

  }
}