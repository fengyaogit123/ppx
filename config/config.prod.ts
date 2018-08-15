import { DefaultConfig } from './config.default'

export default () => {
	const config: DefaultConfig = {}

	config.redis = {
		client: {
			port: 6379, // Redis port
			host: '', // Redis host
			password: '',
			db: 1
		}
	}
	config.mongoose = {
		client: {
			url: '',
			// 'mongodb://root:4hrtHqUxrjbC63XE@dds-bp18d08b0247bee433290.mongodb.rds.aliyuncs.com:3717/yryc?authSource=admin',
			options: {
				useNewUrlParser: true
			}
		}
	}
	config.httpclient = {
		// 默认开启 http KeepAlive 功能
		keepAlive: true,
		// 空闲的 KeepAlive socket 最长可以存活 4 秒
		freeSocketKeepAliveTimeout: 4000,
		// 当 socket 超过 30 秒都没有任何活动，就会被当作超时处理掉
		timeout: 30000,
		// 允许创建的最大 socket 数
		maxSockets: Number.MAX_SAFE_INTEGER,
		// 最大空闲 socket 数
		maxFreeSockets: 256
	}
	return config
}
