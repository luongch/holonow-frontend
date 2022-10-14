import Channel from "./Channel"

const ChannelsList = (props) => {
    let {channels, favorites, getFavorites} = props

    let channelItems = channels.map((channel)=>{
        let liked = favorites.includes(channel.id)
        return <Channel key={channel._id} channel={channel} liked={liked} getFavorites={getFavorites}></Channel>
    })

    return (channelItems)

}

export default ChannelsList