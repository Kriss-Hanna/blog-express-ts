import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

interface UsersAttributes {
  id: string;
  username: string;
  password: string;
}

class UserModel extends Model<UsersAttributes> implements UsersAttributes {
  public id!: string;
  public username!: string;
  public password!: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);

export default UserModel;
