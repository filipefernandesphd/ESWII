import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';

export class UsuarioCtrl{
    private _usuario: Usuario;
    private _titulo: string;

    constructor(){
        this._usuario = new Usuario('José das Couves', 'josedascouves@gmail.com');
        this._titulo = 'Dashboard';
    }
    
    dashboard(req: Request, res: Response){
        const dados = {
            'titulo': this._titulo,
            'nome': this._usuario.getNome(),
            'email': this._usuario.getEmail()
        };

        res.render('Usuario/dashboard', {dados});
    }

    atualizar(req: Request, res: Response){
        const dados = {
            'titulo': this._titulo + ' > Atualizar dados',
        };
        res.render('Usuario/atualizar', {dados});
    }

    dadosatualizados(req: Request, res: Response){
        this._usuario.setNome(req.body.nome);
        this._usuario.setEmail(req.body.email);

        const dados = {
            'titulo': this._titulo,
            'nome': this._usuario.getNome(),
            'email': this._usuario.getEmail()
        };

        res.render('Usuario/dashboard', {dados});
    }
}