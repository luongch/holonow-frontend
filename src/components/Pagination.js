import '../styles/pagination.css'

const Pagination = (props) => {
    let {videoCount, page, setPage} = props;
    let limit = 15;
    let totalPages = Math.ceil(videoCount/limit);
    let startingPage = page-4 > 0 ? page-4 : 0;
    let endingPage = page+5 < totalPages ? page+5 : totalPages;
    const handleOnClick = (page) => {
        setPage(page)
    }
    const pageLeft = () => {
        page > 0 ? setPage(page-1) : setPage(0);
    }
    const pageRight = () => {
        if(page < totalPages-1) {
            setPage(page+1)
        }
        else {
            setPage(totalPages-1);
        }
    }
    const goToFirst = () => {
        setPage(0)
    }
    const goToLast = () => {
        setPage(totalPages-1)
    }

    const PageBar = () => {
        let pageBar = [];
        
        pageBar.push(
            <div>
                <button  onClick={()=>{goToFirst()}}> &lt;&lt; </button>
            </div>
        )
        pageBar.push(
            <div>
                <button  onClick={()=>{pageLeft()}}> &lt; </button>
            </div>
        )
        for(let i=startingPage; i<endingPage; i++) {
            pageBar.push(<div>
            <button className={page === i ? 'active': ''} onClick={()=>{handleOnClick(i)}}>{i+1}</button>
            </div>)
        }
        pageBar.push(
            <div>
                <button  onClick={()=>{pageRight()}}> &gt; </button>
            </div>
        )
        pageBar.push(
            <div>
                <button  onClick={()=>{goToLast()}}> &gt;&gt; </button>
            </div>
        )
        return pageBar;
    }
    return(
        <div className="pagination">
            {totalPages > 0 ? <PageBar></PageBar> : null}
            
        </div>
    )
}

export default Pagination;
