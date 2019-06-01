var nodeMailer = require('nodemailer');
mailAccount = 'ipcaweb2019@gmail.com';
mailCredentials = 'ipca2019';

defaultTransport = {
  service: 'gmail',
  auth: {
    user: mailAccount,
    pass: mailCredentials
  }
};

defaultMailOptions = {
  from: mailAccount,
  to: 'brunor.1994@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


/** Sends Email */
exports.SendEmail = async (req, res, next) => {
  var transporter = nodeMailer.createTransport('Transport' in req.body ? req.body.Transport : defaultTransport);

  transporter.sendMail('MailOptions' in req.body ? req.body.MailOptions : defaultMailOptions, function (error, info) {
    if (error) {
      res.json({ Error: error.message });

    } else {
      res.json({ Result: 'Email Sent' });
    }
  });
}



