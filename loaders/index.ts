import { Express } from "express";
import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async ({ expressApp }: { expressApp: Express }) => {
  const mongoConnection = await mongooseLoader();
  console.log("MongoDB Intialized");
  await expressLoader({ app: expressApp });
  console.log("Express Intialized");
};
