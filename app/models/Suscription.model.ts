import mongoose, { Document, Schema, Model } from "mongoose";

export interface SuscriptionData {
  name: string;
  email: string;
  type_suscription?: string;
}

export interface SuscriptionDocument extends Document, SuscriptionData {}

const SuscriptionSchema = new Schema<SuscriptionDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  type_suscription: { type: String },
});

export const SuscriptionModel: Model<SuscriptionDocument> =
  mongoose.model<SuscriptionDocument>("Suscription", SuscriptionSchema);

export default SuscriptionModel;
