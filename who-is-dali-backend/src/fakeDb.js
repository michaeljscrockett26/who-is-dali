/**
 * a set of functions used to emulate ./db.js, so I don't have to keep making calls to firebase, so I can save money
 */

import users from './data/DALI_Data_withUsernames.json' assert {type: 'json'};

export const setUser = async (username, userInfo) => {
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex === -1) {
        users.push({...userInfo, username});
    } else {
        users[userIndex] = {...users[userIndex], userInfo};
    }
}


export const getUsers = async () => users;

export const getUser = async username => {
    const foundUser = users.find(user => user.username === username);
    if (!foundUser) {
        throw new Error(`User "${username}" does not exist!`);
    } else {
        return foundUser;
    }
}