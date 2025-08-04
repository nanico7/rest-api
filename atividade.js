import express from "express";

var ultimoid = 1;
var usuario = [];

const app = express();
app.use(express.json());

app.get('/usuarios', (res, req)=>{
    console.log("usuarios");
    res.status(200).json(usuario);
});
app.get('/usuario/:id', (res, req) =>{
    console.log("rota usuarios com parametros: ", req.params);

});
app.post('/usuario/criar', (req, res) =>{
    //quem me chamar vai passar/tem q passar nome e email no corpo(body) da requisição
    const {nome, email} = req.body;
        const usuario = {
        id:usuario++,
        nome,
        email,
    };
    if(!nome || !  email){
        res.status(400).json({ message: "Preencha todos os campos"});
        return;
    }
    console.log(nome, email);

    usuarios.push(usuario);
    res.status(201).json({message: "usuario criado com sucesso"})
});



app.listen(3000);

