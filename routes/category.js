const express = require('express');
const mongoose = require('mongoose');
const Category = require('../Models/categoryModel');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());


router.get('/', (req, res) => {
    Category.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.post('/', async (req, res) => {
    let category = new Category({
        name: req.body.name,
        color: req.body.color,
        icon: req.body.icon,
        image: req.body.image

    });

    category = await category.save();
    if (!category) return res.status(500).send("The Users cannot be created.....!");
    res.send(category);

});


router.get("/:id",async (req,res)=>{
    const category = await Category.findById(req.params.id);

    if(!category){
        res
            .status(500)
            .json({ message : "The category with the given ID was not found."});
    }
    res.status(200).send(category);
});


router.put("/:id", async(req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id, {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        }, { new: true }
    );
    if (!category) return res.status(400).send(" the category cannot be created!");
    res.send(category);

});

router.delete("/:id", (req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then((category1) => {
            if (category1) {
                return res
                    .status(200)
                    .json({ success: true, massage: "the category id delete!" });
            } else {
                return res
                    .status(404)
                    .json({ success: false, massage: "category not found!" });
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err })
        });
});

module.exports = router;