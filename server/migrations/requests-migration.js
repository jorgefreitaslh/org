'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Requests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            learnerId: {
                type: Sequelize.STRING
            },
            priority: {
                type: Sequelize.STRING
            },
            experience: {
                type: Sequelize.STRING
            },
            volunteers: {
                type: Sequelize.JSON
            },
            dates: {
                type: Sequelize.JSON
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
        await queryInterface.dropTable('Requests');
    }
};
