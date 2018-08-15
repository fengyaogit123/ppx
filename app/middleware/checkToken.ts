export default () => async (ctx, next) => {
	ctx.userId = ''
	ctx.role = ''
	ctx.jwterror = ''
	const token = ctx.get('Authorization')

	// 直接传yc-user-id 是为了测试环境方便测试  应该改为token解析出user-id
	if (ctx.app.config.env !== 'prod' && !token) {
		ctx.userId = ctx.get('yc-user-id') || ctx.get('x-user-id')
		ctx.merchantId = ctx.get('yc-merchant-id')
	}

	if (token) {
		try {
			const { user, role, merchantId } = await ctx.helper.verify(token)
			// 多点登录测试方便
			// const redisToken = await ctx.app.redis.get(user)
			// if (redisToken === token) {
			ctx.userId = user
			ctx.role = role
			ctx.merchantId = merchantId
			// }
		} catch (e) {
			ctx.throw(200, { code: -402, message: 'token失效' })
		}
	}
	await next()
}
