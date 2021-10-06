const router = require("express").Router();

router.get("/", (req, res, next) => {
    console.log("You're in the index page");
    next();


});

module.exports = router;