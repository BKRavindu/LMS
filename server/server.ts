import {app} from "./app";
require("dotenv").config();

app.listen(process.env.PORT, () =>{
    console.log(`server is connected with port ${process.env.PORT}`);
});