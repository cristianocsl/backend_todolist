const express = require('express');
const { getAllTasks } = require('./index');
// const { createTask } = require('./createTask');
// const { updateTask } = require('./updateTask');
// const { deleteTask } = require('./deleteTask');
const { authentication } = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.get('/', authentication, getAllTasks);

// router.post('/', authentication, createTask);

// router.put('/:id', authentication, updateTask);

// router.delete('/:id', authentication, deleteTask);

module.exports = router;