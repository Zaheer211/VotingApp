const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '30056118058',
  database : 'voting_app_db'
});

connection.connect();

module.exports = {

    getAllPolls : function(callback) {
      connection.query('select * from polls', callback);
    },

    getAPoll : function(id, callback){
      connection.query('select * from polls where poll_id = ?', [id], callback);
    }

}

connection.end();
