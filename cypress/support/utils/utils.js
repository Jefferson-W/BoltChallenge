
import moment from 'moment';

let CriarData = async (subtractDays) => {

    let newDate = moment()

    if (subtractDays != '') {

        let dias = parseInt(subtractDays)
        newDate.subtract(dias, 'days').calendar()
        let dataFormatada = newDate.format('DD/MM/YYYY')
        return dataFormatada

    } else {

        let dataFormatada = newDate.format('DD/MM/YYYY')
        return dataFormatada
    }
}

module.exports = {
    CriarData
}