import React,{useEffect,useState} from 'react'
import './RawPost.css'
import {imgUrl} from '../../Constants/Constants'
import axios from '../../axios'
function RawPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
            alert('Network Error')
        })
    }, [])
    return (
        <div className='raw'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                  <img className={props.isSmall ?'smallposter' : 'poster'} alt='poster' src={`${imgUrl+obj.backdrop_path}`} /> 
                )}
            </div>
        </div>
    )
}

export default RawPost
