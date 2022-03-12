const fs = require ('fs')
const handlebars = require('handlebars')
const nodemailer = require('nodemailer')
const config = require('../config/config')



module.exports = {
    sendMail(emailData, callback) {
        console.log(emailData.name)
        let email = fs.readFileSync(__dirname + '/../views/email.hbs', 'utf8')
        let compiled_html = handlebars.compile(email)({
            name: emailData.name,
        })
        let transporter = nodemailer.createTransport(config.email)
        let mail_option = {
            from: config.email.auth.user,
            to: emailData.email,
            subject: emailData.subject,
            html: compiled_html,
            bcc: config.email.auth.user
        }
        transporter.sendMail(mail_option, (error) => {
            if (error) {
                callback (error)
            }
            callback ()
        })
    }
}