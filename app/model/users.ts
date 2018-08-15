export default app => {
	const mongoose = app.mongoose
	const Schema = mongoose.Schema
	const option = {
		versionKey: false,
		timestamps: true
	}
	const schema = new Schema(
		{
			openid: String,
			phone: String,
			gender: Number,
			nickName: String,
			avatarUrl: String,
			city: String,
			province: String,
			country: String,
			language: String
		},
		option
	)

	return mongoose.model('Users', schema)
}
