import moment from 'moment';

class Utility {
    
    static getTimeDifference = (startTime) => {        
        now = moment();
        start = moment(startTime);  
        days = now.diff(start, 'days');      
        hours = now.subtract(days, 'days').diff(start, 'hours');
        if (hours >= 1) {
            hrsString = hours>1? "hrs": "hr"
            return hours + " " + hrsString + " ago"
        } else {
            minutes = now.subtract(hours, 'hours').diff(start, 'minutes');
            minutesString = minutes > 1 ? "mins": "min"
            return minutes + " " + minutesString + " ago"
        }
    }
    
}
export default Utility;