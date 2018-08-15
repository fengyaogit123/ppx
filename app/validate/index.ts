export const phone = [
	{ type: 'string', required: true, message: '手机号不能为空' },
	{ type: 'string', pattern: /^1[0-9]{10}$/, message: '手机号格式不正确' }
]

export const smsCode = [
	{ type: 'string', required: true, message: '验证码不能为空' },
	{ type: 'string', pattern: /^[0-9]{4}$/, message: '验证码格式不正确' }
]
export const bankCard = [
	{ type: 'string', required: true, message: '银行卡号不能为空' },
	{ type: 'string', pattern: /^([1-9]{1})(\d{14}|\d{18})$/, message: '银行卡格式化错误' }
]

export const required = (option?: any) => {
	return Object.assign(
		{
			type: 'string',
			required: true,
			transform(value) {
				if (value === undefined) return ''
				return value + ''
			}
		},
		option
	)
}

export const boolean = (option?: any) => {
	return Object.assign(
		{
			type: 'boolean',
			required: true
		},
		option
	)
}

export const array = (option?: any) => {
	return Object.assign(
		{
			type: 'array',
			required: true
		},
		option
	)
}

export const number = (option?: any) => {
	return Object.assign(
		{
			type: 'number',
			required: true,
			transform(value: number) {
				if (typeof value === 'string' && value == +value) {
					return +value
				}
				return value
			}
		},
		option
	)
}
