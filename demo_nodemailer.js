var nodemailer  = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cbcarlos07@gmail.com',
        pass: 'brito1985.'
    }
})

var mailOption = {
    from: 'cbcarlos07@gmail.com',
    to  : 'cbcarlos08@gmail.com',
    subject: 'Sending Email using node.js',
    text: 'That was easy!'
}

transporter.sendMail(mailOption, function (error, info) {
    if(error){
        console.log(error)
    }else{
        console.log( 'Email sent: ' + info.response )
    }
})
