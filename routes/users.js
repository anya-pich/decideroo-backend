const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// PATH = /api/v1/users

// get all users - for dev
router.get("/", ctrl.users.index);

// get the user's profile using their ID
router.get("/:id", ctrl.users.show);

// update user's profile using their ID
router.put("/:id", ctrl.users.update);

// remove user's profile by ID
router.delete("/:id", ctrl.users.remove);

module.exports = router;
