const fs = require('fs');
const path = require('path');
const { a, n, h } = require('../src/pedido');

const dataPath = path.join(__dirname, '../src/data.json');
let backupData = '';

beforeEach(() => {
  backupData = fs.readFileSync(dataPath, 'utf-8');
  fs.writeFileSync(dataPath, backupData, 'utf-8');
});

afterEach(() => {
  fs.writeFileSync(dataPath, backupData, 'utf-8');
});

test('Deve listar pedidos pré-existentes do arquivo JSON', () => {
  const pedidos = n();
  expect(Array.isArray(pedidos)).toBe(true);
  expect(pedidos.length).toBeGreaterThanOrEqual(3);
});

test('Deve criar um novo pedido e salvar no arquivo', () => {
  const novo = a('Café Moído', 3);
  expect(novo.id).toBeDefined();
  expect(novo.status).toBe('pendente');
  const pedidos = n();
  const encontrado = pedidos.find(p => p.id === novo.id);
  expect(encontrado).toBeTruthy();
});

test('Deve atualizar o status de um pedido existente', () => {
  const atualizado = h(1, 'entregue');
  expect(atualizado.status).toBe('entregue');
});

test('Deve lançar erro ao tentar criar pedido inválido', () => {
  expect(() => a('', 0)).toThrow('Dados inválidos para o pedido.');
});