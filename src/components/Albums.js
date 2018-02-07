import React from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumsActions";



export  class Albums extends React.Component {

   

    fetchAlbums(){
        this.props.dispatch(fetchAlbums());
    }

    render(){
        
        const mappedAlbums = this.props.albums.map((album) => 
            <li className="row" key={album.id}>{album.title}</li>
        );

        console.log(mappedAlbums);

        return(
            <div>
                
               <button classname="buttonrow" onClick={this.fetchAlbums.bind(this)}>Load Albums</button>
                <ul className="ulrow">{mappedAlbums}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        albums: state.albums.albums
    }
}

Albums = connect(mapStateToProps)(Albums);
