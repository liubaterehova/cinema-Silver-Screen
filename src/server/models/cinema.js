import mongoose, { Schema } from 'mongoose';

const cinemaSchema = new Schema({
  id: Number,
  label: String,
  cinema: String,
  address: String,
  cinemaCode: String,
});

mongoose.set('useCreateIndex', true);
export const Cinema = mongoose.model('cinema', cinemaSchema, 'cinemas');
