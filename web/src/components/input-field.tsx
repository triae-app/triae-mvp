import type { HTMLInputTypeAttribute } from 'react'
import type { Control } from 'react-hook-form'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface InputFieldProps {
	name: string
	// biome-ignore lint/suspicious/noExplicitAny: This any as needed
	control: Control<any>
	label?: string
	placeholder?: string
	type: HTMLInputTypeAttribute
	className?: string
	disabled?: boolean
}

export function InputField({
	name,
	control,
	label,
	placeholder,
	type,
	className,
	disabled = false,
}: InputFieldProps) {
	return (
		<FormField
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem>
					{!!label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input
							type={type}
							placeholder={placeholder}
							className={className}
							disabled={disabled}
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
