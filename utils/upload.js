import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
url:`mongodb://${username}:${password}@ac-oqq9ajl-shard-00-00.jn3njcw.mongodb.net:27017,ac-oqq9ajl-shard-00-01.jn3njcw.mongodb.net:27017,ac-oqq9ajl-shard-00-02.jn3njcw.mongodb.net:27017/?ssl=true&replicaSet=atlas-37f4m5-shard-0&authSource=admin&retryWrites=true&w=majority`,
options: { useNewUrlParser: true },
file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mineType) === -1) 
        return `${Date.now()}-blog-${file.originalname}`;
    
    return{
        bucketName: "phatos",
        fileName: `${Date.now()}-blog-${file.originalname}`
    }
}

});

export default multer({storage});





