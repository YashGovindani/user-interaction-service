var utils = require("./utils");

module.exports = async (data) => {
    var client = await utils.getConnectedClient();
    var queryString = "INSERT INTO user_interaction(user_id, content_id, is_liked, is_read) VALUES($1, $2, $3, $4)";
    await client.query(queryString,[data.userId, data.contentId, data.isLiked, data.isRead]);
    await client.end();
}