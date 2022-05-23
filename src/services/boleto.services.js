import { add, format } from "date-fns";

export const getExpirationDate = (dateFactor) => {
    const diffFactor = parseInt(dateFactor) - process.env.BASE_FACTOR;
    const baseDate = process.env.BASE_DATE;
    const diffDate = add(new Date(baseDate),{days:diffFactor});
    const expDate = add(diffDate, {days:1});
    return format(expDate, 'yyyy-MM-dd');
};

export const noExpDate = () => {
    const today = new Date();
    const result = add(today, {days: 15})

    return format(result, 'yyyy-MM-dd')
}

export const generateBarCode = (code) => {
    const bank = code.slice(0,3)
    const currency = code.slice(3,4)
    const field01 = code.slice(32, 47)
    const field02 = code.slice(4,9)
    const field03 = code.slice(10, 16)
    const field04 = code.slice(16,20)
    const field05 = code.slice(21, 31)

    const barCode = bank + currency + field01 + field02 + field03 + field04 + field05

    return barCode
};

export const convertDate = (dateString) => {
    const year = +dateString.substring(0, 4);
    const month = +dateString.substring(4, 6);
    const day = +dateString.substring(6, 8);

    const date = new Date(year, month - 1, day);

    const newDateString = date.toISOString()
    const formatted = newDateString.split("T")[0]

    return formatted
};