// @desc     Get Outlets
// @route    GET /api/outlets
const getOutlets = async (req, res) => {
    res.status(200).json({ message : 'Show all the outlets'})
}

// @desc     Add Outlets
// @route    POST /api/outlets
const addOutlet = async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add outlet name')
    }

    res.status(200).json({ message : 'New outlet added'})
}

// @desc     Delete Outlet
// @route    Delete /api/outlets
const deleteOutlet = async (req, res) => {
    res.status(200).json({ message : `Deleted outlet ${req.params.id}`})
}


module.exports = {
    getOutlets,
    addOutlet,
    deleteOutlet
}