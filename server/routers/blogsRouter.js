const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/");
router.get("/:id");
router.post("/save-draft");
router.post("/publish");

module.exports = router;
