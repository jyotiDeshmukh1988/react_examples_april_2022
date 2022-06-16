import React, { useEffect, useState } from "react";

export default function FetchDemo2() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = function () {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  };
  return (
    <>
      <div>FetchDemo2</div>
      {/* <button onClick={fetchData}>fetch data</button> */}
      <table className="table table-bordered table-striped">
        <tbody>
          {comments.map((comment) => (
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
