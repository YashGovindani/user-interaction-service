var db = require("../db");
var axios = require('axios');

module.exports = async (req,res, _next) => {
    try {
        var contentResp = await axios.post('http://localhost:9080/content/get', {
            "userId": req.body.userId,
            "data": {
                "what": [],
                "by": {
                    "id": [req.body.contentId]
                }
            }
        });
        if(contentResp.data.data.length <= 0) {
            res.status(403);
            return res.sendStatus(403);
        }
        var rows = await db.get(req.body.userId, req.body.contentId);
        if(rows.length == 0) {
            await db.add({
                userId: req.body.userId,
                contentId: req.body.contentId,
                isLiked: false,
                isRead: false
            });
        } else if(rows[0].isLiked) {
            await db.update({
                userId: req.body.userId,
                contentId: req.body.contentId,
                isLiked: false,
                isRead: rows[0].isRead
            });
        }
        res.status(200);
        return res.json({
            status: "success"
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