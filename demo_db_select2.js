var mysql   = require('mysql')
var con     = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '123',
    database    : 'mydb'
})

con.connect(function (err) {
    if(err) throw err
    console.log( 'Connected!' )
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if(err) throw err
        console.log( result )
        console.log( '---' )
        console.log( result[2].address )
    })
})
