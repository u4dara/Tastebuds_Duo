const Outlet = require("../models/outlet");

// @desc     Get Outlets
// @route    GET /api/outlets
const getOutlets = async (req, res) => {
    res.status(200).json({ message : 'Show all the outlets'})
}

// @desc     Get param Outlet
// @route    get /api/outlets/ : id
const getOutletsID = async(req,res) => {
    let requestedOutlet = req.params.id;
    let outlet = await Outlet.findById(requestedOutlet); 
    if(!outlet){
        return res
            .status(404)
            .send("Outlet you are looking for does not exist.")
    }
    return res
        .status(200)
        .send(outlet);
}


// @desc     Add Outlets
// @route    POST /api/outlets
const newOutlet = async(req,res) =>{
    if(!req.body.outletID || !req.body.name || !req.body.address || !req.body.picture ){
        return res 
        .status(400)
        .send("Please fill the required flieds")
    }else if (req.body.name.length <3 || req.body.address.length <5 ){
        return res
            .status(400)
            .send("Please Provide the Correct details.")
    }
    let newOutlets = new Outlet ({
        outletID : req.body.outletID,
        name : req.body.name,
        address : req.body.address,
        rating : req.body.rating,
        picture : req.body.picture,
    });
    try{
        newOutlets = await newOutlets.save();
        return res
            .status(200)
            .send(newOutlets);    
   } catch(ex){
    return res
        .status(500)
        .send("Error", ex.message);
   }
}

// @desc     Delete Outlet
// @route    Delete /api/outlets
const deletOutlet = async(req,res) => {
    let requestedOutlet = req.params.id;
    try{
        let outlet = await Outlet.findByIdAndDelete(requestedOutlet); 
        if(!outlet){
            return res
                .status(400)
                .send("Food you are looking for does not exist")
        }
        return res
            .status(200)
            .send(outlet);
    }catch(ex){
        return res
            .status(500)
            .send(ex.message);
    }
}



module.exports = {
    getOutlets,
    getOutletsID,
    newOutlet,
    deletOutlet
}