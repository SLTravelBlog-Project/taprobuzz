const router = require("express").Router();
const req = require("express/lib/request");
let Artical = require("../models/Artical.js");


router.route("/add").post((req,res =>{      

    const articalname = req.body.articalname;
    const description = req.body.description;
    const photo = req.body.photo;

    const newArtical = new Artical({

        articalname,
        description,
        photo,

    })

    newArtical.save()
     .then(() => res.json("New Artical Added"))
     .catch(err => res.json("Error" + err));


}));











module.exports = router ;