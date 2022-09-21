const moment = require('moment')

const ScheduledStart = (props) => {
    let {scheduledStartTime} = props
    let minutes = Math.abs(moment().diff(scheduledStartTime, 'minutes'));
        let time = moment(scheduledStartTime).format('h:mma')
        if (minutes < 60) { //if it's less than 60 then just display the time in minutes
            return (<div> Starts in {minutes} minutes ({time})</div>)  
        }
        else if(minutes < 24*60 ) {  //if it's less than 24 hours then display it in hours            
            let hours = Math.ceil(minutes/60)            
            return (<div> Starts in {hours} hours ({time})</div>)
        }
        else {
            let date = moment(scheduledStartTime).format('D/M/YYYY')
            return (<div> {date} ({time}) </div>)
        }
}

export default ScheduledStart