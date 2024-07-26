import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    todo: text('todo').notNull(),
    checked: boolean('checked').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
})
