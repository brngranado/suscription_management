import { SuscriptionModel, SuscriptionData } from "../models/Suscription.model";

export class SuscriptionRepository {
  async createSuscription(
    suscripcion: SuscriptionData
  ): Promise<SuscriptionData> {
    try {
      const newSuscription = new SuscriptionModel(suscripcion);
      return await newSuscription.save();
    } catch (error) {
      throw new Error("Error creating a sucription");
    }
  }

  async getSuscription(): Promise<SuscriptionData[]> {
    try {
      return await SuscriptionModel.find();
    } catch (error) {
      throw new Error("Error fetching suscriptions");
    }
  }
}

export const suscriptionRepository = new SuscriptionRepository();
