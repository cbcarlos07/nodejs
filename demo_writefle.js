var fs = require('fs')
fs.writeFile('mynewfile3.txt','Hello Word', function (err) {
    if(err) throw err
    console.log( 'Saved!' )
})