const express=require('express');
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv');
const usercontrol=require('./routes/users')
const notescontrol=require('./routes/notes')
const Authcontrol=require('./routes/auth')
const Archivecontrol=require('./routes/Archives')
const Deletecontrol=require('./routes/deletes')
const cors = require('cors')

app.use(cors());


app.use(express.json())
//dotenv file configration
dotenv.config();

//mongodb Connection
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}).then(()=>{
    console.log("mongodb Connect");
}).catch((err)=>{
    console.log(err);
})
// allroute
app.use('/api',usercontrol)
app.use('/api',notescontrol)
app.use('/api',Authcontrol)
app.use('/api',Archivecontrol)
app.use('/api',Deletecontrol)

// server port
app.listen(8000,()=>{
    console.log("Backend Server is Runing on 8000 port")
})