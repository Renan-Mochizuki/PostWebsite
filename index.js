const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Post = require('./models/Post');
require('dotenv').config();

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    Post.findAll().then(posts => {
        const postsData = posts.map(post => post.toJSON());
        res.render('home', { posts: postsData });
    });
});

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch(erro => {
        res.send("Houve um erro: " + erro);
    })
});

app.get('/deletar/:id', (req, res) => {
    Post.destroy({ where: { 'id': req.params.id } })
        .then(() => {
            res.redirect('/');
        }).catch(erro => {
            res.send("Essa postagem não existe ");
        })
});

app.get('/alterar/:id', (req, res) => {
    Post.findAll({ where: { 'id': req.params.id } })
        .then(posts => {
            posts = posts.map(post => { return post.toJSON() });
            res.render('alterar', { posts: posts })
        })
});

app.post('/update', (req, res) => {
    Post.update({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }, {
        where: { id: req.body.id }
    }).then(() => {
        res.redirect('/');
    }).catch(erro => {
        res.send("Essa postagem não existe " + erro)
    })
});

const port = 8081;
app.listen(port, () => {
    console.log("Servidor rodando da url http://localhost:" + port)
});