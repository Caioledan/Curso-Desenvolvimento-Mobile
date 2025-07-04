import { disconnectDatabase } from "./utils/database.js";
import * as database from "./utils/database.js"
import { databaseType } from "./utils/database.js";

database.connectToDatabase("myDataBase");
disconnectDatabase();

