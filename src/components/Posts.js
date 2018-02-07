import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";



export  class Posts extends React.Component {

   

    fetchPosts(){
        this.props.dispatch(fetchPosts());
    }

    render(){
        
        const mappedPosts = this.props.Posts.map((album) => 
            <li className="row" key={album.id}>{album.title}</li>
        );

        console.log(mappedPosts);

        return(
            <div>
                
                <button classname="buttonrow" onClick={this.fetchPosts.bind(this)}>Load Posts</button>
                <ul className="ulrow" >{mappedPosts}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        Posts: state.posts.posts
    }
}

Posts = connect(mapStateToProps)(Posts);
