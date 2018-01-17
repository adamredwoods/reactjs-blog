import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {

  render() {

    return (
      <div className="Post">
        <header className="App-header">
          <h1>{this.props.post.title}</h1>
        </header>
        <div><Author names={this.props.allAuthors} /></div>
        <p className="App-intro">
          {this.props.post.body}
        </p>
        <div>
        Comments: {this.props.post.comments[1]}
        </div>
      </div>
    );
  }


 }



class Author extends Component{
   render() {
      return (
         <div >...{this.props.names.map(author => <div>Written by {author}</div>)}</div>
      );
   }
}


export default Post;
