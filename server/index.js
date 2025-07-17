import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmployeeModel from "./models/Employee.js";
import dotenv from 'dotenv';
import nodemailer from "nodemailer";
dotenv.config();


const app = express()
app.use(express.json())
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003",
    "https://redprime-frontend.onrender.com",
    "https://redprime.onrender.com"
  ],
  credentials: true,
}));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

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

// Get all donors
app.get('/donors', (req, res) => {
    EmployeeModel.find()
    .then(donors => res.json(donors))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Delete donor by ID
app.delete('/donors/:id', (req, res) => {
    EmployeeModel.findByIdAndDelete(req.params.id)
    .then(result => {
        if (result) {
            res.json({ message: 'Donor deleted successfully' });
        } else {
            res.status(404).json({ error: 'Donor not found' });
        }
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Email alert endpoint
app.post('/send-alert', async (req, res) => {
  const { email, name, bloodgroup } = req.body;
  if (!email || !name || !bloodgroup) {
    return res.status(400).json({ error: 'Email, name, and blood group are required.' });
  }
  try {
    // Configure transporter (using Gmail for example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ALERT_EMAIL_USER,
        pass: process.env.ALERT_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.ALERT_EMAIL_USER,
      to: email,
      subject: 'RedPrime: Urgent Blood Needed',
      text: `${name}, we need urgent blood. Blood group: ${bloodgroup}.`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: 'Alert email sent successfully.' });
  } catch (error) {
    console.error('Error sending alert email:', error);
    res.status(500).json({ error: 'Failed to send alert email.' });
  }
});

app.listen(3001, () => {
    console.log("server is running")
})

