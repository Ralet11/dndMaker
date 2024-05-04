import Item from "../models/items.model.js"

export const getAll = async (req, res) => {
    try {
        const response = await Item.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}