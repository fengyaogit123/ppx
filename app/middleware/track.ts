import * as uuid from 'uuid/v4'

export default () => async (ctx, next) => {
	const trackId = ctx.get('x-request-id') || uuid()
	ctx.trackId = trackId
	await next()
}
