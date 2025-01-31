import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeModel from "./models/Employee.js";


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employees")

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("incorrect Password")
            }
        } else {
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})

