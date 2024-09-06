const express = require("express");
const {
  getAllRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const { controlId } = require("../middleware");

const router = express.Router();


router.route("/api/places")
  .get(getAllRecipes)
  .post(createRecipe);

router
  .route("/api/place/:id")
  .get(controlId, getRecipe)
  .delete(controlId, deleteRecipe);

module.exports = router;
