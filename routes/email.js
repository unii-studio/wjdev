const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const { mongoURI, sendgridKey, emailAddress } = require('../config/config');

mongoose.connect(mongoURI || 'mongodb://localhost/unii', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose: Connected');
});

require('../models/email');
const Email = mongoose.model('emails');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
  sendgridKey ||
    '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',
);

module.exports = app => {
  app.post(
    '/send-email',
    [
      check('name')
        .isLength({ min: 1 })
        .trim()
        .withMessage('Name empty.'),
      check('email')
        .isEmail()
        .withMessage('email is invalid')
        .normalizeEmail(),
      check('subject')
        .isLength({ min: 1 })
        .trim()
        .withMessage('subject is empty.'),
      check('message')
        .isLength({ min: 1 })
        .trim()
        .withMessage('message is empty'),
    ],
    (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      new Email({
        from: req.body.name,
        emailAddress: req.body.email,
        subjectLine: req.body.subject,
        body: req.body.message,
        date: Date(),
      }).save(function(err, doc) {
        if (err)
          res.json(
            'Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:liwa.johnson@gmail.com">liwa.johnson@gmail.com',
          );
        else res.send(`Thanks for reaching out ${req.body.name}!`);
      });

      const msg = {
        to: req.body.email,
        from: emailAddress || 'liwa.johnson@gmail.com',
        emailAddress: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: `<h1>from: ${req.body.name}</h1>
                  <p>${req.body.message}</p>`,
      };

      sgMail
        .send(msg)
        .then(response => console.log('SENDGRID: Email Sent'))
        .catch(error => console.log('SENDGRID:' + error.message));
    },
  );
};
