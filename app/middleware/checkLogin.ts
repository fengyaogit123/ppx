//验证是否登录  需要checkToken配合使用
export default () => async (ctx, next) => {
	if (ctx.jwterror) ctx.throw(ctx.HttpStatus.OK, ctx.jwterror)
	if (!ctx.userId) ctx.throw(ctx.HttpStatus.OK, { code: -401, message: '用户未登录' })
	await next()
}
