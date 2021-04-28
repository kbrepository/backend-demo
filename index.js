/**
 * Created by web on 11/2/17.
 */

var nodeServer = require('./node_server');
// og("From mongo index **********************************************************************************************")
var mongo = require('./db_connections/mongo_connection');
nodeServer.server;
//log.info("From mongo index **********************************************************************************************")
mongo.mongoConnection();

