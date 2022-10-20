import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import { useSearchParams } from 'react-router-dom';
import Message from '../components/Message';
import axiosInstance from '../api/axiosConfig';

const Search = () => {
    const [results, setResults] = useState([]);
    const [searchParams] = useSearchParams();

    React.useEffect(()=>{
        const getSearch = async() => {
            let params =  { searchTerms: searchParams.get("searchTerms")};
            axiosInstance.get('api/v1/videos/search?', {params})
            .then((res)=> {
                if (res.data) {
                    setResults(res.data.data)
                }
            })
        }
        getSearch();
    },[searchParams])

    

    const SearchResults = (props) => {
        const results = props.results;
        console.log("resulots", results)
        
        if(results.length === 0) {            
            return <Message type={"noresults"}></Message>
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