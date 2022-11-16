const express = require("express").Router;
const router = express();
const OrderAPIController = require("../../controllers/orderAPIController");

router.get("/", OrderAPIController.getOrders);
router.get("/:id", OrderAPIController.getOrderById);

router.patch("/:id", OrderAPIController.changeStatus);

router.delete("/:id", OrderAPIController.deleteOrder);

module.exports = router;
