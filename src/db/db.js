const mongoose = require ("mongoose");
// server connecting to database


async  function connectDB (){
    
    await mongoose.connect("mongodb+srv://yt:NEfrGqptf29SfyJW@yt-backend-complete.77erx6e.mongodb.net/mini")

    console.log("Connected to DB")
}

module.exports = connectDB;
