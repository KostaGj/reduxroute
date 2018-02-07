import React from "react";
import { Route } from "react-router-dom";

import { Albums } from "./Albums";
import { Comments } from "./Comments";
import { Posts } from "./Posts";

export class Main extends React.Component {
  render(){
    return(
      <div id="main_content">
        <Route exact path="/albums" component={Albums} />
        <Route path="/comments" component={Comments} />
        <Route path="/posts" component={Posts} />
      </div>
  
    )
  }
}
  




