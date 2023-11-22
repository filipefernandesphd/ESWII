import { CarrinhoCtrl } from '../../src/controllers/CarrinhoCtrl';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('GET cidade/:cep', ()=>{
    it('deve retornar o nome da cidade correta com base no CEP', async ()=>{
        const cep = '36902114';
        const cidadeSimulada = 'Manhuaçu';

        mock.onGet(`http://localhost:3000/cidade/${cep}`).reply(200, {
            cidade: cidadeSimulada,
        });

        // Chame a função que usa o axios para fazer a solicitação
        const carrinho = new CarrinhoCtrl();
        const resultado = await carrinho.APIcidadeComCEP(cep);

        // Verifique se a função retornou os dados simulados
        expect(resultado).toEqual(cidadeSimulada);
    });

    it('deve retornar undefined ao informar um CEP inválido', async ()=>{
        const cep = '000';
        const cidadeSimulada = 'undefined';

        mock.onGet(`http://localhost:3000/cidade/${cep}`).reply(200, {
            cidade: cidadeSimulada,
        });

        // Chame a função que usa o axios para fazer a solicitação
        const carrinho = new CarrinhoCtrl();
        const resultado = await carrinho.APIcidadeComCEP(cep);

        // Verifique se a função retornou os dados simulados
        expect(resultado).toEqual(cidadeSimulada);
    });

    // Limpe o mock após cada teste
    afterEach(() => {
        mock.reset();
    });    
});

