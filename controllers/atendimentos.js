module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está dando um GET e o galo é gigante!'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de atendimentos e está dando um POST e o galo é copeiro!')})
}