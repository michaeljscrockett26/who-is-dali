import {getUsers} from '../fakeDb.js' // db.js to access real database, fakeDb.js to use fake one

export const getUsersRoute = {
    path: '/api/users/',
    method: 'get',
    handler: (req, res) => {
        getUsers().then((users) => {
                if (users) {
                    res.status(200).json(users);
                } else {
                    res.sendStatus(404);
                }
            }
        );
    },
};