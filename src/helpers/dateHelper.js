class dateHelper {

    static dateToString(month, year) {
        var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        return months[month -1] + " " + year;
    }

    static setDateToStorage(startDay, startMonth, startYear, endDay, endMonth, endYear) {
        localStorage.setItem('startDay', startDay);
        localStorage.setItem('startMonth', startMonth);
        localStorage.setItem('startYear', startYear);
        localStorage.setItem('endDay', endDay);
        localStorage.setItem('endMonth', endMonth);
        localStorage.setItem('endYear', endYear);
    }

}

export default dateHelper;