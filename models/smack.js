module.exports = function(sequelize, DataTypes) {

    const Smack = sequelize.define('smack', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        team: {
            type: DataTypes.STRING
        },
        smack: {
            type: DataTypes.TEXT
        }
    });

    return Smack;
}