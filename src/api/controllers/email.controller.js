var nodeMailer = require('nodemailer');
var mailAccount = 'ipcaweb2019@gmail.com';
var mailCredentials = 'ipca2019';

/** GET ISSUES BY ID */
exports.PostSendEmail = async (req, res, next) => {
  var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailAccount,
      pass: mailCredentials
    }
  });

  var mailOptions = {
    from: mailAccount,
    to: 'brunor.1994@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };


  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ Error: error.message });

    } else {
      res.json({ Result: 'Email Sent' });
    }
  });
}





