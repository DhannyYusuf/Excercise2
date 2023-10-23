import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class about extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pendidikan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    organisasi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pengalaman_kerja: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'about',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "about_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
