import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

interface PostAttributes {
  id: string;
  title: string;
  imageurl: string;
  description: string;
}

class PostModel extends Model<PostAttributes> implements PostAttributes {
  public id!: string;
  public title!: string;
  public imageurl!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PostModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "posts",
  }
);

export default PostModel;
