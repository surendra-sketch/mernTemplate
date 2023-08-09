import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/mernauth";

export const Dbconnection = async () => {
  await mongoose
    .connect(uri)
    .then(() => console.log("database connected....."))
    .catch((err) => console.log(err));
};
