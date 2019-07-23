express = require('express');
mailer = require('nodemailer');

var app = express();

var sendNotification = function(text){
    var transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'daduncan298@gmail.com',
            pass: 'spursfan9.'
        }
    });

    var mailOptions = {
        from: 'daduncan298@gmail.com',
        to: 'daduncan298@gmail.com',
        subject: text,
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}

app.get("/notification", (req, res) => {
    sendNotification(req.body);
});

export default app;