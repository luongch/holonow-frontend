import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import { useSearchParams } from 'react-router-dom';
import Message from '../components/Message';
import axiosInstance from '../api/axiosConfig';
import Pagination from '../components/Pagination';

const Search = () => {
    const [results, setResults] = useState([]);
    const [searchParams] = useSearchParams();
    const [videoCount, setVideoCount] = useState();
    const [page, setPage] = useState(0);

    //Set the page back to 0 when a new search term is used
    React.useEffect(()=>{
        setPage(0);
    }, [searchParams])

    //get search when a search param is used or page button is clicked
    React.useEffect(()=>{
        const getSearch = async(page) => {
            let params =  { 
                searchTerms: searchParams.get("searchTerms"),
                page
            };
            axiosInstance.get('api/v1/videos/search?', {params})
            .then((res)=> {
                if (res.data) {
                    setResults(res.data.data);
                    setVideoCount(res.data.count);
                }
            })
        }
        getSearch(page)
    },[searchParams,page])

    const SearchResults = (props) => {
        const results = props.results;
        
        if(results.length === 0) {            
            return <Message type={"noresults"}></Message>
        }
        const resultItems = results.map((resultItem)=>{
            return <YoutubePlayer key={resultItem._id} video={resultItem}></YoutubePlayer>
        })
        return resultItems
    }

    return (
        <div className="main">
            <div className='videoContainer'>
                <SearchResults results={results}></SearchResults>
            </div>
            <Pagination videoCount={videoCount} setPage={setPage} ></Pagination>
        </div>
    )
}

export default Search;