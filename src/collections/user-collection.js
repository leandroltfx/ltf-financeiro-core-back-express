import mongoose from 'mongoose';

const userCollection = new mongoose.Schema(
  {
    id: {type: String},
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    userPassword: {type: String, required: true}
  }
);

export default mongoose.model('usuarios', userCollection);
