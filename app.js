const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos.js');
const port = 8000;

app.use(express.json());

app.use('/todos', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => 
    console.log(
        `Server berjalan di port : http://localhost:${port}`)
);