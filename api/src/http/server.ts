import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import ScalarApiReference from '@scalar/fastify-api-reference'
import fastify from 'fastify'
import {
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { httpRoutes } from './routes'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
	origin: true,
	methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
	credentials: true,
})

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: 'Triae API',
			description: 'API to Triae application',
			version: 'v1.0.0',
		},
	},
	transform: jsonSchemaTransform,
})

app.register(httpRoutes, { prefix: 'api' })

app.register(ScalarApiReference, {
	routePrefix: '/docs',
})

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
	console.log('API is running!')
})
