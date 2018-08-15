import { Context } from 'egg'
import * as validators from 'async-validator'
import * as HttpStatus from 'http-status-codes'
import * as Rules from '../validate/index'
interface HttpResult {
	code?: number
	message?: string
	data?: object
	desc?: string
	status?: number
}
export default {
	get Rules() {
		return Rules
	},
	error(this: Context, status: number | object, option: HttpResult = {}) {
		const defaultOption: HttpResult = {
			status: HttpStatus.INTERNAL_SERVER_ERROR,
			code: -1,
			message: 'error',
			data: {},
			desc: undefined
		}
		// 第一个参数是配置对象
		if (status instanceof Object) {
			option = status as object
			status = option.status || HttpStatus.INTERNAL_SERVER_ERROR
		}
		option = { ...defaultOption, ...option }
		this.status = (status as number) || 500
		this.body = {
			code: option.code,
			message: option.message,
			data: option.data,
			desc: option.desc
		}
	},
	success(this: Context, status: number | Object, option: HttpResult = {}) {
		const defaultOption: HttpResult = {
			status: HttpStatus.OK,
			code: 0,
			message: 'ok',
			data: {},
			desc: undefined
		}
		// 第一个参数是配置对象 默认status为200
		if (status instanceof Object) {
			option = status as object
			status = option.status || HttpStatus.OK
		}
		option = { ...defaultOption, ...option }

		this.status = (status as number) || 200
		this.body = {
			code: option.code,
			message: option.message,
			data: option.data,
			desc: option.desc
		}
	},
	validate(this: Context, rules, data?: any) {
		if (!data) {
			data = this.method === 'GET' ? this.query : this.request.body
		}
		return new Promise(resolve => {
			new validators(rules).validate(data, errors => {
				if (errors) {
					let { message } = errors[0]
					return this.throw(this.HttpStatus.OK, message)
				}
				resolve()
			})
		})
	},
	get HttpStatus() {
		return HttpStatus
	},
	async QueryPage(this: Context, { pageNum = 1, pageSize = 20 }, callback) {
		const { is }: any = this.helper
		pageNum = +pageNum
		pageSize = +pageSize
		if (!is().Number(pageNum)) pageNum = 1
		if (!is().Number(pageSize)) pageSize = 20
		if (pageNum < 1) pageNum = 1
		if (pageSize <= 0) pageSize = 20
		if (pageSize > 1000) pageSize = 1000
		let presult = await Promise.all([
			callback().count(),
			callback()
				.skip((pageNum - 1) * pageSize)
				.limit(pageSize)
		])
		const total = presult[0]
		const list = presult[1]
		return {
			pageSize,
			pageNum,
			total,
			list
		}
	}
}
