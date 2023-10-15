var db = require("../db");

module.exports = async (_req, res, _next) => {
    try {
        var userResp = await axios.post('http://localhost:9088/user/get', {
            "what": [],
            "by": {
                "id": [req.body.userId]
            }
        });
        if(userResp.data.data.length <= 0) {
            res.status(403);
            return res.sendStatus(403);
        }
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