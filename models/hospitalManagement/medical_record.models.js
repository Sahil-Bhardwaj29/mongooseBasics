import mongoose from "mongoose";
const medicalReportSchema = new mongoose.Schema({

},{timestamps:true})
export const MedicalRecord = new mongoose.model("MedicalRecord",medicalReportSchema)