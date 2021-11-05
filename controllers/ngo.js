import NgoData from "../models/ngo.js";

export const getNgos = async (req, res) => {
    try {
        // const ngos = await NgoData.count();
        const ngos = await NgoData.find();
        console.log('Responseee', ngos);
        res.send({ngos: ngos})
    } catch (error) {
        console.log(error);
    }
}
