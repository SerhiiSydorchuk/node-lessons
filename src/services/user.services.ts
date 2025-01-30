import { ApiError } from "../errors/ApiError";
import {
  IUser,
  IUserDtoCreate,
  IUserDtoUpdate,
} from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }
  public async create(dto: IUserDtoCreate): Promise<IUser> {
    await this.isEmailExist(dto.email);
    return await userRepository.create(dto);
  }

  public async getUserById(userId: string): Promise<IUser> {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return user;
  }
  public async updateUser(dto: IUserDtoUpdate, userId: string): Promise<IUser> {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return await userRepository.updateById(dto, userId);
  }

  public async deleteUser(userId: string): Promise<void> {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    await userRepository.deleteById(userId);
  }
  private async isEmailExist(email: string): Promise<void> {
    const user = await userRepository.getByEmail(email);
    if (user) {
      throw new ApiError("Email already exist", 400);
    }
  }
}

export const userService = new UserService();
