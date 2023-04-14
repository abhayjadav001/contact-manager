import { Request , Response } from "express";
import mongoose from "mongoose";
import { Iuser } from "../models/Iuser";
import usertable from "../database/userSchema";
import { APP_STATUS } from "../constants/Constant";
import { validationResult } from "express-validator";



export const creatpost = async(req:Request,res:Response)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(200).json({
            error:error.array()
        })
    }
    try{
        let {Users_id,name,email,address1,phone,pincode,password} = req.body;


        let theuserobj : Iuser ={
            Users_id:Users_id,
            name:name,
            email:email,
            address1:address1,
            phone:phone,
            pincode:pincode,
            password :password
        }
        theuserobj =await new usertable(theuserobj).save();
        if(theuserobj){
            return res.status(200).json(theuserobj)
        }
    }
    catch(error : any){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            data : null,
            error : error.message
        })
    }
}