import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions/commentsActions";



export  class Comments extends React.Component {

   

    fetchComments(){
        this.props.dispatch(fetchComments());
    }

    render(){
        
        const mappedComments = this.props.Comments.map((comment) => 
            <li className="row" key={comment.id}>Comment: {comment.body} <br/> Email:{comment.email}</li>
        );

        console.log(mappedComments);

        return(
            <div>
                
                <button classname="buttonrow" onClick={this.fetchComments.bind(this)}>Load Comments</button>
                <ul className="ulrow" >{mappedComments}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        Comments: state.comments.comments
    }
}

Comments = connect(mapStateToProps)(Comments);
