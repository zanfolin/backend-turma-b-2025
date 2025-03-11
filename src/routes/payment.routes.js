import express from 'express';
const router = express.Router();

import PaymentController from "../controllers/payment.controller.js";

/**
 * A rota é a URL que o cliente acessa para realizar
 * post = para cadastro
 * get = para leitura
 * patch = para atualização
 * delete = para exclusão
 */

router.post("/payment", PaymentController.createPayment);


export default router;

