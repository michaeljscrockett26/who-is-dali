import users from '../data/DALI_Data.json' assert {type: 'json'};

export const getUsersRoute = {
    path: '/api/users/',
    method: 'get',
    handler: (req, res) => {
        if (users) {
            res.status(200).json(users);
        } else {
            res.sendStatus(404);
        }
    },
};