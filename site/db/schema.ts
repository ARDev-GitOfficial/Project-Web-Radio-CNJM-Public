import { boolean, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const publicAds = pgTable("public_ads", {
  id: text("id").primaryKey(),
  title: text("title").notNull().default(""),
  description: text("description").notNull().default(""),
  imageUrl: text("image_url").notNull().default(""),
  linkUrl: text("link_url").notNull().default(""),
  placement: text("placement").notNull().default("home"),
  active: boolean("active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow()
});

export const publicSchedule = pgTable("public_schedule", {
  id: text("id").primaryKey(),
  dayId: text("day_id").notNull(),
  startTime: text("start_time").notNull(),
  endTime: text("end_time").notNull(),
  program: text("program").notNull().default(""),
  host: text("host").notNull().default("Web Radio Conexao Jamaica"),
  active: boolean("active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow()
});
