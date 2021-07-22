'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Upcomings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            learnerId: {
                type: Sequelize.STRING
            },
            volunteerId: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.STRING
            },
            priority: {
                type: Sequelize.STRING
            },
            experience: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            call: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Upcomings');
    }
};
