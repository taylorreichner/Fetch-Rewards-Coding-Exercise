import { Router } from 'express';
import user from '../models/User.js'

module.exports = Router()
    .post('/user/new', (req, res, next) => {
        user.createUser({
            ...req.body,
        })
        .then((newUser) => res.send(newUser))
        .catch(next);
    })

    .get('/user/:id', (req, res, next) => {
        user.getUserById(req.params.id)
        .then((user) => res.send(user))
        .catch(next)
    }) 
    