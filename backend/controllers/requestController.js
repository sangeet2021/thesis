const mongoose = require('mongoose');
const Requests = require('../models/requestModel')

exports.createRequest = async(req, res)=>{
    const{tool, number_required, purpose, email, number} = req.body;
    try{
        const request = await Requests.create({tool, number_required, purpose, email, number});
        res.status(200).json({success:"succesfully created", request})
    }catch{
        res.status(400).json({error:"failed to create"})
    }
}

exports.getRequests = async(req, res)=>{
    try{
        const request = await Requests.find({}).sort({createdAt : -1});
        res.status(200).json({success: "fetched succesfully", request})
    }catch{
        res.status(400).json({error:"couldn't fetch the data"})
    }
}

exports.getRequest = async(req, res) =>{
    const{id} =req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid id"})
    }

    const request = await Requests.findById(id);
    if(!request){
        return res.status(400).json({error:"couldn't fetch the request"})
    }
    res.status(200).json({success:"succesfully fetched the data", request});
}

exports.deleteRequest = async(req, res)=>{
    const{id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid id"})
    }

    const request = await Requests.findByIdAndDelete({_id : id});
    if(!request){
        res.status(400).json({error:"coudln't find the request"})
    }
    res.status(200).json({success:"succesfully deleted the request"})
}