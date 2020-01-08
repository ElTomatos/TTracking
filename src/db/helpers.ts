/**
 * Config
 */
const DB_VERSION: number = 1;
const DB_NAME: string = "ttrackging";
let DB: IDBPDatabase<IDatabase> | null = null;

/**
 * Typings
 */
interface IDatabase extends DBSchema {
  categories: {
    key: string;
    value: object[];
  };
}

/**
 * Vendors
 */
import { openDB, DBSchema, IDBPDatabase } from "idb";

/**
 * Expo
 */
export default {
  async getDb(): Promise<IDBPDatabase<IDatabase>> {
    DB = await openDB<IDatabase>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        db.createObjectStore("categories", {
          keyPath: "title"
        });
      }
    });

    return DB;
  }
};
