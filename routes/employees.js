const express = require('express');
const {
  all,
  add,
  remove,
  edit,
  employee,
} = require('../controllers/employees');
const { auth } = require('../middleware/auth');
const router = express.Router();

// /api/employees
router.get('/', auth, all);
// /api/employees/:id
router.get('/:id', auth, employee);
// /api/employees/add
router.post('/add', auth, add);
// /api/employees/remove/:id'
router.delete('/remove/:id', auth, remove);
// /api/employees/edit/:id'
router.put('/edit/:id', edit);

module.exports = router;
