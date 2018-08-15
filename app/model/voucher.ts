export default app => {
	const mongoose = app.mongoose
	const Schema = mongoose.Schema
	const option = {
		versionKey: false,
		timestamps: true
	}
	const schema = new Schema(
		{
			name: String,
			desc: String,
			termTime: Number,
			isLongTerm: Boolean,
			status: { type: Number, default: 0 },
			type: Number
		},
		option
	)

	return mongoose.model('Voucher', schema)
}
