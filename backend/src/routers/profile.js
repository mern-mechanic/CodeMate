const express = require('express');
const profileRouter = express.Router();
const {
    profileViewController,
    profileListController,
    profileEditController,
    profileActivateController,
    profileDeactivateController,
    profileUpdatePasswordController,
    reverseStringController,
} = require('../controllers/profile');
const { userAuth } = require('../middleware/auth');

profileRouter.get('/list', userAuth, profileListController);
profileRouter.get('/view', userAuth, profileViewController);
profileRouter.patch('/edit', userAuth, profileEditController);
profileRouter.patch('/activate', userAuth, profileActivateController);
profileRouter.patch('/deactivate', userAuth, profileDeactivateController);
profileRouter.patch('/update-password', userAuth, profileUpdatePasswordController);
profileRouter.post('/reverse-string', userAuth, reverseStringController);

module.exports = profileRouter;
