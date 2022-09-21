const LiveStats = (props) => {
    let {concurrentViewers} = props
    return (
        <div>
            <span className="liveText">
                Live Now •&nbsp;
            </span>
            <span>
             {concurrentViewers} watching
            </span>             
        </div>
    );
}

export default LiveStats