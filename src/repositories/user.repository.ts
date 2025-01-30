import {
  IUser,
  IUserDtoCreate,
  IUserDtoUpdate,
} from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async getList(): Promise<IUser[]> {
    return await User.find();
  }
  public async create(dto: IUserDtoCreate): Promise<IUser> {
    return await User.create(dto);
  }
  public async getById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }
  public async getByEmail(email: string): Promise<IUser> {
    return await User.findOne({ email });
  }
  public async updateById(dto: IUserDtoUpdate, userId: string): Promise<any> {
    return await User.findByIdAndUpdate(userId, dto, { new: true });
  }
  public async deleteById(userId: string): Promise<void> {
    return await User.findByIdAndDelete(userId);
  }
}

export const userRepository = new UserRepository();
