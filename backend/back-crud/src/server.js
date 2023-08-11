import express from "express"
import sqlite3 from "sqlite3"
import cors from "cors"

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const db = new sqlite3.Database("./src/database.db")

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      cpf TEXT,
      phone TEXT
    )
  `)
})

// Inserindo dados no banco de dados
app.post("/usuarios", (req, res) => {
  const { name, email, cpf, phone } = req.body

  db.run(
    `INSERT INTO users (name, email, cpf, phone) VALUES (?, ?, ? ,?)`,
    [name, email, cpf, phone],
    (error) => {
      if (error) {
        console.error(error)
        res.sendStatus(500)
      } else {
        res.sendStatus(201)
      }
    }
  )
})

// Criando uma rota para buscar os usuários
app.get("/usuarios", (req, res) => {
  db.all(`SELECT * FROM users`, (error, rows) => {
    if (error) {
      console.error(error)
      res.sendStatus(500)
    } else {
      res.json(rows)
    }
  })
})

// Atualizando dos usuários
app.put("/usuarios/:id", (req, res) => {
  const { name, email, cpf, phone } = req.body
  const { id } = req.params

  db.run(
    `UPDATE users SET name = ?, email = ?, cpf = ?, phone = ? WHERE id = ?`,
    [name, email, cpf, phone, id],
    (error) => {
      if (error) {
        console.error(error)
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    }
  )
})

// Deletando usuário
app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params

  db.run(`DELETE FROM users WHERE id = ?`, id, (error) => {
    if (error) {
      console.error(error)
      res.sendStatus(500)
    } else {
      res.sendStatus(200)
    }
  })
})

app.listen(port, () => {
  console.log(`servidor rodando na port ${port}`)
})
