import { Sequelize } from "sequelize";

const sequelize = new Sequelize('eCommerce', 'root', 'Swapnil@24', {
    dialect: 'mysql',
    host: 'localhost'
})

export default sequelize;