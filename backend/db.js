const mongoose = require('mongoose')
const mongoURI = YOUR MONGO URI

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongoose database Successfully")
    })
}

module.exports = connectToMongo;
