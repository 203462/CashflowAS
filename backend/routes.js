const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM categorias', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO categorias set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('book added!')
        })
    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM categorias WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('book excluded!')
        })
    })
})

routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE categorias set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('book updated!')
        })
    })
})

routes.post('/login', (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE user = ? AND password = ?', [user, password], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                if (result) {
                    res.send(result)
                } else {
                    res.send({ message: 'Usuario o contrasenia incorrectos' })
                }
            }
        })
    })
})
module.exports = routes