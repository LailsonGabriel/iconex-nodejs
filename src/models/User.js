const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalOrder: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "total_order",
        defaultValue: Math.floor(Math.random() * 1000),
      },
      completedOrders: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "completed_orders",
        defaultValue: Math.floor(Math.random() * 500),
      },
    },
    {
      timestamps: false,
    },
  );

  return User;
};

module.exports = User;
