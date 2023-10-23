import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _about from  "./about.js";
import _posting from  "./posting.js";
import _users from  "./users.js";
import {Sequelize} from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
function initModels(sequelize) {
  const about = _about.init(sequelize, DataTypes);
  const posting = _posting.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  about.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(about, { as: "abouts", foreignKey: "user_id"});
  posting.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(posting, { as: "postings", foreignKey: "user_id"});

  return {
    about,
    posting,
    users,
  };
}

const models = initModels(sequelize);
export default models;
export { sequelize };