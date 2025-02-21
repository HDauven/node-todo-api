const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


var id = "5ae866c059ac86013417affb";

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found!');
  }
  console.log('Todo by Id', todo);
}).catch((e) => console.log(e));

var userId = "5ae7feff2796782f43157d9d";
if (ObjectID.isValid(userId)) {
  User.findById(userId).then((user) => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User by Id', user);
  }).catch((e) => console.log(e));
} else {
  console.log('Invalid ID!');
}
