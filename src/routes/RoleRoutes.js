const router = require("express").Router()
const RoleController = require("../controllers/RoleController")
router.post("/role",RoleController.CreateRole);
router.get("/roles",RoleController.getAllRoles)
module.exports = router;