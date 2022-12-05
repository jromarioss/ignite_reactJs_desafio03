import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


import { api } from "../../lib/axios";
import { Profile } from "./components/Profile";
import { dateFormatter } from "../../utils/formatter";
import { Card, Cards, HomeContainer } from "./styles";
import { FormInput } from "./components/FormInput";
import { Loading } from "../../components/Loading";

export interface PostsProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  }
}

export const username: string = 'jromarioss';
export const repoName: string = 'github-blog';

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
 

  const getPosts = useCallback(async(query: string = "") => {

    try {
      setIsLoading(true);
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`);
      setPosts(response.data.items);
    } finally {
      setIsLoading(false);
    }

  }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomeContainer>
      <Profile isLoading={isLoading} />

      <FormInput postsAmount={posts.length} getPosts={getPosts} />

      {isLoading ?
        <Loading />
        :
        <Cards>
          {posts.map((post) => {
            return (
              <NavLink to={`/postInfo/${post.number}`} key={post.number}>
                <Card>
                  <div>
                    <h2>{post.title}</h2>
                    <span>{dateFormatter(post.created_at)}</span>
                  </div>
                  <p>{post.body}</p>
                </Card>
              </NavLink>
            )
          })}
        </Cards>
      }
    </HomeContainer>
  )
}