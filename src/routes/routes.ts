import { Router } from "express"; 
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "../controller/players-controller";
import { getClubs } from "../controller/clubs-controller";

const router = Router(); 

router.get("/players", getPlayer)
router.post("/players", postPlayer)
router.get("/players/:id", getPlayerById)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayer)

router.get("/clubs", getClubs)

export default router; 