const express = require("express");
const cors = require("cors");
const qrRouter = require("./qrRouter");
const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api", qrRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});
