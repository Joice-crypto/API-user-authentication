import User from '../model/user.model';
import db from '../db'; 
import { query } from 'express';


class UserRepository {

 async   findAllUsers(): Promise<User[]>{
        const query = `SELECT uuid,username FROM aplication_user`;
        
        const result = await db.query<User>(query);

      const rows =  result.rows

        return rows || [];
    }


}

export default new UserRepository();