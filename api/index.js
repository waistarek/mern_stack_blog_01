const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const app = express();
const salt = bcrypt.genSaltSync(10);


mongoose.connect('mongodb+srv://aboadahm999:f1bpmADU2cgDBsuW@cluster0.gcis6pv.mongodb.net/?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) =>{
    const{username,password} = req.body;
    try{ 
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    }catch(e){
        console.log(e);
        res.status(400).json(e);
    }  
});

app.post("/login", (req, res) =>{
    
});
app.listen(4000);


/*Atlas 
passwort: f1bpmADU2cgDBsuW
username : aboadahm999
IP-Adresse: 188.172.123.114/32
connection string: mongodb+srv://aboadahm999:f1bpmADU2cgDBsuW@cluster0.gcis6pv.mongodb.net/?retryWrites=true&w=majority
*/
