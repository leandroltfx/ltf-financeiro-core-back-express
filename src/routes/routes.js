const routes = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).send({ message: 'API - LTF Financeiro works!' });
    });

}

export default routes;
