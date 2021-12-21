const User = require('./user-model');

// const users = [
//   { id: 1, name: 'Ulbi' },
//   { id: 2, name: 'John' }
// ];

const getUsers = async (req, res) => {
  // if (req.params.id) {
  //   return res.send(users.find(user => user.id == req.params.id));
  // }
  let users;
  if (req.params.id) {
    users = User.findById(req.params.id);
  } else {
    users = User.find();
  }
  res.send(users);
};

const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.send(users);
};

module.exports = {
  getUsers,
  createUser
};
