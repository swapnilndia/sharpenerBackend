import sequelize from "../utils/database.js";
import { DataTypes } from 'sequelize'


// Define the Appointment model
const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    appointment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    appointment_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    service: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    provider: {
        type: DataTypes.STRING(100)
    },
    location: {
        type: DataTypes.STRING(255)
    },
    notes: {
        type: DataTypes.TEXT
    },
    confirmation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

}, {
    timestamps: true, // Enable Sequelize's default timestamps (createdAt, updatedAt)
    tableName: 'appointments' // Set the table name explicitly
});

export default Appointment