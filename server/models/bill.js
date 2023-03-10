import mongoose from "mongoose";

const billSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ministry: {
        type: String,
        required: true,
    },
    process: {
        introducedBy: {
            house: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true,
            },
            details: {

            }
        },
        passedInRS: {
            status: Boolean,
            date: {
                type: String,
                required: true,
            },
            details: {

            }
        },
        passedInLS: {
            status: Boolean,
            date: {
                type: String,
                required: true,
            },
            details: {

            }
        },
    },
    details:{
       amendments:[],
       insertions:[],
       substitutions:[],
    },
    approvals:[],
    disapprovals:[],
    discussions:[],


});

const Bill=mongoose.model("Bill",billSchema);

export default Bill;