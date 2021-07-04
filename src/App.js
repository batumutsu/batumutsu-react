import React, { Component } from 'react';
import './assets/css/App.css';
import loading from './assets/images/loading.gif';
import search from './assets/images/search_ideogram.svg';

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

 mySubmitHandler = async (event) => {
 	event.preventDefault();
    this.setState({ isLoading: true })
    if(this.state.albumId === '' || (!Number(this.state.albumId) && this.state.albumId !== 0)){
    	this.setState({ isLoading: false, isError: true, errMsg:'Album Id should be a number' })    	
    }else{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${this.state.albumId}/photos`)
    if (response.ok) {
      const photos = await response.json()
      this.setState({ photos, isLoading: false, isError: false, errMsg:`No images found for Album Id: ${this.state.albumId}` })
    } else {
      this.setState({ isError: true, isLoading: false, errMsg:`No images found for Album Id: ${this.state.albumId}` })
    }}
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

  myChangeHandler = (event) => {
    this.setState({albumId: event.target.value});
  }

  render() {
    const { photos, isLoading, isError, errMsg } = this.state
    let searchBar = <form onSubmit={this.mySubmitHandler} method="#">
      	<div className="topnav">
  <div className="search-container">
      <input type="text" placeholder="enter album id number to fetch its images" name="search" 
      onChange={this.myChangeHandler} />
      <button type="submit">Get Album Photos By Id</button>
  </div>
</div></form>;

    if (isLoading) {
      return (<div><div>{searchBar}</div> <div className="sectionData"><div className="divImg"><img src={loading} alt="Avatar"/></div><h1>Loading...</h1></div></div>)
    }

    if (isError) {
      return ( <div> <div>{searchBar}</div> <div className="sectionData"><div className="divImg"><img src={search} alt="Avatar"/></div><h1>{errMsg}</h1></div></div>)
    }

    return photos.length > 0
      ? (
      	<div> <div>{searchBar}</div>
      	<div className="sectionData">
            {this.renderImages()}
         </div>
         </div>
      ) : (
      <div> <div> {searchBar}</div>
        <div className="sectionData">
          <div className="divImg"><img src={search} alt="Avatar"/></div>
          <h1>{errMsg}</h1>
      </div>
      </div>
      )

}
}
export default Search;