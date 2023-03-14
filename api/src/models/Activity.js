const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity',{
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
          },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        difficulty : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        duration : {
            type : DataTypes.STRING,
            allowNull : false
        },
        season : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })
}