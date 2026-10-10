import { readFile } from 'node:fs/promises';
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  console.error('Set DATABASE_URL before running migrations.');
  process.exitCode = 1;
} else {
  const sql = neon(process.env.DATABASE_URL);
  const schema = await readFile(new URL('../db/schema.sql', import.meta.url), 'utf8');
  const statements = schema.split(';').map(statement => statement.trim()).filter(Boolean);
  await sql.transaction(statements.map(statement => sql.query(statement)));
  console.log('Database schema applied.');
}
