import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchPosts from "../FetchingData/fetchPosts";
import {
  getPostsError,
  getPosts,
  getPostsPending
} from "../reducers/getPostsReducer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
    this.state = {
      nameVal: "",
      textVal: ""
    };
  }

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  handleNameChange = event => {
    this.setState({ nameVal: event.target.value });
  };
  handleTextChange = event => {
    this.setState({ textVal: event.target.value });
  };
  postArticle() {
    fetch("/api/posts/", {
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDlmYTRjZjNjMjQ4NzNmMGM5ZWEzZTUiLCJpYXQiOjE1NzA3NDY4MTN9.uiqPEdY82qf4I5ReqAZtxnTNp_P_RoZYbsrjL-fEZf8",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        name: this.state.nameVal,
        text: this.state.textVal
      })
    }).then(function(res) {
      console.log(res);
    });
  }
  shouldComponentRender() {
    // // const { pending } = this.props;
    // if (this.pending === false) return false;
    // // more tests
    // return true;
  }

  render() {
    // const { posts } = this.props;
    const { posts } = this.props;
    if (!posts) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container d-flex flex-column justify-content-center align-items-center my-3">
        <form className="d-flex flex-column w-50 needs-validation">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              value={this.state.nameVal}
              onChange={this.handleNameChange}
              required
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Text</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Write a post"
              rows="5"
              value={this.state.textVal}
              onChange={this.handleTextChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={() => this.postArticle()}
          >
            Submit
          </button>
        </form>

        <div className="row m-5">
          {posts.map(post => (
            <div key={post._id} className="col-10 col-md-4 col-lg-6">
              <div className="card m-3">
                <div className="card-body">
                  <h3>Post by: {post.name}</h3>
                  <h5>Published on {post.date.slice(0, 10)}</h5>
                  <p>{post.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchPosts: fetchPosts
// }, dispatch)

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Home);
