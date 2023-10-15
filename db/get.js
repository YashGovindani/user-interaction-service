var utils = require("./utils");

module.exports = async (userId, contentId) => {
    var client = await utils.getConnectedClient();
    var queryString = "select is_liked, is_read from user_interaction where user_id = $1 and content_id = $2";
    let result  = await client.query(queryString,[userId, contentId]);
    await client.end();
    return result.rows.map(row => {return {isLiked: row.is_liked, isRead: row.is_read}});
}