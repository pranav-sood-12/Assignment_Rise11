import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

export default app;