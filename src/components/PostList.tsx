import React, { useEffect, useState } from "react";
import BACKEND from "utils/axiosInstance";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Bamba {
    taste: string;
    barcode:number;
    falvor:string;
    expensive:boolean;
} 

export const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetching all posts from backend
  const fetchPosts = async () => {
    try {
      console.log(process.env.REACT_APP_BACKEND);
      const response = await BACKEND.get<Post[]>("posts");
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Sakana you are in danger");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
