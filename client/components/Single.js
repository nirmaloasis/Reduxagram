import React from 'react'
import Photo from './Photo'


const Single = React.createClass({
    render(){
      const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
       const post = this.props.posts[i]


        return(
            <div className="single-grid">
                <Photo {...this.props}  i={i} post={post}/>
            </div>
        )
    }
});

export default Single
