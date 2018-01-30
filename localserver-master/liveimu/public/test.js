var mysql      = require('mysql');
var con= mysql.createConnection({
  host     : 'localhost',
  user     : 'newuser',
  password : '1IeRUSaLiM1!',
  database : 'project'
});

con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + con.threadId);
});

var i = 1050;

con.query('INSERT INTO test (temp) VALUES ('+i + ')', function (error, results, fields) {
  if (!error)
  console.log('The solution is: ');
});


con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
  if(err) console.log('err: ', err);
  else console.log('Terminated done: ');
});
