const { prisma } = require('../prisma/prisma-client');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
/** 
@route POST /api/user/login
*/

const login = async (req, res) => {
  const { mail, password } = req.body;
  if (!mail && !password) {
    return res
      .status(400)
      .json({ message: 'Пожалуйста заполните обязательные поля' });
  }
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  const isPasswordCorrect = user && (await bcrypt.compare(password, user.password))

  if(user && isPasswordCorrect) {
    
  }
};

const register = async (req, res) => {
  res.send('register');
};
const current = async (req, res) => {
  res.send('current');
};

module.exports = {
  login,
  register,
  current,
};
