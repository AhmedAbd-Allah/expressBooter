const mongoose = require('mongoose');
const Sequelize = require('sequelize');
const ogmneo = require('ogmneo');



module.exports = {
    connectToDatabase: async function (databaseHost, databasePort, databaseType, databaseName, userName, password) {
        try {
            database = String(databaseType).toLowerCase()
            var user = "";
            user += userName ? userName : ""
            user += password ? password : ""
            switch (database) {
                case 'mongo':
                    try {
                        return (await mongoose.connect('mongodb://' + user + databaseHost + ":" + databasePort + "/" + databaseName, { useNewUrlParser: true }))
                    } catch (error) {
                        return (error);
                    }

                case 'postgres':
                    try {
                        return (await new Sequelize('postgres://' + user + databaseHost + ":" + databasePort + "/" + databaseName));
                    } catch (error) {
                        return (error);
                    }

                case 'mysql':
                    try {
                        return (await new Sequelize('mysql://' + user + databaseHost + ":" + databasePort + "/" + databaseName));
                    } catch (error) {
                        return (error);
                    }
                default:
                    return ("please enter one of the accepted values: [Mongo, MySQL, neo4j]");

            }

        } catch (error) {
            return error;
        }


    }
}


