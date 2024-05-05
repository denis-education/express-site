import express from "express"


const app = express();
app.get('/', (reg, res) =>{
    res.send("Hello?");
})

const port = process.env.port || 8080
app.listen(port, () => console.log('listen port: ${port}'))