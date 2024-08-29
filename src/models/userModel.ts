import mongoose, {Schema} from 'mongoose';
import { UserType } from '../types/userTypes';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
},{timestamps:true});

const User = mongoose.model<UserType>('User', userSchema);

export default User;