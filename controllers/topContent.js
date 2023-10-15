var db = require("../db");

module.exports = async (_req, res, _next) => {
    try {
        var result = await db.topContent();
        res.status(200);
        return await res.json({
            status: "success",
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        return res.json({
            status: "failed",
            message: "Something went wrong"
        });
    }
}