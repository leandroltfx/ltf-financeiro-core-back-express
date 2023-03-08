import userCollection from '../collections/user-collection.js'

export default class LoginController {

    static login = (req, res) => {
        userCollection.find((err, users) => {

            if (err) {
                return res.status(500).send({ message: `Ocorreu um erro: ${err.message}` });
            }
        
            let authenticated = false;
            for (const user of users) {
                if (req.body.userEmail === user.userEmail && req.body.userPassword === user.userPassword) {
                    authenticated = true;
                }
            }

            if (authenticated) {
                res.status(200).send({ message: 'Login efetuado com sucesso!' });
            } else {
                res.status(400).send({ message: 'Email e/ou senha inválidos.' });
            }
        });
    }

}
