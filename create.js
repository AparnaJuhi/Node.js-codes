var mysql=require('mysql')
var conn=mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
});

conn.connect(function(err)
{
    if(err) throw err;
    console.log('connected!!');
    var sql="CREATE DATABASE mydb";
    conn.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log('Values inserted !!');
        console.log("Rows affected"+result.affectedRows);
    });

});