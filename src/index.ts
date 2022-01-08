import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.routes';

const app = express();

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// consigurações das rotas
app.use(usersRoute);

app.use(statusRoute);
// iniciando o servidor
app.listen(3000, () => {
    console.log("server is running");
});