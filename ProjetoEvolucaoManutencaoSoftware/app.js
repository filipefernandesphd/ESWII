const u = require('http');
const v = require('url');
const { n, a } = require('./src/pedido');

const t = 3000;

const s = u.createServer((r, o) => {
  const j = v.parse(r.url, true);

  if (r.method === 'GET' && j.pathname === '/pedidos') {
    const c = n();
    o.writeHead(200, { 'Content-Type': 'application/json' });
    o.end(JSON.stringify(c, null, 2));
  } else if (r.method === 'POST' && j.pathname === '/pedidos') {
    let d = '';
    r.on('data', g => (d += g));
    r.on('end', () => {
      try {
        const { produto, quantidade } = JSON.parse(d);
        const y = a(produto, quantidade);
        o.writeHead(201, { 'Content-Type': 'application/json' });
        o.end(JSON.stringify(y, null, 2));
      } catch (e) {
        o.writeHead(400, { 'Content-Type': 'application/json' });
        o.end(JSON.stringify({ erro: e.message }));
      }
    });
  } else {
    o.writeHead(404, { 'Content-Type': 'application/json' });
    o.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
});

s.listen(t, () => {
  console.log(`Servidor rodando em http://localhost:${t}`);
});