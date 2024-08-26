const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/brand4hub",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("\x1b[33m%s\x1b[0m", "CONNECTED TO MONGODB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
