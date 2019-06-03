var nodeMailer = require('nodemailer');

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
            html: '<h1>Welcome</h1><p>That was easy!</p>'
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
