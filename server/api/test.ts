import { createPool, sql } from '@vercel/postgres';

async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS methods (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) UNIQUE NOT NULL,
      tags VARCHAR(255),
      return VARCHAR(255),
      method VARCHAR(255),
      service VARCHAR(255),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;

  const methods = await Promise.all([
    sql`
      INSERT INTO methods (service, title, method, description, tags, return)
      VALUES ('Twitch', 'Subscriber only', 'TwitchSubscriberOnly', 'Change your Twitch chat to subscriber only.', '[\`General\`]', 'void')
    `,
    sql`
      INSERT INTO methods (service, title, method, description, tags, return)
      VALUES ('General', 'Wait', 'Wait', 'Wait for a specified amount of time.', '[\`General\`]', 'void')
    `,
    sql`
      INSERT INTO methods (service, title, method, description, tags, return)
      VALUES ('General', 'EscapeString', 'Escape a string.', '[\`General\`]', 'string')
    `,
  ]);

  return {
    createTable,
    methods,
  };
}

export default defineEventHandler(async () => {
	const startTime = Date.now();
	const db = createPool();
  
  try {
		const { rows: methods } = await db.query('SELECT * FROM methods');
		const duration = Date.now() - startTime;
    return {
      methods: methods,
      duration: duration
    };
	} catch (error) {
		// @ts-ignore
		if (error?.message === `relation "methods" does not exist`) {
      await seed();
      const { rows: methods } = await db.query('SELECT * FROM methods');
      const duration = Date.now() - startTime;
      return {
        methods: methods,
        duration: duration
      };
    } else {
      throw error;
    }
	}
});
