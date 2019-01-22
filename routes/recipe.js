//recipe
router.post("/", recipeController.create);
router.get("/new", recipeController.new);
router.get("/:id", recipeController.show);
router.put("/:id", recipeController.update);