export default app => {
	const mongoose = app.mongoose
	const Schema = mongoose.Schema
	const option = {
		versionKey: false,
		timestamps: true
	}
	const schema = new Schema(
		{
			manId: { type: Schema.Types.objectId },
			girlId: { type: Schema.Types.objectId },
			startTime: Number,
			status: { type: Number, default: 0 },
			manStatus: { type: Number, default: 0 },
			girlStatus: { type: Number, default: 0 }
		},
		option
	)

	return mongoose.model('Relation', schema)
}
