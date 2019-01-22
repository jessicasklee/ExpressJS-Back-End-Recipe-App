// const User = require("../models/User");
// const { recipe } = require("../models/recipe");
// const bcrypt = require("bcrypt-nodejs");

// const createPassword = password =>
//   bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// User.find({}).remove(() => {
//   recipe.find({}).remove(() => {
//     let bugs = User.create({
//         email: "bugsbunny@gmail.com",
//         password: createPassword("bugsbunny")
//     }).then(user => {
//       Promise.all([
//         recipe.create({
//           content: "eh, what's up doc?",
//           author: user._id
//         }).then(rec => {
//           user.recipess.push(rec);
//         }),
//         recipe.create({
//           content: "That's all, folks!",
//           author: user._id
//         }).then(rec => {
//           user.recipess.push(rec);
//         })
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });

//     let daffy = User.create({
//         email: "daffyduck@gmail.com",
//         password: createPassword("daffyduck")
//     }).then(user => {
//       Promise.all([
//         recipe.create({
//           content: "Who's this Duck Dodgers any how?",
//           author: user._id
//         }).then(rec => {
//           user.recipess.push(rec);
//         }),
//         recipe.create({
//           content: "You're dethpicable.",
//           author: user._id
//         }).then(rec => {
//           user.recipess.push(rec);
//         })
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });

//     let elmer = User.create({
//         email: "elmerfudd@gmail.com",
//         password: createPassword("elmerfudd")
//     }).then(user => {
//       Promise.all([
//         recipe.create({
//           content:
//             "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
//           author: user._id
//         }).then(rec => {
//           user.recipess.push(rec);
//         }),

//         recipe.create({
//           content: "Kiww da wabbit!",
//           author: user._id
//         }).then(rec => {
//           user.recipess.push(rec);
//         })
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });
//   });
// });
