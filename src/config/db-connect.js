import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://leandroltfx:asd123@cluster0.wyld4ap.mongodb.net/ltf-financeiro-database-mongo');

export default mongoose.connection;
