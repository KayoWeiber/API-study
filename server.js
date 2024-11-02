import express, { query } from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
 
const app =  express() //define a variavel para se possa usar a biblioteca
app.use(express.json()) // define o express para usar em json
//const users= []


app.post("/usuarios",async(req,res)=>{
    await prisma.user.create({ //ao criar await é necessário criar o async
        data:{
            email:req.body.email,
            name: req.body.name,
            age:req.body.age
        }
    })
    //users.push(req.body)//jogando o push para a lista

    res.status(201).send("ok")
})

app.get('/usuarios',async (req,res) =>{
    let users=[]
    if(req.query){ // if para o name específico que vai ser digitado
        users = await prisma.user.findMany({
            where:{ //filtro de pesquisa
                name:req.query.name,
                email:req.query.email,
                age:req.query.age
            }
        })

    }else{
        const users= await prisma.user.findMany()

    }
    
    res.status(200).json(users) //enviando uma resposta
}) //todos os usuarios

app.put("/usuarios/:id",async(req,res)=>{ //"/usuarios/:id" :id é a criação de váriavel; alterar usuario
    await prisma.user.update({ //ao criar await é necessário criar o async
        where:{
            id:req.params.id
        },
        data:{
            email:req.body.email,
            name: req.body.name,
            age:req.body.age
        }
    })
    //users.push(req.body)//jogando o push para a lista

    res.status(201).send("ok")
})
app.delete("/usuarios/:id",async (req, res)=>{
    await prisma.user.delete({
        where:{
            id:req.params.id,
        }
    },
        )
    res.status(200).json({message:"usuario apagado com sucesso"})
})
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