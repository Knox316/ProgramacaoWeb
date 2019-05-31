var nodeMailer = require('nodemailer');

/** GET ISSUES BY ID */
exports.PostSendEmail = async (req, res, next) => {
  var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  var mailOptions = {
    from: 'brunor.1994@hotmail.com',
    to: 'a9969@alunos.ipca.pt',
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





