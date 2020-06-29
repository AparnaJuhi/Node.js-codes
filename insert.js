var mysql=require('mysql')
var conn=mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"mydb"
});

conn.connect(function(err)
{
    if(err) throw err;
    console.log('connected!!');
    var sql="INSERT INTO customers(name,pass) VALUES ?";
    var values=[['Ram','ram'],['Swara','swara']];

    conn.query(sql,[values],function(err,result)
    {
        if(err) throw err;
        console.log('Values inserted !!');
        console.log("Rows affected"+result.affectedRows);
    });

});