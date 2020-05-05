const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// CURRENT PATH = 'api/v1/decisions'

// GET all decisions by user e.g. /api/v1/decisions?u=6542215664655
// or all decisions e.g. /api/v1/decisions
router.get("/", ctrl.decisions.get);

// POST new decision
router.post("/", ctrl.decisions.create);

// GET decision by id
router.get("/:id", ctrl.decisions.show);

// UPDATE decision by id
router.put("/:id", ctrl.decisions.update);

// DELETE decision by id
router.delete("/:id", ctrl.decisions.remove);

module.exports = router;
