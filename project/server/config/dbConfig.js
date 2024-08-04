//require('dotenv').config();

const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://acc02:mY9w02WfsBviaqbx@cluster0.aezttp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Successful')
})
connection.on('error' , ()=>{
    console.log('Connection unsuccessful')
})

module.exports = connection;