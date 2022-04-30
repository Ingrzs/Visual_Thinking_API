const ExplorerController = require("./controllers/studentcontroller");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Think API welcome!"});
});

app.listen(port, () => {
    console.log(`Visual Think API in localhost:${port}`);
});