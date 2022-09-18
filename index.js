const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());





    //get all files

app.get("/files", async (req, res) => {
      const query = {};
      const cursor = fileCollection.find(query);
       const files = await cursor.toArray();
       res.send(files);
     });

     // post files

     app.post("/files", async (req, res) => {
        const file = req.body;
        const result = await fileCollection.insertOne(file);
        return res.send({ success: true, result });
      });

      //delete a file

      // delete Project API
    app.delete("/files/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await fleCollection.deleteOne(query);
        res.send(result);
      });