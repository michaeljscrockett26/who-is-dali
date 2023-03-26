import users from '../data/DALI_Data.json' assert {type: 'json'};

export const getUserRoute = {
    path: '/api/users/:name',
    method: 'get',
    handler: (req, res) => {
        const { name } = req.params;
        const user = users.find((u) => u.name === name);

        if (user) {
            res.status(200).json(user);
        } else {
            res.sendStatus(404);
        }
    },
};