var db = require("../db");

module.exports = async (req,res, _next) => {
    try {
        var rows = await db.get(req.body.userId, req.body.contentId);
        if(rows.length == 0) {
            await db.add({
                userId: req.body.userId,
                contentId: req.body.contentId,
                isLiked: false,
                isRead: true 
            });
        } else if(!rows[0].isRead) {
            await db.update({
                userId: req.body.userId,
                contentId: req.body.contentId,
                isLiked: rows[0].isLiked,
                isRead: true
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