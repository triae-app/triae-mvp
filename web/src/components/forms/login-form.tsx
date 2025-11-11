'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { signIn } from '@/lib/auth-client'
import { loginSchema } from '@/types/schemas/auth-schemas'
import { InputField } from '../input-field'
import { Button } from '../ui/button'
import { Form } from '../ui/form'

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = form.handleSubmit(async (values: LoginFormData) => {
		signIn.email(values)
	})

	return (
		<Form {...form}>
			<form className="w-full space-y-6" onSubmit={onSubmit}>
				<InputField
					control={form.control}
					type="email"
					name="email"
					label="Email"
					placeholder="example@email.com"
				/>
				<InputField
					control={form.control}
					type="password"
					name="password"
					label="Password"
				/>
				<Button type="submit" className="w-full">
					Login
				</Button>
			</form>
		</Form>
	)
}
