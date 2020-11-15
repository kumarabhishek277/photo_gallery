import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Unsplash} from './components/Unsplash';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled, { css } from 'styled-components';
import Masonry from 'react-masonry-css';
import './Abc.css';
function App(){
    const [images, setImages] = useState([]);

    useEffect(()=>{
            fetchImages();
            },[])

    const fetchImages = () =>{
        axios
            .get("https://api.unsplash.com/photos/random?client_id=0hP5dbeZy_7FI-PaaaipDMkuldQYDmzED1_ZMyZLCa4&count=40")
            .then(res => setImages([...images,...res.data]))
    }
    return(
        <React.Fragment>
            <Masonry breakpointCols={1} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                <InfiniteScroll dataLength={images.length}  next={fetchImages} hasMore={true} >
                    {images.map(image => (

                        <Unsplash url={image.urls.regular} key={image.id}/>
                    ))}
                </InfiniteScroll>
            </Masonry>
        </React.Fragment>
    );
}

export default App;
