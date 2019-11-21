import React, { Component } from "react";
import axios from "../../../axios"; 
import Post from "../../../components/Post/Post";
import "./Posts.css";
import {Link,Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost'


class Posts extends Component {

    state = {
        posts: []
      };

      componentDidMount() {
          console.log(this.props)
        axios.get("/posts").then(response => {
          console.log(response);
          const posts = response.data.slice(0, 4);
          const updatedPosts = posts.map(post => {
            return {
              ...post,
              author: "Michael Hezaltin"
            };
          });
          this.setState({ posts: updatedPosts });
        })
        .catch(error=>{
            console.log(error);
           // this.setState({error:true})
        });
      }
    
      postSelectedHandler = id => {
          console.log(id)
          this.props.history.push({pathname:'/posts/' + id}) //navigation programetically
          //this.props.history.push('/posts/' + id) this one also works
         // this.setState({selectedPostId:id})
      };

  render() {
    let posts = <p style={{textAlign:'center'}}>Something went wrong!!</p>
    if(!this.state.error){
        posts = this.state.posts.map(post => (
           // <Link to={'/posts/' + post.id} key={post.id}>
                 <Post key={post.id} title={post.title} author={post.author} clicked={()=> this.postSelectedHandler(post.id) }></Post>
           // </Link>
           
          ));
    }

    return (
      <div>
      <section className="Posts">{posts}</section>
      <Route path={this.props.match.url + "/:id"} component={FullPost}></Route>
      </div>
    );
  }
}


export default Posts;