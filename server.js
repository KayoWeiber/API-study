import express from "express"
 
const app =  express() //define a variavel para se possa usar a biblioteca
app.use(express.json()) // define o express para usar em json
const users= []


app.post("/usuarios",(req,res)=>{
    users.push(req.body)//jogando o push para a lista

    res.status(201).send("ok")
})

app.get('/usuarios',(req,res) =>{
    res.status(200).json(users) //enviando uma resposta


})        //todos os usuarios

app.listen(3000) //rodar o servidor na porta 3000

/* 
criar API de usuarios
    -criar usuario
    -listar usuario
    -editar usuario
    -deletar usuario

*/


/*
app.post('/usuarios') //criar usuario
app.put('/usuarios') //editar usuario
app.delete('/usuarios') //deletar usuario
*/

/* 
1- tipo de tota/ metodo HTPP
2- enderço

*/

 /* 
 username: KayoWeiber
 password: e7lkOqU6HYF8RBOS
 */