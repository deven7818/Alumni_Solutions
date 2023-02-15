const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

/**
* 
* ****Send Mail
*
**/
app.post('/send', (req, res) => {

    var mailObj = {
        "name": req.body.name,
        "email": req.body.email,
        "phoneno": req.body.phoneno,
        "message": req.body.message,

    }

    console.log("mailObj:" + req.body.name);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'deven9405@gmail.com',
            pass: 'deven@7818',
        }
    });

    var mailOptions = {
        from: 'deven9405@gmail.com',
        to: 'd.even9405@gmail.com',
        subject: mailObj.name.trim() + ' Contacted via Portal',
        text: 'Name: ' + mailObj.name +  '\r\n' 
        + 'Email: '  + mailObj.email + '\r\n'  +
        'Contact Number: ' + mailObj.phoneno +
          '\r\n' +'\r\n'+'Message: ' + mailObj.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ "status": "success" })
        }
    });

});

app.get('/', (req,res) => {
    res.json( {
        "status":"ok"
    });
});

app.listen(8080, "127.0.0.1", () => {
    console.log("Up and Running - Node Service @ http://localhost:8080");
});