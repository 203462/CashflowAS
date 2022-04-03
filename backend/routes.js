const express = require('express')
const routes = express.Router()


routes.get('/flujos', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM flujos', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/flujos', (req, res) => {
    req.getConnection((err, conn) => {

        if (err) return res.send(err)
        console.log(req.body);
        conn.query('INSERT INTO flujos set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('Registro creado')
        })
    })
})

routes.get('/indicadores', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM indicadores', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/indicadores', (req, res) => {
    req.getConnection((err, conn) => {

        if (err) return res.send(err)
        console.log(req.body);
        conn.query('INSERT INTO indicadores set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('Registro creado')
        })
    })
})

routes.get('/categorias', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM categorias', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})
routes.get('/categorias/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        const id= req.params.id
        conn.query("select * from categorias WHERE id =  ?", [id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        console.log(req.body);
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

routes.post('/register', (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    const cargo = req.body.cargo;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios (user, password, cargo) VALUES (?,?, ?)', [user, password, cargo], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                if (result) {
                    res.send(result)
                } 
            }
        })
    })
})
module.exports = routes