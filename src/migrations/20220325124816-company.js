"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("Companies", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalTraveledWeek: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: "total_traveled_week",
      },
      totalOrder: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: "total_order",
      },
      completedOrders: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: "completed_orders",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Users");
  },
};
