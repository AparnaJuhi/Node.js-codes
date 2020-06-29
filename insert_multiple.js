var mysql=require('mysql');
var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"person"
});

conn.connect(function(err)
{

    if(err) throw err;
    console.log("Connection Established !");
    var sql="INSERT INTO student VALUES?";
    var values=[['John','9'],['Rob','8']];
    conn.query(sql,[values],function(err,result)
    {
        if(err) throw err;
        console.log("No of rows inserted "+result.affectedRows);
        console.log("Field count "+result.fieldCount);
        console.log("Message "+result.message);
        console.log("ID inserted "+result.insertId);
    });
});