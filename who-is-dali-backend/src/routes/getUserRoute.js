import {getUser} from '../fakeDb.js' // db.js to access real database, fakeDb.js to use fake one

export const getUserRoute = {
    path: '/api/users/:username',
    method: 'get',
    handler: (req, res) => {
        const { username } = req.params;
        try {
            getUser(username).then(user => res.status(200).json({...user, username}));
        } catch (e) {
            res.status(404).send(e.message);
        }
    },
};