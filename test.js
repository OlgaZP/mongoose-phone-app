const mongoose = require('mongoose');
const { Schema } = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/test_db')
  .then(data => console.log(`Connection OK!`))
  .catch(err => console.log(`err`, err));

const taskSchema = new Schema({
  body: String,
  user_id: mongoose.ObjectId,
});

const Task = mongoose.model('tasks', taskSchema);

(async () => {
  const newTask = {
    body: 'task 1',
    user_id: mongoose.Types.ObjectId('616adffbd31fa761d4ccd4b8'),
  };

  const newTaskInstanse = new Task(newTask);
  const createdTask = await newTaskInstanse.save();
  console.log(`createdTask`, createdTask);
})();
