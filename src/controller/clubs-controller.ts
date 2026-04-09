import { Request, Response } from "express";
import * as service from "../service/clubs-service"

export const getClubs = async (req: Request, res: Response) => {
    const response = await service.getClubsService();
    
    res.status(response.statusCode).json(response.body); 
}