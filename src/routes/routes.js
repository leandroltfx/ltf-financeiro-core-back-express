import express from 'express';

import loginRoutes from './login-routes.js';

const routes = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).send({ message: 'API - LTF Financeiro works!' });
    });

    app.use(
        express.json(),
        loginRoutes
    );

}

export default routes;
