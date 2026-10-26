const mongoose = require ("mongoose");
// server connecting to database


async  function connectDB (){
    
    await mongoose.connect("mongodb+srv://yt:1q6KWWb5dN1XNmHD@yt-complete-backend.q4bjxzc.mongodb.net/mini")

    console.log("Connected to DB")
}

module.exports = connectDB;
