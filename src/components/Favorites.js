
const Favorites = (props) => {
    let {sessionUser} = props
    console.log("from favs", sessionUser.id)
    console.log("from favs", sessionUser.id !== "")
    return (
        <div className="videoContainer">
            {sessionUser.id !== "" ? <>your favorites</> : <>make an account or login to add favorites</>}
        </div>
    )
}

export default Favorites