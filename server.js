require("dotenv").config();
const express = require("express");
const {dbClient}=require('./src/db/connection');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());



const route=require('./src/heritage/route')
app.use("/api/product", route);

app.get("/",(req,res)=>{
    res.json({"message":"welcome to test api"});
})
//to handle unwanted route
app.use((req, res) => {
    res.status(404).json({ message: "endpoint not available" });
  });

app.listen(PORT, async() => {
  try{
    const res=await dbClient.connect();
    console.log(`Server listening at http://localhost:${PORT}`);
  }catch(err){
    console.log(err);
  }
});