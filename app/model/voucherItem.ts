export default app => {
	const mongoose = app.mongoose
	const Schema = mongoose.Schema
	const option = {
		versionKey: false,
		timestamps: true
	}
	const schema = new Schema(
		{
			userId: { type: Schema.Types.objectId },
			num: Number,
			voucher: { type: Schema.Types.objectId, ref: 'Voucher' }
		},
		option
	)

	return mongoose.model('VoucherItem', schema)
}
