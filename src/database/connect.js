const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@course-node.9hdowq8.mongodb.net/course-node?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o banco de dados:", error);
  }
};

module.exports = connectToDatabase;
