var nodeMailer = require('nodemailer');
var strMail = " <div class=\"center backgroundImage page\" style=\" margin: auto; position: relative; background: url('help.jpg') no-repeat;width: 750px; height: 500px; background-size:contain; font-family: 'monospace';\"> <h1 style=\"color: #8C8C8C\">Como classifica o nosso serviço?</h1> <div style=\"font-size: 37px; position: relative; border: 0px; width: 80%; height: 2em; top: 373px; color: #565573 \"> <a style=\"text-decoration: none; border: 3px solid #565573; padding: 2px 20px 2px 20px; color: inherit;\" href='http://localhost:3000/'>1</a> <a style=\"text-decoration: none; border: 3px solid #565573; padding: 2px 20px 2px 20px; color: inherit;\" href='http://localhost:3000/'>2</a> <a style=\"text-decoration: none; border: 3px solid #565573; padding: 2px 20px 2px 20px; color: inherit;\" href='http://localhost:3000/'>3</a> <a style=\"text-decoration: none; border: 3px solid #565573; padding: 2px 20px 2px 20px; color: inherit;\" href='http://localhost:3000/'>4</a> <a style=\"text-decoration: none; border: 3px solid #565573; padding: 2px 20px 2px 20px; color: inherit;\" href='https://www.w3schools.com?type=5'>5</a> </div> </div>";

class Email {

    constructor() {
        this.transport = {
            service: 'gmail',
            auth: {
                user: "ipcaweb2019@gmail.com",
                pass: "ipca2019"
            }
        }
        this.mailOptions = {
            from: "ipcaweb2019@gmail.com",
            to: 'brunor.1994@hotmail.com',
            subject: 'Sending Email using Node.js',
            // text: 'That was easy!',
            attachments: [{
                filename: 'help.png',
                path: __dirname + '/resources/images/help.jpg',
                cid: 'help'
            }],
            html: strMail
        };
    }

    get Transport() {
        return this.transport;
    }

    set Transport(transport) {
        return this.transport = transport;
    }

    get MailOptions() {
        return this.mailOptions;
    }

    set MailOptions(mailOptions) {
        return this.mailOptions = mailOptions;
    }

    SendEmail(transport, mailOptions) {
        MailOptions = mailOptions;
        Transport = transport;
        return SendEmail();
    }

    BuildIssueUserEmail(mail) {
        MailOptions.to = mail;
    }

    SendEmail() {
        return new Promise((resolve, reject) => {
            var transporter = nodeMailer.createTransport(this.Transport);

            transporter.sendMail(this.MailOptions, function (error, info) {
                error ? reject({ Error: error.message }) : resolve({ Result: 'Email Sent' });
            });
        });
    }

}

module.exports = Email;
