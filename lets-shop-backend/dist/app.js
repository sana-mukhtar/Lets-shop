import express from "express";
const port = 3000;
const app = express();
app.use(express.json());
app.listen(port, () => {
    console.log(`Express is running on ${port}`);
});

app.get("/" , (req , res) =>{
    res.send("api is working")
})
