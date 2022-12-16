const express = require("express");

const app = express();

const data = [
    {
        id: 1,
        name: "John Doe",
        age: 32,
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 30,
    },
    {
        id: 3,
        name: "John Smith",
        age: 25,
    },
];

// This route gets *ALL* the users
app.get("/api/users", (req, res) => {
    res.json(data);
});

app.get("api/user/1", (req, res) => {
    return res.json(req.params.id);
});

app.get("api/users/id", (req, res) => {
    const id1 = req.params.id;
    const id2 = req.params.id;
    const id3 = req.params.id;

    return res.json(req.params.id);
});

app.get("api/users/name/id", (req, res) => {
    return res.json(req.query.id);
});

// Add a new route to get a *SINGLE* user (you can use either path param or query param)
// /api/users/1      <-- path param (req.params.id)
// /api/users?id=1   <-- query param (req.query.id)

// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
