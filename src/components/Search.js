import React from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import './Search.css';

class Search extends React.Component {
    state = {
        keyword: "",
        photos:[],
        loader: false,
    }
    inputHandle = (e) => {
        this.setState({keyword: e.target.value });
    };

    searchImages = async (e) => {
        e.preventDefault();
        this.setState({loader: true});

        const res = await axios.get(`https://api.pexels.com/v1/search?query=${this.state.keyword}&per_page=50&page=2`, {
            headers: {
            Authorization:"563492ad6f91700001000001729ed2fb31f447549dccfdcdd0b21ab7",},
        });
        this.setState({loader: false});
        this.setState({photos: res.data.photos});
    };
    render() {
        return(
            <>
            <form onSubmit={this.searchImages}>
                <div className='form-group'>
                    <input type="text" name='keyword' className='form-control' 
                    value={this.state.keyword} onChange={this.inputHandle}
                    placeholder='Search here' />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Search images' className='btn btn-primary btn-block'/>
                </div>
            </form>
            <div className='row'>
            {!this.state.loader ? (
                 this.state.photos.map((img) => 
                     <Gallery image = {img} key={img.id}/>
                 ))
             : (<h1>Loading...</h1> )}
             </div>
        </>
        )
    }
}

export default Search;