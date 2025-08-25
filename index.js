const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

let alunos = [
    { id: 1, nome: "João"}
]

app.get('/aluno', (req, res) => {
    res.json(alunos)
})

app.post('/aluno', (req, res) => {
    const novoAluno = { id: alunos.length + 1, ...req.body}
    alunos.push(novoAluno)
    res.status(201).json(novoAluno)
})

app.put('/aluno/:id', (req, res) => {
    const { id } = req.params

   const alunoIndex = alunos.findIndex(a => a.id == id)

   if (alunoIndex > -1) {
    alunos[alunoIndex] = {id: Number(id), ...req.body}
    res.status(200).json(alunos[alunoIndex])
   } else {
    res.status(404).json({ massage: "Aluno não encontrado"})
   }
})

/*/
app.delete('/aluno/:id', (req, res) => {
    const { id } = req.params

    const alunoIndex = alunos.findIndex(a => a.id== id)

    if (alunoIndex > -1) {
        alunos.splice(alunoIndex, 1)
        res.status(200).json({ message: "Aluno removido com sucesso."})
    } else {
        res.status(404).json({message: "Aluno não encontrado."})
    }
})
*/
app.listen(port, () => {
    console.log(alunos)
})