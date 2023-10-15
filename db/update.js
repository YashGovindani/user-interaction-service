var utils = require("./utils");

module.exports = async (data) => {
    var client = await utils.getConnectedClient();
    var queryString = "update user_interaction set is_liked = $1, is_read = $2 where user_id = $3 and content_id = $4";
    await client.query(queryString,[data.isLiked, data.isRead, data.userId, data.contentId]);
    await client.end();
}