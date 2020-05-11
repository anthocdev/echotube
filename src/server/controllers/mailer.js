const mailer = require("nodemailer");

let transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "echotube1@gmail.com",
    pass: "echomail224",
  },
});

module.exports = {
  sendMail: async (req, res, next) => {
    console.log("Mailer methond called");

    console.log(req);
    let mailOptions = {
      from: "echotube1@gmail.com",
      to: "echotube1@gmail.com",
      subject: "Message From " + req.body.name,
      text: req.body.message + " \nEmail From: " + req.body.email,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        res.sendStatus(500);
        console.log("mailer error", err);
      } else {
        res.sendStatus(200);
        console.log("Mailer sent a message");
      }
    });
  },
};
