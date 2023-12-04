import mongoose from "mongoose";

export async function setup() {
  try {
    await mongoose.connect(process.env.DATABASE_URI || "");
  } catch (error) {
    console.error("connection error:" + error);
  }
}

const mdb = mongoose.connection;
mdb.on("error", (error) => {
  console.log(error);
});
mdb.once("connected", () => {
  console.log(`🍃 MongoDB connected for ${process.env.DATABASE_URI}`);
});
