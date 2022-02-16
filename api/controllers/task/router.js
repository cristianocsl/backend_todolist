const express = require('express');
const { getAllTasks } = require('.');
const { createTask } = require('.');
const { updateTask } = require('.');
// const { deleteTask } = require('.');
const { authentication } = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.get('/', authentication, getAllTasks);

router.post('/', authentication, createTask);

router.put('/:taskId', authentication, updateTask);

// router.delete('/:id', authentication, deleteTask);

module.exports = router;