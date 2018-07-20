
##Aula

Trabalhando com url

https://www.w3schools.com/nodejs/nodejs_url.asp

Instalando modulo

https://www.w3schools.com/nodejs/nodejs_npm.asp

Node.js Events

https://www.w3schools.com/nodejs/nodejs_events.asp


Node.js Upload Files

https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp
   
     npm install formidable   
   -
         var http       = require('http')
         var formidable = require('formidable')
         var fs         = require('fs')
         http.createServer(function (req, res) {
             if(req.url == '/fileupload'){
                var form = new formidable.IncomingForm()
                form.parse(req, function (err, fields, files) {
     
                    var oldpath = files.filetoupload.path
                    var newpath = 'C:/Users/Marcos/Documents/CarlosBruno/filenode/' + files.filetoupload.name
                    fs.rename(oldpath, newpath, function (err) {
                       if(err) throw err
                       res.write('File uploaded and moded!')
                       res.end()
                    })
                })
         }else{
             res.writeHead(200, { 'Content-Type' : 'text/html' })
             res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
             res.write('<input type="file" name="filetoupload"><br>')
             res.write('<input type="submit" >')
             res.write('</form>')
             res.end()
         }
     
     }).listen(8080)

   
Node.js Send an Email - Enviando e-mail com node

https://www.w3schools.com/nodejs/nodejs_email.asp

    npm install nodemailer
-

        var nodemailer = require('nodemailer');
        
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
          }
        });
        
        var mailOptions = {
          from: 'youremail@gmail.com',
          to: 'myfriend@yahoo.com',
          subject: 'Sending Email using Node.js',
          text: 'That was easy!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

   
Node.js MySQL

https://www.w3schools.com/nodejs/nodejs_mysql.asp

    npm install mysql
-
        var mysql = require('mysql');
        
        var con = mysql.createConnection({
          host: "localhost",
          user: "yourusername",
          password: "yourpassword"
        });
        
        con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
        });

Node.js MySQL Create Database

https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp



    var mysql = require('mysql');
    
    var con = mysql.createConnection({
      host: "localhost",
      user: "yourusername",
      password: "yourpassword"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
    });

Node.js MySQL Create Table

https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp

    var mysql = require('mysql');
    
    var con = mysql.createConnection({
      host: "localhost",
      user: "yourusername",
      password: "yourpassword",
      database: "mydb"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    });
Insert Into Table

https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });

Insert Multiple Records
    
    var sql = "INSERT INTO customers (name, address) VALUES ?";
      var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });


The Result Object

    {
      fieldCount: 0,
      affectedRows: 14,
      insertId: 0,
      serverStatus: 2,
      warningCount: 0,
      message: '\'Records:14  Duplicated: 0  Warnings: 0',
      protocol41: true,
      changedRows: 0
    }
Get Inserted ID

    con.connect(function(err) {
      if (err) throw err;
      var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
      });
    });
    
    
Node.js MySQL Select From

https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
    
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      
The Result Object

As you can see from the result of the example above, the result object is an array containing each row as an object.

    console.log(result[2].address);
The Fields Object

The third parameter of the callback function is an array containing information about each field in the result.

    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
      });


