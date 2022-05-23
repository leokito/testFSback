import { Router } from 'express'
import { boletoParam, welcomeFn } from '../controllers/boleto.controllers';

const route = Router();

export const boletoRoute = (app) => {
    route.get("", welcomeFn)
    route.get("/:boleto", boletoParam)
    app.use("/boleto", route)
}
