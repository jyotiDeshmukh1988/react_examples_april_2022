import React, { Component } from "react";

export default class FetchDemo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: data });
      });
  }
  render() {
    console.log("render");
    return (
      <>
        <div>FetchDemo1</div>
        <table className="table table-bordered table-striped">
          <tbody>
            {this.state.comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
