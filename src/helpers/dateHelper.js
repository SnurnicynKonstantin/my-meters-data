class dateHelper {

    static dateToString(month, year) {
        var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        return months[month -1] + " " + year;
    }

}

export default dateHelper;