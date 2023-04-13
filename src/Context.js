import React, { useEffect, useState, createContext } from "react";
const ImagesContext = createContext()
const Context = (props) => {
    const [images, setImages] = useState([]);
    
    const fetchImageData = (userInput) => {
      fetch(
       `https://api.flickr.com/services/rest/?format=json&sort=random&method=flickr.photos.search&tags=${userInput}&tag_mode=all&api_key=0e2b6aaf8a6901c264acb91f151a3350&nojsoncallback=1`
        
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImages(data.photos.photo);
       
        });
    };
    useEffect(() => {
      fetchImageData();
      return () => {};
    }, []);


    return (
        <ImagesContext.Provider value={{images,fetchImageData}}>
          {props.children}
        </ImagesContext.Provider>
      );
    };


export default Context;
export {ImagesContext}