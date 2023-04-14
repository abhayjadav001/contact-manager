import { Router , Request, Response, response } from "express";
import *as groupControllar from "../controllar/groupControllar" 
import { body } from "express-validator";
import { request } from "http";

const groupRouter : Router = Router();

/**
 * @usage : to get all groups
 * @method : get
 * @param:no - params
 * @url:http//localhost:9000/groups
 */
groupRouter.get("/",[

]),async(req:Request,res:Response)=>{
    await groupControllar.getAllGroups(req,res);
};
/**
 * @usage : create group
 * @method : post
 * @param:no - params
 * @url:http//localhost:9000/groups
 */
groupRouter.post("/",[
    body('name').not().isEmpty().withMessage("Name is Required")
        ],async(req:Request,res:Response) => {
            await groupControllar.createGroup(req,res);
        })
/**
 * @usage : to getgroup
 * @method : get
 * @param:no - params
 * @url:http//localhost:9000/groups/`
 */
groupRouter.get("/:groupsid",[],async(req:Request,res:Response) => {
    await groupControllar.getGroup(req,res);
})
export default groupRouter; 