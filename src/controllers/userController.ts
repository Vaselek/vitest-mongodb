import { Response, Request } from 'express';
import { addUser } from '../services/userService';

export const registerUser = async (req: Request,res: Response): Promise<void> => {
  const { email, password } = req.body;
  const newUser = await addUser(email, password);
  res.status(201).json({ success: true, data: newUser });
};
