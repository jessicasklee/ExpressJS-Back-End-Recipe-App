//index
router.use('/', require('./application.js'));
router.use('/user', require('./user'));
router.use('/recipe', require('./recipe'));
