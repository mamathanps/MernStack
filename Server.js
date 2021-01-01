const express = require("express");
const app = express();

const dotenv = require('dotenv');
const cors = require('cors');

const morgan = require("morgan");
const chalk = require("chalk");
const mongoose = require("mongoose");

//configure cors with express
app.use(cors());

//http request logger middlware for nodejs 
app.use(morgan("tiny"));

dotenv.config({path: "./config/config.env"});

const PORT = 8000 || process.env.PORT;

//Test the Sample API
app.get("/", (req,res) => {
    res.send("<h1>ECART Web Application Successfully Runnning.....!!!</h1>");
});

//accept or read the express - form data using body-parser or express
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/user", require("./router/UserRouter"));
app.use("/product", require("./router/ProductRouter"));
//app.use("/order", require("./router/OrderRouter"));
//app.use("/payment", require("./router/PaymentRouter"));

mongoose
.connect(process.env.MONGODB_LOCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then((response)=>{
    //console.log("MongoDB Successfully Connected....!!");
    console.log(`${chalk.cyanBright(`MongoDB Successfully Connected....!!`)}`);

})
.catch((err) => {});


app.listen(PORT, (err) => {
    if (err) throw err;
    //console.log(`Server Running on Port Number Very Successfully.....${PORT}`);
    console.log(`${chalk.yellowBright(`Server Running on Port Number Very Successfully......${PORT}`)}`);
});

