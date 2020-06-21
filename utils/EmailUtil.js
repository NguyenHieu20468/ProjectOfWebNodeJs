var nodemailer = require('nodemailer');
var MyConstants = require("./MyConstants.js");
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: MyConstants.EMAIL_USER,
    pass: MyConstants.EMAIL_PASS
  }
});
var EmailUtil = {
  send(email, id, token) {
    var text = 'Vui lòng click vào đường link NÀY để xác nhận tài khoản, cảm ơn:\n';
    text += 'http://' + MyConstants.HOSTNAME + '/verify?id=' + id + '&token=' + token;
    return new Promise(function (resolve, reject) {
      var mailOptions = {
        from: MyConstants.EMAIL_USER,
        to: email,
        subject: 'Signup | Verification',
        text: text
      };
      transporter.sendMail(mailOptions, function (err, result) {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
};
module.exports = EmailUtil;