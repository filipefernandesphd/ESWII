const f = require('fs');
const p = require('path');
const z = p.join(__dirname, 'data.json');

function x() {
  const y = f.readFileSync(z, 'utf-8');
  return JSON.parse(y);
}

function w(q) {
  f.writeFileSync(z, JSON.stringify(q, null, 2), 'utf-8');
}

function a(b, c) {
  if (!b || c <= 0) {
    throw new Error('Dados inválidos para o pedido.');
  }
  const d = x();
  const e = d.length > 0 ? Math.max(...d.map(i => i.id)) + 1 : 1;
  const g = { id: e, produto: b, quantidade: c, status: 'pendente' };
  d.push(g);
  w(d);
  return g;
}

function h(i, j) {
  const k = x();
  const l = k.find(m => m.id === i);
  if (!l) throw new Error('Pedido não encontrado.');
  l.status = j;
  w(k);
  return l;
}

function n() {
  return x();
}

module.exports = { n, a, h };