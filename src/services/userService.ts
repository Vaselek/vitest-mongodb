import { Document } from 'mongoose';
import bcrypt from 'bcryptjs';

import User from '../models/userModel';

export const addUser = async (email: string, password: string): Promise<Document> => {
  const newUser = new User({
    email,
    password: await bcrypt.hash(password, 10)
  });

  return await newUser.save();
};