const Venda = require("../models/Venda");
const ItemVenda = require("../models/ItemVenda");
const Produto = require("../models/Produto");

jest.mock("../models/ItemVenda");
jest.mock("../models/Produto");

let venda, p1, p2;

beforeEach(()=>{
    venda = new Venda("001");
    p1 = new Produto("Calça" , 300.0);
    p2 = new Produto("Blusa" , 50.9);

    jest.clearAllMocks();

    ItemVenda.mockImplementation(function(produto, qtd) {
        this.produto = produto;
        this.qtd = qtd;
    });
});

describe("Venda" , ()=>{
    it("deve ser criada corretamente ao informar o ID" , ()=>{
        expect(venda.id).toBe("001");
    });

    it("deve lançar uma exceção se não informar ID ao criá-la" , ()=>{
        expect(() => new Venda()).toThrow("Informar ID da venda!");
    });

    it("deve adicionar um item corretamente" , ()=>{
        venda.adicionarItem(new ItemVenda(p1,1));
        venda.adicionarItem(new ItemVenda(p2,3));

        expect(venda.itens.length).toBe(2);
        expect(ItemVenda).toHaveBeenCalledTimes(2);
        expect(ItemVenda).toHaveBeenCalledWith(p1,1);
        expect(ItemVenda).toHaveBeenCalledWith(p2,3);
    });

    it("deve lançar exceção se adicionar algo que não seja item de venda" , ()=>{        
        expect(()=>venda.adicionarItem("teste")).toThrow("Adicione um produto válido!");
        expect(()=>venda.adicionarItem(1)).toThrow("Adicione um produto válido!");
    });

    it("deve lançar exceção se inserir uma quantidade inválida do item" , ()=>{
        expect(()=>venda.adicionarItem(new ItemVenda(p1,"1"))).toThrow("Adicione uma quantidade válida!");
    });
});