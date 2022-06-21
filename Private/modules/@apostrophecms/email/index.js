const mailjetTransport = require('nodemailer-mailjet-transport');

module.exports = {
    options: {
        from: 'from-email-address',
        nodemailer: mailjetTransport({
            auth: {
                apiKey: '',
                apiSecret: ''
            }
        })
    }
};
