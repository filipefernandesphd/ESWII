import { Usuario } from "../src/models/Usuario";

describe('Usuario', ()=>{
    it('deve ser criado corretamente', ()=>{
        const usuario = new Usuario('João','joao@gmail.com');
        
        expect(usuario.getNome()).toBe('João');
        expect(usuario.getEmail()).toBe('joao@gmail.com');
    });

    it('deve permitir atualizar o nome', ()=>{
        const usuario = new Usuario('João','joao@gmail.com');
        usuario.setNome('Maria');

        expect(usuario.getNome()).toBe('Maria');
    })

    it('deve permitir atualizar o email', ()=>{
        const usuario = new Usuario('João','joao@gmail.com');
        usuario.setEmail('maria@gmail.com');

        expect(usuario.getEmail()).toBe('maria@gmail.com');
    })
});