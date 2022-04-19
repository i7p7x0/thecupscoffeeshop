// require("dotenv").config();
// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.postAdminCredentials = async (req, res, next) => {
//   let isPasswordValid = false;

//   const { username, password } = req.body;
//   const admin = await Admin.findOne({ username: username });

//   if (admin !== null) {
//     isPasswordValid = await bcrypt.compare(password, admin.password);
//     if (isPasswordValid) {
//       const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);

//       return res.json({ accessToken: accessToken });
//     }
//     return res.json({ accessToken: "invalid" });
//   }
//   return res.json({ accessToken: "invalid" });
// };

//  exports.createAdmin = async (req, res, next) => {
//    let hashedPassword
//    try {
//      hashedPassword = await bcrypt.hash(req.body.password, 12);
//    } catch {
//      console.log("An error occured");
   
//    const admin = new Admin({
//      username: req.body.username,
//      password: hashedPassword,
//    })
//    console.log(admin);
//    };