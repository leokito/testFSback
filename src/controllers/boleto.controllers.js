import { generateBarCode, getExpirationDate, noExpDate, convertDate } from "../services/boleto.services";


export const welcomeFn = (req, res) => {
    res.status(200).json({"message":"welcome, stranger"})
};

export const boletoParam = (req, res) => {
    const {boleto} = req.params

    if (boleto.length === 44) {

    const amountdigit = parseInt(boleto.slice(5,15), 10).toString()
    const amount = amountdigit.substring(0,amountdigit.length-2)+"."+amountdigit.substring(amountdigit.length-2)
    const date = boleto.slice(19,27)

    return res.status(200).json({
            barCode: boleto,
            amount: amount,
            expDate: convertDate(date),
        })
    };
    if (boleto.length === 47) {
    const amountdigit = parseInt(boleto.slice(-10), 10).toString()
    const amount = amountdigit.substring(0,amountdigit.length-2)+"."+amountdigit.substring(amountdigit.length-2)

    const dateField = parseInt(boleto.slice(-14, -10))

    let expDate=""
    
    if (dateField < 1) {
       expDate = noExpDate()
    } else{
        expDate = getExpirationDate(dateField)
    }
    const barCode = generateBarCode(boleto)
  
    return res.status(200).json(
        {
        "barCode": barCode, 
        "amount": amount, 
        "expDate": expDate
        })
    }

    return res.status(400).json({"erro":"O código digitado está errado, verifique os numeros e tente novamente"})
};