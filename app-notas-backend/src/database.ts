import { connect } from "mongoose";

export const connectDatabase = async () => {
  try {
    const { DATABASE_URL } = process.env; // Leemos la variable de entorno
    await connect(DATABASE_URL as string);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
