var utils = require("./utils");

module.exports = async (data) => {
    var client = await utils.getConnectedClient();
    var queryString = `SELECT content_id, sum(case when "is_read" = true then 1 else 0 end) as reads, sum(case when "is_liked" = true then 1 else 0 end) as likes from user_interaction group by content_id order by reads desc, likes desc`;
    var result = await client.query(queryString,[]);
    await client.end();
    return result.rows;
}