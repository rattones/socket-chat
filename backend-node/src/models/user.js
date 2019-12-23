module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        uid: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        tableName: 'user',
        timestamps: false
    });

    return User;
}