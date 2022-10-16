
import YoutubePlayer from '../components/YoutubePlayer';
const Favorites = (props) => {
    let {favorites} = props

    console.log("favorites from fav componet", favorites)
    let favoriteItems = favorites.map((favorite)=>{
        return <YoutubePlayer key={favorite._id} video={favorite}></YoutubePlayer>
    })

    console.log("return list of favs")
    return (
        favoriteItems
    )
}

export default Favorites