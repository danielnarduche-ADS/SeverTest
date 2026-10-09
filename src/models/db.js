import Database from "better-sqlite3";
import path from "node:path"

export const db = new Database(path.join(import.meta.dirname, '..', '..', 'app.db'))
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL COLLATE NOCASE CHECK (email LIKE '%@%'),
    name TEXT NOT NULL,
    userName TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    coin INTEGER NOT NULL DEFAULT 0
    )`
);
