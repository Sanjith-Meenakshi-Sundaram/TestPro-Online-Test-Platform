// const Test = require('../models/Test');

// exports.createTest = async (req, res) => {
//   const test = new Test(req.body);
//   try {
//     await test.save();
//     res.status(201).send(test);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// exports.getTests = async (req, res) => {
//   try {
//     const tests = await Test.find({});
//     console.log(tests);
//     res.json(cars);
//   } catch (error) {
//     res.status(500).send();
//   }
// };

// // exports.getOneCar = async (req, res) => {
// //   try {
// //     const id=req.params.id;
// //     const car = await Car.findById(id);
// //     res.json(car);
// //   } catch (error) {
// //     res.status(500).send();
// //   }
// // };

// exports.updateTest = async (req, res) => {
//   try {
//     const test = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!test) {
//       return res.status(404).send();
//     }
//     res.send(test);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// exports.deleteTest = async (req, res) => {
//   try {
//     const test = await Test.findByIdAndDelete(req.params.id);
//     if (!test) {
//       return res.status(404).send();
//     }
//     res.send(test);
//   } catch (error) {
//     res.status(500).send();
//   }
// };
