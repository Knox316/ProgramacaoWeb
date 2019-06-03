var nodeMailer = require('nodemailer');
generic = require('./genericController');
const Email = require("../models/Email");

var mail = new Email();


/** Sends Email */
async function SendEmail(req, res, next) {
  try {
    if ('Transport' in req.body)
      mail.Transport = req.body.Transport;
    if ('MailOptions' in req.body)
      mail.MailOptions = req.body.MailOptions;

    let response = await (mail.SendEmail());
    generic.SendResponse(req, res, response)
  }
  catch (err) {
    generic.SendResponse(req, res, err)
  }
}

exports.SendEmail = SendEmail;


