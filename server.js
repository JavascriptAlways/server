import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const PORT = 4000;
const app = express();

app.use(cors);

mongoose.connect("mongodb://127.0.0.1:27017/mydb").then(() => {
    console.log("Mongo DB Connected");
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send("Hello Server");
});

app.listen(PORT, () => {
    console.log("server running");
});