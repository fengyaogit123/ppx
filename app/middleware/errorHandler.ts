export default () => async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		if (ctx.app.config.env !== 'unittest') {
			const request = ctx.request
			const log = {
				trackId: ctx.trackId, // 全链路唯一标记
				originalUrl: request.originalUrl, // 请求地址
				req: {
					method: request.method,
					header: request.headers,
					query: request.query,
					body: request.body
				},
				err
			}
			ctx.logger.error(log)
		}
		// err 无法解析message 手动填入
		ctx.error(err.status || ctx.status, {
			message: err.message,
			...err
		})
	}
}
