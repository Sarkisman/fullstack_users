const { prisma } = require('../prisma/prisma-client');

/** 
@route GET /api/employees
@desc Получение всех сотрудников
@access Private
*/
const all = async (req, res) => {
  try {
    const emploees = await prisma.employee.findMany();
    return res.status(200).json(emploees);
  } catch (error) {
    return res.status(400).json({ message: 'Не удалось получить сотрудников' });
  }
};

/** 
@route POST /api/employees/add
@desc Добавление нового сотрудника
@access Private
*/
const add = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  all,
  add,
};
