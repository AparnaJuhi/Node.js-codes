var mysql=require('mysql')
var conn=mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"person"
});

conn.connect(function(err)
{
    if(err) throw err;
    console.log('connected!!');
    var sql = "CREATE TABLE student (name VARCHAR(255), cgpa VARCHAR(255))";
    conn.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log('Table Created !!');
    });

});