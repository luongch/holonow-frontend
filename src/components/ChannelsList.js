import Channel from "./Channel"

const ChannelsList = (props) => {
    let {channels, favorites} = props

    let channelItems = channels.map((channel)=>{
        let liked = favorites.includes(channel.id)
        return <Channel key={channel._id} channel={channel} liked={liked}></Channel>
    })

    return (channelItems)

}

export default ChannelsList