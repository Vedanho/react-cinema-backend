const dotenv = require("dotenv")
const nodemailer = require("nodemailer")

async function mail(from, to, subject, html) {
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "magomed.arkhiyev@bk.ru",
      pass: "shwNTHiVrs4r2g0bz1LU",
    },
  })

  let info = await transporter.sendMail({
    from: "magomed.arkhiyev@bk.ru",
    to,
    subject,
    html,
  })
  console.log("Message sent: %s", info.messageId)
  console.log("Preview UPR: %s", nodemailer.getTestMessageUrl(info))
}

module.exports = mail
