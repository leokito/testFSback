import { boletoRoute } from "./boleto.routes";
import express from "express";

export const routes = (app) => {
    app.use(express.json());
    boletoRoute(app)
}