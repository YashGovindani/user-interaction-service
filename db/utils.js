const {Client } = require('pg');
const config = require('../config').db;

const connectionString = `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;

var getClient = () => {
    var client = new Client(connectionString);
    return client;
}

var getConnectedClient = async () => {
    let client = getClient();
    await client.connect();
    return client;
}

var dbEquivalent = {
    "userId": "user_id",
    "contentId": "content_id",
    "isLiked": "is_liked",
    "isRead": "is_read",
    "id": "id"
}

var codeEquivalent = {
    "user_id": "userId",
    "content_id": "contentId",
    "is_liked": "isLiked",
    "is_read": "isRead",
    "id": "id"
}

module.exports = {
    getClient,
    getConnectedClient,
    dbEquivalent,
    codeEquivalent
}