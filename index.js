const express = require('express');
const app = express();
const { movie, show } = require("./Models/Movie")
const connection = require("./Connections");
const cors = require("cors");

const port = process.env.PORT||8000;

app.use(cors());
app.use(express.json());

app.get("/movies", (req, res) => {
    try {
        movie.find((err, data) => {
            res.send(data)
        })
    } catch (error) {
        res.send(error)
    }
})
app.put("/movies/:id", (req, res) => {
    try {
        const data = req.body;
        const id = data._id;
        movie.findByIdAndUpdate(id, data, (response) => {
            console.log("sucess fully updated");
        })
        res.send("updated")
    } catch (error) {
        res.send("error")
    }
})

app.get("/shows", (req, res) => {
    try {
        show.find((err, data) => {
            res.send(data);
        })
    } catch (error) {
        res.send("error");
    }
})

app.get("/", (req, res) => {
    res.send("hello this is my server")
})

app.get("*", (req, res) => {
    res.send("404 Page Not Found")
})










app.listen(port, () => console.log('server is running at port 3000'))