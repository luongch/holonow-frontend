const moment = require('moment')

const LastAired = (props) => {
    let {actualStartTime} = props
    //when the stream already ended
    let minutes = Math.abs(moment().diff(actualStartTime, 'minutes'));
    if (minutes < 60) { //if it's less than 60 then just display the time in minutes
        return <div> {minutes} minutes ago</div>            
    }
    else if(minutes < 24*60 ) {  //if it's less than 24 hours then display it in hours            
        let hours = Math.ceil(minutes/60)            
        return <div> {hours} hours ago</div>
    }
    else {
        let date = moment(actualStartTime).format('D/M/YYYY')
        return <div> {date} </div>
    }
}

export default LastAired