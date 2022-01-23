const express = require("express");
const mongoose = require("mongoose");
const dotenv = require ("dotenv");
const cors = require ("cors");

const errrHandler = require ("./middleware/error");


require ("dotenv").config();



const URI =process.env.MONGODB_URL;


mongoose.connect(URI ,{

}, err=>{
if(err) throw err,
console.log("Connection Successfull");
});

const connection = mongoose.connection ;

connection.once( "open" , () => {
    console.log("MongoDb Connection was Succussfull !");
})

const app = express();

const PORT = process.env.PORT || 8070 ;


app.use((cors()));
app.use(express.json());

app.listen(PORT , () => {
 console.log(`Server is up and running on port number ${PORT}`);
});



//load the backend functions from routes

const articalRouter = require("./routes/articals.js");
app.use("/artical",articalRouter);



