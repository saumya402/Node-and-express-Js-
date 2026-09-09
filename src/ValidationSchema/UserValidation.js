const zod = require("zod");
const numberregx = /^[6-9][0-9]{9}$/
const nameregx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
const uservalidate = zod.object({
    name : zod.string().regex(nameregx),
    age : zod.number().min(18).max(60),
    // skills : zod.array(zod.string()),
    address : zod.object({
        state : zod.string(),
        city : zod.string(),
    }),
    email : zod.string().email(),
    password : zod.string(),
    phone : zod.string().regex( numberregx)

})

module.exports = uservalidate