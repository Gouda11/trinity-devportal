// @ts-ignore
import Taluk from "../../../models/taluk";
// const createTaluk = async(req) => {
//     try {
//         const newTaluk = await Taluk.create(req.body);
//         return {
//             status_id: true,
//             status: 201,
//             data: {
//                 taluk: newTaluk,
//                 message: 'Taluk Created Successfully.'
//             }
//         };
//     } catch (error) {
//         return {
//             status: false,
//             message: error
//         }
//     }

// }
export const GET = async() => {
        try {
            const taluks = await Taluk.find();
            return new Response(JSON.stringify(taluks), { status: 200 });
        } catch (error) {
            return new Response(JSON.stringify({ message: "uta bro" }), { status: 400 });

        }

    }
    // const getTaluk = async(req, res) => {
    //     try {
    //         const taluks = await Taluk.findById(req.params.id);
    //         //Taluk.findOne({ id: req.params.id });
    //         res.status(200).json({
    //             status: true,
    //             results: taluks.length,
    //             data: {
    //                 taluks
    //             }
    //         });
    //     } catch (error) {
    //         res.status(404).json({
    //             status: false,
    //             message: error
    //         });
    //     }

// }

// const updateTaluk = async(req, res) => {
//     try {
//         const taluks = await Taluk.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true,
//             upsert: true
//         });
//         res.status(200).json({
//             status: true,
//             results: taluks.length,
//             data: {
//                 taluks
//             }
//         });
//     } catch (error) {
//         res.status(404).json({
//             status: false,
//             message: error
//         });
//     }
// }

// const deleteTaluk = async(req, res) => {
//     try {
//         const taluks = await Taluk.findByIdAndDelete(req.params.id);
//         res.status(204).json({
//             status: true,
//             message: "Taluk Deleted Successfully!"
//         });
//     } catch (error) {
//         res.status(404).json({
//             status: false,
//             message: error
//         });
//     }
// }

// export {
//     // createTaluk,
//     getAllTaluk
//     // getTaluk,
//     // updateTaluk,
//     // deleteTaluk,
//     // checkID,
//     // checkBody
// }