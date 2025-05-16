const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/blogs");
router.get("/blogs/:id");
router.post("/blogs/save-draft");
router.post("/blogs/publish");

module.exports = router;
