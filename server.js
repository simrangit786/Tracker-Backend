const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path :'./config.env'});

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => {
        //console.log(con.connections);
        console.log("DB connection successfull");
      });
  
const projectSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true,'A project must have a name'],
        unique: true
    }
})



console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port , () =>{
    console.log(`App running on port ${port}....`)
})