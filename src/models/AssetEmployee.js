const mongoose = require('mongoose');
Schema = mongoose.Schema;

const AssetEmployee = new Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    asset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asset'
    },
    status: {
        type: Array,
        enum : [
            "Applied",
            "Approved",
            "Declined",
            "Confirmed"
        ]
    }


});

module.exports = mongoose.model("AssetEmployee", AssetEmployee);