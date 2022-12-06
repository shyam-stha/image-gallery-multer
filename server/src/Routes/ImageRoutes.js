import { Router } from "express";
import { upload } from "../Middleware/Multer.js";
import { getImages, postImage, deleteImage } from "../Controllers/ImageControllers.js";

const router = Router()


router.post("/", upload.single('image'), postImage, (res, req) => {
    console.log("Received..")
})



export default router;