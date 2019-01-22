//user
router.get("/new", userController.new);
router.get("/:id", userController.show);
router.post("/", userController.create);
