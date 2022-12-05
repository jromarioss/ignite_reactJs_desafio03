import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";

import { api } from "../../lib/axios";
import { PostsProps } from "../home";
import { Post } from "./components/Post";

import { ProfileInfo } from "./components/ProfileInfo";
import { PostInfoContainer } from "./styles";

export const username: string = 'jromarioss';
export const repoName: string = 'github-blog';

export function PostInfo() {
  const [postData, setPostData] = useState<PostsProps>({} as PostsProps);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPost = useCallback(async () => {
    try {
      setIsLoading(true)
      const respose = await api.get(`/repos/${username}/${repoName}/issues/${id}`);
      setPostData(respose.data);
    } finally {
      setIsLoading(false)
    }

  }, [postData]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostInfoContainer>
      <ProfileInfo postInfo={postData} isLoading={isLoading} />
      <Post content={postData.body} isLoading={isLoading} />
    </PostInfoContainer>
  );
}