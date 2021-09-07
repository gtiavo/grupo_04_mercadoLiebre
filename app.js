const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/users/index.html"));
});

app.get('/register',(req,res)=>{
  res.sendFile(path.join(__dirname,'./view/users/register.html'))
})

app.get('/login', (req,res)=>{
  res.sendFile(path.join(__dirname,'./view/users/login.html'))
})

const port= process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});
