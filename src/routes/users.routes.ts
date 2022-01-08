// get pegar todos os usuarios
// get pegar um usuario especifico pelo id 
// post salvar um usuario novo 
// put para alterar um usuario
// delete para deletar um usuario

import { StatusCodes } from 'http-status-codes'
import { Router, Request, Response, NextFunction } from "express";
import { send } from 'process';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ usersName: 'Joice' }];
    res.status(StatusCodes.OK).send({ users });
});

usersRoute.get('/users/:uuid', (req: Request <{uuid:string}>, res: Response, next: NextFunction) => {
    const user = [{
        userName: 'Joice Cristina',
        userId: 1
    }];
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/user', (req: Request, res: Response, next: NextFunction) =>{
    
    const newUser = (req.body);
    
    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
    
});

usersRoute.put('/users/:uuid', (req: Request <{uuid:string}>, res: Response, next: NextFunction) =>{

    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send({modifiedUser});

});

usersRoute.delete('/users/:uuid', (req: Request <{uuid:string}>, res: Response, next: NextFunction) => {


    res.sendStatus(StatusCodes.OK);


});

export default usersRoute;