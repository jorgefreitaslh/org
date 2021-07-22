'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Learners', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            state: {
                type: Sequelize.STRING
            },
            bio: {
                type: Sequelize.STRING
            },
            businessName: {
                type: Sequelize.STRING
            },
            businessType: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.TEXT
            },
            language: {
                type: Sequelize.JSON
            },
            skill: {
                type: Sequelize.JSON
            },
            invited: {
                type: Sequelize.JSON
            },
            matching: {
                type: Sequelize.STRING
            },
            emailSettings: {
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
        await queryInterface.dropTable('Learners');
    }
};
