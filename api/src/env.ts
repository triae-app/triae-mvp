import z from 'zod'

const envSchema = z.object({
	PORT: z.coerce.number().default(3333),
	HOST: z.string().default('0.0.0.0'),
	DATABASE_URL: z.string(),
	BETTER_AUTH_SECRET: z.string(),
	BETTER_AUTH_URL: z.string().default('http://localhost:3333/api'),
})

export const env = envSchema.parse(process.env)
