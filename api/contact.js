const sgMail = require('@sendgrid/mail');

module.exports = (req, res) => {
  sgMail.setApiKey(process.env.sendgrid_key);

  const msg = {
    to: 'pauloesb@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `
    <hr/>
    <h1>Name: ${req.body.name}</h1><br/>
    <h2>Email: ${req.body.email}</h2><br/>
    <hr/>
    <p>Message: ${req.body.message}</p>
    <hr/>
    `
  };

  sgMail.send(msg).then(() => res.status(200));
};
