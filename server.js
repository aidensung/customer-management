const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "Aiden",
      birthday: "870822",
      gender: "Male",
      job: "Software Developer",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "Sehee",
      birthday: "860209",
      gender: "Female",
      job: "Interior Decorator",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "Ian",
      birthday: "190201",
      gender: "Male",
      job: "Baby",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
