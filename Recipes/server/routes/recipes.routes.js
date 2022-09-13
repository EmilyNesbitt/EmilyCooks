const RecipeController = require("../controllers/recipes.controller");

module.exports = (app) => {
  app.get("/api/recipes", RecipeController.getAllRecipes);
  app.post("/api/recipes", RecipeController.addRecipe);
  app.get("/api/recipes/:_id", RecipeController.getRecipeById);
  app.put("/api/recipes/:_id", RecipeController.updateRecipe);
  app.delete("/api/recipes/:_id", RecipeController.deleteRecipe);
  app.get("/api/recipes_by_type/:type", RecipeController.getRecipesByType);
}