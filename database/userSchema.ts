import mongoose from "mongoose";
import { Iuser } from "../models/Iuser";



const userschema = new mongoose.Schema<Iuser>({
    name : {type : String,required : true},
    email : {type : String,required : true},
    address1 : {type : String,required : true},
    phone : {type : String,required : true},
    pincode : {type : String,required : true},
    password : {type : String,required : true},
    
},{timestamps : true});

const usertable = mongoose.model<Iuser>('user',userschema);

export default usertable
