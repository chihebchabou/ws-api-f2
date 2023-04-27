import PostList from "./components/post/PostList";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {

  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setIsLoading(false);
      setPosts(res.data);
    } catch (err) {
      setIsLoading(false);
      console.log(err)
      setError(err.message);
    }
  }
  
  useEffect(()=> {
    // setIsLoading(true);
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then(res => {
    //     setIsLoading(false);
    //     console.log(res.data)
    //     setPosts(res.data);
    //   })
    //   .catch(err => {
    //     setIsLoading(false)
    //     console.log(err)
    //     setError(err.message);
    //   });
    getPosts();
  }, [])
  
  return (
    <div className="container">
      <h1 className="text-primary text-center">Workshop API</h1>
      <PostList posts={posts} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
