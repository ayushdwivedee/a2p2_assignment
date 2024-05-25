import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    {
      /*Complete the missing code*/
    }
    setLoading(true)
    try {
      {
        /*Complete the missing code*/
      }
      let res=await axios.get("https://jsonplaceholder.typicode.com/posts")
      // console.log(res.data)
      let data=res?.data;
      setPosts(data)
      setLoading(false)
    } catch (error) {
      {
        /*Complete the missing code*/
      }
      console.log("error occured",error)
      setLoading(false)
    }
  }

  useEffect(/*Complete the missing code*/
    ()=>{
      fetchAndUpdateData()
    },[]
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>

      {/*Complete the missing code*/}
      {posts.map((post,index)=>{
        return <Post key={index} {...post}/>
      })}
    </div>
  );
}

export default Posts;
