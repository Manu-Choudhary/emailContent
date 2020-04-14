const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const emails = [
  {
    id: 1,
    email: "abc@gmail.com",
    content: "Lorem Impsum dolor sit amet, consectetur adipiscing elit",
  },
];

//Home Route

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Getting email
app.get("/email", (req, res) => {
  res.send(emails);
});

//Getting Email Content

// app.get("/emailcontent", (req, res) => {
//   for (let i = 0; i < email.length; i++) {
//     res.send(email[i].content);
//   }
// });

//posting/updating email
app.post("/", (req, res) => {
  let email = req.body.email;
  let emailcontent = req.body.emailContent;

  if (emails.includes(email) === true) {
    res.send("Email already exists");
  } else {
    emails.push({ email, emailcontent });
    res.send("Email added");
  }
});

//posting/updating email content

// app.post("/", (req, res) => {
//   let emailcontent = req.body.emailContent;
//   emails.push(emailcontent);
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
