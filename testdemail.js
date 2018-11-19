const nodemailer = require('nodemailer');
const xoahth2 = require('xoauth2')

var transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
        xoath2: xoahth2.createXOAuth2Generator({
            user: 'aaron.bernard.lmt@gmail.com',
            clientId: '1028664204512-uj0sejvg4arp237706vq785dssmsicvn.apps.googleusercontent.com',
            clientSecret: 'SUbOTEHj4cuBWkknCxKjKDD6',
            refreshToken: '1/j_gXQRjYkP3vOJQrZysDjRHIJo27xotzrBwqlIMww4s',
        })
    }
});

var mailOptions = {
  from: 'Aaron <aaron.bernard.lmt@gmail.com>',
  to: 'ourfamilybiz78@gmail.com',
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