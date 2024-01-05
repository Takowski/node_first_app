const jsonfile = require("jsonfile");

module.exports = function(app) {
  app.get("/users", (req, res) => {
    console.log("fetching all users");

    jsonfile.readFile("./DB/users.json", function(err, content) {
      // send file contents back to sender
      res.send(content);
    });
  });
app.post("/users/new", (req, res) => {
    let email = req.body.email;
    let username = req.body.username;

    jsonfile.readFile("./DB/users.json", function(err, content) {
        content.push({ email: email, username: username });
            console.log(content);
        jsonfile.writeFile("./DB/users.json", content, function(err) {
            console.log(err);
        });
        res.send(content);
        res.sendStatus(200);
    });
}); // Add a closing curly brace here
};