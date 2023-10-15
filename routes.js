var router = require('express').Router();
var controllers = require('./controllers');

router.route('/like').post(controllers.like);
router.route('/read').post(controllers.read);
router.route('/unlike').post(controllers.unlike);
router.route('/topcontent').post(controllers.topContent);

module.exports=router;