"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("Users", {
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
