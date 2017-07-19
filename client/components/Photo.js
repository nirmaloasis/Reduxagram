import React from 'react'
import {Link} from 'react-router'
import CSSTransactionGroup from "react-addons-css-transition-group";

const Photo = React.createClass({


    render(){

      var link = this.props.post.code
        return(
            <figure className="grid-figure">
              <div className="grid-figure" >
                <Link to={'/view/'+link}>
                  <img src={this.props.post.display_src} alt={this.props.post.caption}/>
                </Link>
                <CSSTransactionGroup
                    transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <span key={this.props.post.likes} className="likes-heart">{this.props.post.likes} </span>
                </CSSTransactionGroup>
            </div>
            <figcaption>
               <p>{this.props.post.caption}</p>
               <div className="control-buttons">
                   <button className="likes" onClick={this.props.increment.bind(null,this.props.i)}>&hearts; {this.props.post.likes}</button>
                   <Link to={'/view/'+link}>
                    <span className="comment-count">
                        <span className="speech-bubble"></span>
                        {this.props.comments[this.props.post.code] ?this.props.comments[this.props.post.code].length:0 }
                    </span>
                   </Link>
               </div>
          </figcaption>
        </figure>
        )
    }
})

export default Photo
