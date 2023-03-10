import mongoose from "mongoose";

const connection =async (Username,password) => {
  const URL = "mongodb+srv://user:codeforinterview@cluster0.7exyh2q.mongodb.net/CURD-APPLICATION?retryWrites=true&w=majority";
  try {
   await  mongoose.connect(URL, { useUniFiedTopology: true, useNewUrlParser: true });
   console.log('Database connected successfully');
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
export default connection;
