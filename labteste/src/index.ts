import express, {Request, Response} from "express";

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/' , (req:Request, res:Response)=>{
    res.send('Olá, Mundo!');
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});