const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// CURRENT PATH = 'api/v1/decisions'

// GET all decisions by user e.g. /api/v1/decisions?u=6542215664655
// or all decisions e.g. /api/v1/decisions
router.get("/", ctrl.decisionsCtrl.get);

// POST new decision
router.post("/", ctrl.decisionsCtrl.create);

// GET decision by id
router.get("/:id", ctrl.decisionsCtrl.show);

// UPDATE decision by id
router.put("/:id", ctrl.decisionsCtrl.update);

// DELETE decision by id
router.delete("/:id", ctrl.decisionsCtrl.remove);

module.exports = router;
