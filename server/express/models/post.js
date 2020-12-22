module.exports = (sequelize, Sequelize) => {
  return sequelize.define('posts', {
    pno: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    uno: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    flag: {      
      type: Sequelize.INTEGER,    
      allowNull: false
    }
  }, { timestamps: true });
}