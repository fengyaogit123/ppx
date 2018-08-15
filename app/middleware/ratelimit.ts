import * as ratelimit from 'koa-ratelimit'

export default (option, app) => {
	if (option.redis) {
		option.db = app.redis
	}
	return ratelimit(option)
}
