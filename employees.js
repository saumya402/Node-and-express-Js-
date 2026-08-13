const setUser = (id , name) => {
    console.log("Set user name")
     console.log(`id  = ${id} name = ${name}`)

     return `hi ${name}`
}
module.exports = {
    setUser
}