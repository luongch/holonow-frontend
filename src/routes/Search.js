import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import { useSearchParams } from 'react-router-dom';
import NoResults from '../components/NoResults';

const Search = () => {
    const [results, setResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();    
    React.useEffect(()=>{
        getSearch();
    },[searchParams])

    const getSearch = async() => {
        let response = await fetch("api/v1/videos/search?"+ new URLSearchParams({
            searchTerms: searchParams.get("searchTerms")
        }))
        let responseData = await response.json();
        setResults(responseData.data)
    }

    const SearchResults = (props) => {
        const results = props.results;
        
        if(results.length === 0) {
            
            return <NoResults></NoResults>
        }
        const resultItems = results.map((resultItem)=>{
            return <YoutubePlayer key={resultItem._id} video={resultItem}></YoutubePlayer>
        })
        return resultItems
    }

    return (
        <div className="videoContainer">
            <SearchResults results={results}></SearchResults>
        </div>
    )
}

export default Search;