const axios = require("axios");
axios.create({
    URL:"https://eldenele-1d091-default-rtdb.europe-west1.firebasedatabase.app/"
})

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");


const serviceAccount = require("./eldenele-1d091-ffcdfaae8e9e.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://eldenele-1d091-default-rtdb.europe-west1.firebasedatabase.app"
  });

const express = require("express");
const app = express();
const db = admin.firestore();
const cors = require("cors");
const { QuerySnapshot } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");
const { databaseURL } = require("firebase-functions/params");
const { user } = require("firebase-functions/v1/auth");
app.use(cors({origin:true}));



//Routes
app.get("/hello-world", (req, res) =>{
    return res.status(200).send("Hello world")
});

app.post(`${databaseURL}/user.json`, (req, res) => {
    const { email } = req.body;
    const fav = [];
    const userRef = db.collection('user').doc(user.uid);
    userRef.set({
      email,
      fav ,
    })
    .then(() => {
      res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Kullanıcı kaydedilirken bir hata oluştu' });
    });
  });


//Export the api to Firebase cloud Functions
exports.app = functions.https.onRequest(app);