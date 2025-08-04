const express = require('express');
const router = express.Router();
const Friend = require('./models/frnds');


// router.get('/', (req,res)=>{
   // res.send('Running Success');
///});

router.get('/', async(req, res)=>{
    const frnddetails= await Friend.find();
    res.json(frnddetails);
     
});

router.get('/:name', async(req, res)=>{
    const name= req.params.name;
    const frnd = await Friend.findOne({ name: new RegExp(`^${name}$`, 'i') });

    if (frnd){
        res.json(frnd);
    } else{
        res.status(404).json({message: "Looks like we haven’t clicked any memories together yet But that doesn’t change how special you are. Happy Friendship Day, ${name}" })
    }
})

router.post('/', async(req, res)=>{
    const {name, imgUrls} = req.body;

    try{
        const newfrnd= new Friend({name, imgUrls});
        await newfrnd.save();
        res.status(201).json(newfrnd);
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

module.exports= router;
