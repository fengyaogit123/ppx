import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>

// app special config scheme
export interface BizConfig {
	sourceUrl: string
	JWT_SECRET: string
	bodyParserConfig: any
}

export default (appInfo: EggAppInfo) => {
	const config = {} as PowerPartial<EggAppConfig> & BizConfig
	// app special config
	config.sourceUrl = ``
	config.middleware = ['errorHandler', 'track', 'logger']
	// override config from framework / plugin
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1528361732857_8250'

	// add your config here
	config.redis = {
		client: {
			port: 27017, // Redis port
			host: '127.0.0.1', // Redis host
			password: '',
			db: 1
		}
	}
	config.mongoose = {
		client: {
			url: 'mongodb://127.0.0.1:27017/yryc',
			options: { useNewUrlParser: true }
		}
	}

	config.JWT_SECRET = 'CxJ+XBuSP9d3yRZPNNmhTvF87jD8X6jDoMfrPXUTm9klh/mfuoG5RpBiHl7ylc6/'
	config.keys = 'B9WAH2Q0+3rfFlmdnHP5Xj2aZpLwD837Rg8QaOUborqhdJAolP4qA70sIPEp8xiH'
	return config
}
