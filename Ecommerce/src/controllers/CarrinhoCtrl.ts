import { Request, Response } from 'express';
import { Carrinho } from '../models/Carrinho';
import { Usuario } from '../models/Usuario';
import { Item } from '../models/Item';

export class CarrinhoCtrl {
    constructor(){
        const usuario = new Usuario('José das Couves', 'josedascouves@gmail.com');
        const itens = [];
    }

    obterCidadeComCEP(req: Request, res: Response){        
        const cep = req.params.cep;

        const cidade = this.APIcidadeComCEP(cep);
       
        res.render('Carrinho/cidade', {cidade});
    }

    APIcidadeComCEP(cep: string): string{
        //aqui deve incluir um código de chama uma API real

        let cidade = '';

        if(cep == '36902114'){
            cidade = 'Manhuaçu';
        }else{
            cidade = 'undefined'
        }

        return cidade;
    }
}