import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log(`Mongoose connected to ${process.env.MONGO_URI}`);
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure its running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Error");
    console.log(error);
  }
}
