const express = require("express");
const {
  verifySession,
} = require("supertokens-node/recipe/session/framework/express");
const { CREATE, GET_LIST } = require("../controller/user.controller");

const router = express.Router();

// Create a new note (protected)
router.post("/", verifySession(), CREATE);

// Get all notes (protected)
router.get("/", verifySession(), GET_LIST);

module.exports = router;
