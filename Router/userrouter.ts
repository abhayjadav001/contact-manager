import {Router , Request , Response} from "express";
import { body } from "express-validator";
import * as usercantroller from "../controllar/Contactcontrollar"


const userrouter :Router = Router();


userrouter.post("/",[
    body('Users_id').not().isEmpty().withMessage("userid is required"),
    body('name').not().isEmpty().withMessage("name is required"),
    body('email').not().isEmpty().withMessage("emamil is required"),
    body('address1').not().isEmpty().withMessage("address is required"),
    body('pincode').not().isEmpty().withMessage("pincode is required"),
    body('phone').not().isEmpty().withMessage("phone is required"),
],async(req : Request ,res : Response)=>{
    await usercantroller.creatpost(req,res);
    console.log(req.body);
    
})

// userrouter.get("/",[],async(req:Request , res : Response)=>{
//     await usercantroller.getuser(req,res);

// })

export default userrouter