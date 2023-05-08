const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {};

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING(500),
            allowNull:false,
        },
        content: {
            type: DataTypes.STRING(10000),
            allowNull: false
        },
        date_created:{
            type: DataTypes.STRING,
            allownull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'user',
                key: 'id',
            },
        },
        date_updated: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }

);

module.exports = Posts;