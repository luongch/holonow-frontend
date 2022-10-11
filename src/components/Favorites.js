
const Favorites = (props) => {
    let {sessionUser} = props
    return (
        <div className="videoContainer">
            {sessionUser ? <>your favorites</> : <>make an account or login to add favorites</>}
        </div>
    )
}

export default Favorites