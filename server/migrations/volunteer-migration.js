'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Volunteers', {
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
            company: {
                type: Sequelize.STRING
            },
            role: {
                type: Sequelize.STRING
            },
            rate: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.TEXT
            },
            language: {
                type: Sequelize.JSON
            },
            hour: {
                type: Sequelize.STRING
            },
            skill: {
                type: Sequelize.JSON
            },
            preference: {
                type: Sequelize.JSON
            },
            newsletter: {
                type: Sequelize.STRING
            },
            requests: {
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
        await queryInterface.dropTable('Volunteers');
    }
};
