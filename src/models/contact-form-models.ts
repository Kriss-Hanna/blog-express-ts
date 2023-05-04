import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

interface contactFormAttributes {
  id: string;
  nameAuthor: string;
  email: string;
  message: string;
}

class contactFormModel
  extends Model<contactFormAttributes>
  implements contactFormAttributes
{
  id!: string;
  nameAuthor!: string;
  email!: string;
  message!: string;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

contactFormModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    nameAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "contact-form",
  }
);

export default contactFormModel;
