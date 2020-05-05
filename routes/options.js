const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// CURRENT PATH = 'api/v1/options'

// GET all options by decision e.g. /api/v1/options?decision=6542215664655
// or all options e.g. /api/v1/options
router.get("/", ctrl.options.get);

// POST new option
router.post("/", ctrl.options.create);

// GET option by id
router.get("/:id", ctrl.options.show);

// UPDATE option by id
router.put("/:id", ctrl.options.update);

// DELETE option by id
router.delete("/:id", ctrl.options.remove);

module.exports = router;
