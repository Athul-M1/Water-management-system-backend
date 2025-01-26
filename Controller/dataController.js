const dataModel = require("../Models/dataModel")

exports.getdata = async (req, res) => {
    const { pH, turbidity, temperature } = req.body

    try {
        const waterData = new dataModel({
            pH, turbidity, temperature
        })
        await waterData.save()
        res.status(200).send({Message:"Data added sucessfully",waterData})
    } catch (error) {
        res.status(500).send("Internal Server Error")
        console.log(Error)
    }
}