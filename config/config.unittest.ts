import { DefaultConfig } from './config.default'
//测试执行的配置
export default () => {
	const config: DefaultConfig = {}
	config.redis = {
		client: {
			port: 6379, // Redis port
			host: '127.0.0.1', // Redis host
			password: '123456',
			db: 0
		}
	}

	return config
}
