import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import db from ".";

export const userTable = pgTable("user", {
	id: text("id").primaryKey(),
	hashPassword: text("hash_password").notNull(),
	email: text("email").notNull(),
	isEmailVerified: text("is_email_verified").notNull().default("false"),
});



 export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

