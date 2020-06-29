var mysql=require('mysql');
var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"person"
});

conn.connect(function(err)
{
    if(err)
    throw err;
    console.log("Connection Established");
    var sql="SELECT * FROM student ORDER by name";
    conn.query(sql,function(err,result)
    {
        if(err)
        throw err;
        console.log(result);
    });
});