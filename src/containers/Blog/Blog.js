import React, { Component } from "react";
import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost";
//import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch,Redirect } from "react-router-dom";
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(()=>{
  return import('./NewPost/NewPost');
}) 

class Blog extends Component {
  state = {
    auth:true
  }
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "new-post",
                    hash: "#submit",
                    search: "quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* <Route path="/" exact render={()=> <h1>Home</h1>}></Route>
        <Route path="/"  render={()=> <h1>Home2</h1>}></Route> */}
      
        <Switch>
        <Route path="/posts"  component={Posts}></Route>
         {this.state.auth ?  <Route path="/new-post" component={AsyncNewPost}></Route> : null}
         <Route render={()=><h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts"></Redirect> */}
          {/* <Route  path="/" component={Posts}></Route> */}
        </Switch>
        {/* order is important */}

        {/* <section>
          <FullPost postId={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
