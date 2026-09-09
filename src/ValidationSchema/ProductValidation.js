const zod = require("zod");
const productvalidation = zod.object({
        name : zod.string().min(3),
        price : zod.number(),
       stock : zod.number(),
       sku : zod.string(),
       categoryId : zod.string(),
       
})

module.exports = productvalidation;