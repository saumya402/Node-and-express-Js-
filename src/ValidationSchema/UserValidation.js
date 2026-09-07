const zod = require("zod");
const uservalidate = zod.object({
    name : zod.string().min(3),
    age : zod.number().min(18).max(60),
    // skills : zod.array(zod.string()),
    address : zod.object({
        state : zod.string(),
        city : zod.string(),
    }),
    email : zod.string().email(),
    password : zod.string()

})

module.exports = uservalidate