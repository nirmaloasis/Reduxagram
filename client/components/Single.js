import React from 'react'
import Photo from './Photo'
import Comments from './Comments'


const Single = React.createClass({
    render(){

      const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
      const post = this.props.posts[i]
      const postComments = this.props.comments[this.props.params.postId]|| [];
      return(
            <div className="single-photo">
               <Photo {...this.props}  i={i} post={post}/>
               <Comments postComments={postComments}/>
            </div>
        )
    }
});

export default Single
