const express = require("express");
const app = express();
const path = require("path");
const rutasindex=require('./routes/rutasIndex.js');
const rutasLogin=require('./routes/rutasLogin.js');
const rutasRegister=require('./routes/rutasRegister.js')





app.use(express.static(path.join(__dirname, "../public")));


app.use("/", rutasindex);

app.use('/register', rutasRegister);

app.use('/login', rutasLogin )

const port= process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});





