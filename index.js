const express = require("express");
const app = express();
const PORT = 3300;
// Display All Users
app.get("/dashboard/users", (req,res) => {  
  res.send("Display All Users :- Gokul/bharathi/Bairava/Ravana");
});
// Display a Particular user
app.get("/dashboard/users/:id", (req,res) => {
  res.send("Display a Particular user :- Gokul");
});
// Create a User
app.post("/dashboard/user", (req,res) => {
  res.send("Create a User :- Gokulbharathi");
});
// Update a Particular user
app.patch("/dashboard/user/:id", (req,res) => {
  res.send("Update a Particular user :- Gokulbharathi/ Aspiring MERN Stack Developer/ From: namakkal");
});
// Delete a Particular User
app.delete("/dashboard/user/:id", (req,res) => {
  res.send("Delete a Particular User :- Delete/ Gokulbharathi");
});


app.listen(PORT,() => {
  console.log("hello world listening port" + PORT);
});