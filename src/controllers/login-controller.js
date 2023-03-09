import userCollection from '../collections/user-collection.js'

export default class LoginController {

    static login = (req, res) => {
        userCollection.find((err, users) => {

            if (err) {
                return res.status(500).send({ message: `Ocorreu um erro: ${err.message}` });
            }
        
            let authenticated = false;
            let loggedUser = null;
            for (const user of users) {
                if (req.body.userMail === user.userMail && req.body.userPassword === user.userPassword) {
                    authenticated = true;
                    loggedUser = { id: user._id, userMail: user.userMail, userName: user.userName };
                }
            }

            if (authenticated) {
                res.status(200).send({ message: 'Login efetuado com sucesso!', loggedUser });
            } else {
                res.status(400).send({ message: 'Email e/ou senha inválidos.', loggedUser });
            }
        });
    }

}
