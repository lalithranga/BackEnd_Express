
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import jwt from 'jsonwebtoken';
import productRouter from './routers/productRouter.js';


const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    let token = req.headers['authorization'];  // Correct header access

    if (token && token.startsWith('Bearer ')) {  // Check if token exists and starts with 'Bearer'
        token = token.replace("Bearer ", "");
        
        jwt.verify(token, "Dhanushika90@", (err, decoded) => {

            if (!err) {
                req.user = decoded;  // Attach decoded token to request object
                
       
            }
        });  // Remove 'Bearer ' prefix
    }

  next();
});


   

let mongodbUrl= "mongodb+srv://admin:1234@cluster0.k9s9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongodbUrl);
let connection= mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.listen(3000
    , () => {
    console.log('Server is running on port 3000');
});
