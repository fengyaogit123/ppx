import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
	redis: {
		enable: true,
		package: 'egg-redis'
	},
	routerPlus: {
		enable: true,
		package: 'egg-router-plus'
	},
	mongoose: {
		enable: true,
		package: 'egg-mongoose'
	},
	cors: {
		enable: true,
		package: 'egg-cors'
	},
	wxpay: {
		enable: true,
		package: 'egg-wxpay'
	},
	alinode: {
		enable: true,
		package: 'egg-alinode'
	}
}

export default plugin
