
import YoutubePlayer from '../components/YoutubePlayer';
const Favorites = (props) => {
    let {favorites} = props

    let favoriteItems = favorites.map((favorite)=>{
        return <YoutubePlayer key={favorite._id} video={favorite}></YoutubePlayer>
    })

    return (
        favoriteItems
    )
}

export default Favorites