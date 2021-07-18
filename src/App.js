import React, { Component } from 'react';
import './assets/css/App.css';
import loading from './assets/images/loading.gif';
import search from './assets/images/search_ideogram.svg';
import ScrollButton from './components/ScrollButton';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      isLoading: false,
      isError: false,
      albumId:'',
      errMsg:'Provide album Id'
    }
  }

 mySubmitHandler = async (e) => {
 	e.preventDefault();
    this.setState({ isLoading: true })
    if(this.state.albumId === '' || (!Number(this.state.albumId) && this.state.albumId !== 0)){
    	this.setState({ isLoading: false, isError: true, errMsg:'Album Id should be a number' })    	
    }else{
    	try{
    //const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${this.state.albumId}/photos`)
    const response = await fetch(`https://heroku-nelly-springboot.herokuapp.com/${this.state.albumId}`)
    if (response.ok) {
      const photos = await response.json()
      this.setState({ photos, isLoading: false, isError: false, errMsg:`No images found for Album Id: ${this.state.albumId}` })
    } else {
      this.setState({ isError: true, isLoading: false, errMsg:`No images found for Album Id: ${this.state.albumId}` })
    }
	}catch(e){
		this.setState({ isError: true, isLoading: false, errMsg:`${e}` })
	}
	}
  }

  renderImages = () => {
    return this.state.photos.map(photo => {
      return (
      	<article key={photo.title}>
  			<img src={photo.thumbnailUrl} alt="Avatar"/>
  			<p>{photo.title}</p>
  		</article>
      )
    })
  }

  myChangeHandler = (e) => {
    this.setState({albumId: e.target.value});
  }

  render() {
    const { photos, isLoading, isError, errMsg } = this.state
    let searchBar = <form onSubmit={this.mySubmitHandler}>
      	<div className="topnav">
  <div className="search-container">
      <input type="number" placeholder="enter album id number to fetch its images" name="search" 
      onChange={this.myChangeHandler} step="0.1"/>
      <button type="submit">Get Album Photos By Id</button>
  </div>
</div></form>;

    if (isLoading) {
      return (<div> {searchBar} <x-sectiondata><div className="divImg"><img src={loading} alt="Avatar"/></div><h1>Loading...</h1></x-sectiondata></div>)
    }

    if (isError) {
      return ( <div> {searchBar} <x-sectiondata><div className="divImg"><img src={search} alt="Avatar"/></div><h1>{errMsg}</h1></x-sectiondata></div>)
    }

    return photos.length > 0
      ? (
      	<div> {searchBar}
      	<x-sectiondata>
            {this.renderImages()}
         </x-sectiondata>
         <ScrollButton />
         </div>
      ) : (
      <div> {searchBar}
        <x-sectiondata>
          <div className="divImg"><img src={search} alt="Avatar"/></div>
          <h1>{errMsg}</h1>
      </x-sectiondata>
      </div>
      )

}
}
export default Search;