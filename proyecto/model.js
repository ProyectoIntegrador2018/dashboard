const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shark = new Schema ({
        tipo: { type: String, required: true },
        hora_inicio: { type: Date, required: true },
	hora_fin: {type: Date, required: true},
	valor: {type: Double, required: true}
});

module.exports = mongoose.model('Fallas', Falla)
