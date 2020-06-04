const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fallas = new Schema ({
        _id: { type: String, requried: true },
        tipo: { type: String, required: true },
        variable: { type: String, required: true},
        fecha_inicio: { type: Date, required: true },
	      fecha_fin: {type: Date, required: true},
	      valor: {type: Number, required: true}
});

module.exports = mongoose.model('fallasnuevas', Fallas)
