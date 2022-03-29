const express=require('express')
const router =express.Router()
const Speed = require('../model/Speed')

//Getting all
router.get('/all',async (req,res) => {
    try {
        const speed = await Speed.find()
        res.json(speed)
    }
    catch (err){

    }
})
router.get('/index',(req,res) =>{
    res.sendFile('index.html', {root: './'});})


//Getting One
router.get('/:id',getId,(req,res) => {
    res.send(res.speed)
})
//Created One
router.post('/:id',(req,res) => {

})
//Updating One
router.patch('/:id',(req,res) => {

})
//Deleting One
router.delete('/:id',(req,res) => {

})

async function getId(req,res,next){
let speed
    try{
      speed = await Speed.findById(req.params.id)
        if(speed==null){
            return res.status(404).json({
                id:req.params.id,
                message:'Cannot find anyasd'
            })
        }
    }catch (err){
    return  res.status(500).json({
        message:err.message
    })
    }
    res.speed = speed
    next()
}



module.exports = router