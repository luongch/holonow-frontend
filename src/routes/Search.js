import React, { useState } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import { useSearchParams } from 'react-router-dom';
import NoResults from '../components/NoResults';
import axiosInstance from '../api/axiosConfig';

const Search = () => {
    const [results, setResults] = useState([]);
    const [searchParams] = useSearchParams();

    React.useEffect(()=>{
        const getSearch = async() => {
            let params =  { searchTerms: searchParams.get("searchTerms")};
            axiosInstance.get('api/v1/videos/search?', {params})
            .then((res)=> {
                console.log(res)
                if (res.data) {
                    setResults(res.data.data)
                }
            })
            // let response = await fetch(`/api/v1/videos/search?`+ new URLSearchParams({
            //     searchTerms: searchParams.get("searchTerms")
            // }))
            // let responseData = await response.json();
            // setResults(responseData.data)
        }
        getSearch();
    },[searchParams])

    

    const SearchResults = (props) => {
        const results = props.results;
        console.log("resulots", results)
        
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