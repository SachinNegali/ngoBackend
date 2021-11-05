import mongoose from 'mongoose'
const NgoSchema = new mongoose.Schema({
    ngoName: {
        type: String
    },
    regNoCityAndState: {
        type: String
    },
    ngoUrl: {
        type: String
    },
    address: {
        type: String
    },
    sectorsWorkinIn: {
        type: String
    },
    title: {
        type: String
    },
    registerdWith: {
        type: String
    },
    uniqueId: {
        type: String
    },
    typeofNgo :{
        type: String
    },
    regNo :{
        type: String
    },
    copyOfRegCertificate :{
        type: String
    },
    copyOfPan :{
        type: String
    },
    actName :{
        type: String
    },
    cityOfReg :{
        type: String
    },
    stateOfReg :{
        type: String
    },
    dateOfReg :{
        type: String
    },
    members: [{
     name: {
         type: String
        },
     designation: {
         type: String
        },
     pan: {
         type: String
        },
     aadhaar: {
         type: String
        },
    }],

    isuues: [{
     name: {
         type: String
        },
     value: {
         type: String
        }
    }],
    fcraRegNo :{
        type: String
    },
    detailsOfAchievement :{
        type: String
    },
    sourceOfFunds: [{
     departmentName: {
         type: String
        },
     source: {
         type: String
        },
     financialYear: {
         type: String
        },
     amountSanctioned: {
         type: String
        },
     purpose: {
         type: String
        }
    }],

    postalAddress :{
        type: String
    },
    city :{
        type: String
    },
    state :{
        type: String
    },
    telephone :{
        type: String
    },
    mobile :{
        type: String
    },
    websiteUrl :{
        type: String
    },
    email :{
        type: String
    }
})

const NgoData = {
  schema: NgoSchema,
  collectionName: "NgoData",
};
export default NgoData;


// var NgoData = mongoose.model('ngo', NgoSchema);
// module.exports= NgoData;
// module.exports = mongoose.model("NgoData", NgoSchema);
