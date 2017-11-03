
const express = require('express');
const router = express.Router();
const passport = require('passport');
const pollController = require('../controllers/poll.controller.js');
const userController = require('../controllers/user.controller.js');

router.get('/home', (req, res) => {
  pollController.getAllPolls(req, res);
});

router.post('/authenticate', (req, res) => {
  userController.authenticateUser(req, res);
});

router.get('/getAllPollsByAUser/:id', (req, res) => {
  pollController.getAllPollsByAUser(req, res);
});

router.post('/updateVotes', (req, res) => {
  pollController.vote(req, res);
});

router.post('/create', (req, res) => {
  userController.createUser(req, res);
});

router.post('/addPoll', passport.authenticate('jwt', {session:false}), (req, res) => {
  pollController.createAPoll(req, res);
});

router.get('/getAPoll/:id', (req, res) => {
  pollController.getAPoll(req, res);
});

router.get('/removePoll/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
  pollController.deleteAPoll(req, res);
});

module.exports = router;
