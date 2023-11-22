import express from 'express';
import { UsuarioCtrl } from './controllers/UsuarioCtrl';
import { CarrinhoCtrl } from './controllers/CarrinhoCtrl';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Configurar o mecanismo de template Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routers
app.get('/', (req, res) => res.render('index'));

// Usuario
const usuarioCtrl = new UsuarioCtrl();
app.get('/usuario', (req, res) => usuarioCtrl.dashboard(req, res));
app.get('/usuario/atualizar', (req, res) => usuarioCtrl.atualizar(req, res));
app.post('/usuario/dadosatualizados', (req, res) => usuarioCtrl.dadosatualizados(req, res));

// Carrinho
const carrinhoCtrl = new CarrinhoCtrl();
app.get('/cidade/:cep', (req, res) => carrinhoCtrl.obterCidadeComCEP(req, res));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});