import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Contact: String,
    bloodgroup: String,
    gender: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
export default EmployeeModel;