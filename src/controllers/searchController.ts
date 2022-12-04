import { Request , Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObjects';

export const search = (req: Request, res: Response ) =>{

    let query: string = req.query.q as string;

    //se nao colocar nada na busca, redirecionar para pagina inicial
    if(!query){
        res.redirect('/');
        return;
    }


    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });

}