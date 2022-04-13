const Sequelize =  require('sequelize');
require('dotenv').config()

// Create connection to our database
const sequelize = new Sequelize('just_tech_news_db', 'root', 'gitHub', {
 host: 'localhost',
 dialect: 'mysql',
 port: 3306
})

module.exports = sequelize;