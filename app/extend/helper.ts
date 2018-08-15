import * as jwt from 'jsonwebtoken'
import * as util from 'util'
export default {
	sign(user: string, role: string) {
		const self: any = this
		const secret: string = self.config.JWT_SECRET
		const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 //60 * 60 * 24 * 30 //1月过期
		return jwt.sign({ user, role, exp }, secret)
	},
	verify(token: string) {
		const self: any = this
		const pverify = util.promisify(jwt.verify)
		const secret: string = self.config.JWT_SECRET
		return pverify(token, secret)
	},
	is() {
		let is = {
			types: [
				'Array',
				'Function',
				'Boolean',
				'Date',
				'Number',
				'Object',
				'RegExp',
				'String',
				'Window',
				'HTMLDocument'
			]
		}
		for (let i = 0, c; (c = is.types[i++]); ) {
			is[c] = (function(type) {
				return function(obj) {
					if (type === 'Number' && isNaN(obj)) {
						return false
					}
					return Object.prototype.toString.call(obj) == '[object ' + type + ']'
				}
			})(c)
		}
		return is
	},
	randomTo(min: number, max: number) {
		return Math.random() * (max - min) + min
	},
	rangeToInt(min: number, max: number) {
		const r = Math.random() * (max - min) + min
		return parseInt(r + '')
	}
}
