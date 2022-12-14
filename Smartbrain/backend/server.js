const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// app.use(express.static(__dirname + "/public"));

const database = {
    users: [
        {
            id: 123,
            name: "John",
            email: "john@gmail.com",
            password: "cookies",
            entries: 2,
            joined: new Date()
        },
        {
            id: 124,
            name: "Sally",
            email: "sally@gmail.com",
            password: "bananas",
            entries: 4,
            joined: new Date()
        }
    ]
}

// Returns all user
app.get("/", (req, res) => {
    res.status(200).json(findUserBy())
});

app.post("/signin", (req, res) => {
    const { email, password } = req.body;

    if(!email)
        res.status(400).json("Error. No email entered!");

    const user = findUserBy("email", email);

    if(!user)
        res.status(400).json("E-Mail couldn't be found!");

    else if(user.password === password)
        res.status(200).json({
            "message": "Signing in!", 
            "user": database.users.slice(-1)[0]
        });

    else
        res.status(400).json("Wrong password!")
});

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if(name && email && password){
        if(findUserBy("email", email))
            res.status(400).json("Sorry! The eMail-Adress already exists.");

        else{
            // let hashedPW;

            // bcrypt.hash(password, null, null, (err, hash) => {
            //     if(err)
            //         console.log(err)

            //     console.log(hash)

            //     hashedPW = hash;
            // });

            // console.log(hashedPW)

            database.users.push({
                id: (database.users.slice(-1)[0].id + 1), 
                name: name,
                email: email, 
                password: password, 
                entries: 0, 
                joined: new Date()
            });
            
            res.status(200).json({
                "message": "You are registered!", 
                "user": database.users.slice(-1)[0]
            });
        }
    }
    else
        res.status(400).json("Error!");
        
});

// Retruns a specific user by a given id
app.get("/profile/:id", (req, res) => {
    const { id } = req.params;

    const profile = findUserBy("id", id);

    profile ? 
    res.status(200).json(profile) : 
    res.status(404).json("Profile not found")
});

// Return the score of scaned images by a given id 
app.get("/image", (req, res) => {
    const { id } = req.body;
    if(!id)
        res.status(400).json("Error. No ID entered!");

    const profile = findUserBy("id", id);
    if(!profile)
        res.status(404).json("No profile found.");
    
    profile.entries++;
    res.status(200).json({
        message: "Updated! +1!",
        entries: profile.entries
    })
});

// Returns a user by the parameter "email" or "id" and a given value 
const findUserBy = (parameter, value) => {
    switch (parameter) {
        case "email":
            return database.users.find(user => user.email === value);

        case "id":
            return database.users.find(user => user.id === Number(value));

        default:
            return database.users;
    }
}

// Testing
app.get("/json", (req, res) => {
    const { name, region, time } = req.body;
    console.log("Got JSON!");
    console.log(name, "lives in", region,time, "!");
    res.send(200);
});

app.listen(3000);