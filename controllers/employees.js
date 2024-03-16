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
    return res.status(500).json({ message: 'Не удалось получить сотрудников' });
  }
};

/** 
@route POST /api/employees/add
@desc Добавление нового сотрудника
@access Private
*/
const add = async (req, res) => {
  try {
    const { firstName, lastName, address, age } = req.body;
    if (!firstName || !lastName || !address || !age) {
      return res
        .status(400)
        .json({ message: 'Необходимо заполнить все обязательные поля' });
    }

    const employee = await prisma.employee.create({
      data: { ...req.body, userId: req.user.id },
    });

    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'Что-то пошло не так' });
  }
};

/** 
@route Delete /api/employees/remove/:id
@desc Удаление сотрудника
@access Private
*/
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    return res.status(204).json(OK);
  } catch (error) {
    return res.status(500).json({ message: 'Не удалось удалить сотрудника' });
  }
};

/** 
@route PUT /api/employees/edit/:id
@desc Редактирование сотрудника
@access Private
*/
const edit = async (req, res) => {
  try {
    const data = req.body;
    const id = data.id;

    await prisma.employee.update({ where: { id }, data });

    return res.status(204).json({});
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Не удалось редактировать данные сотрудника' });
  }
};

/** 
@route GET /api/employees/:id
@desc Получение сотрудника
@access Private
*/
const employee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.findUnique({ where: { id } });

    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'Не удалось получить сотрудника' });
  }
};

module.exports = {
  all,
  add,
  remove,
  edit,
  employee,
};
