export default () => async (ctx, next) => {
	ctx.logger.info('request data:', ctx.request.body, {
		Authorization: ctx.get('Authorization'),
		'content-type': ctx.get('content-type'),
		'content-length': ctx.get('content-length'),
		'x-request-id': ctx.trackId
	})
	await next()
}
