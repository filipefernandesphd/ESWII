import express, {Request, Response} from "express";
import { Disciplina } from "./model/Disciplina";
import { Aluno } from "./model/Aluno";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/' , (req:Request, res:Response)=>{
    res.send('Olá, Mundo!');

    // let aluno = new Aluno();
    // let disc = new Disciplina();

    // disc.adicionarAluno(34);
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});