class dateHelper {

    static dateToString(date) {
        var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        var splittedDate = date.split("-");
        return months[parseInt(splittedDate[0]) -1] + " " + splittedDate[1];
    }

}

export default dateHelper;