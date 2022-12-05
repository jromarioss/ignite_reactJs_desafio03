import ReactMarkdown from 'react-markdown'
import { Loading } from '../../../../components/Loading';

import { PostInfoMain } from "./styles";

interface Props {
  content: string;
  isLoading: boolean;
}

export function Post({ content, isLoading}: Props) {
  return (
    <PostInfoMain>
      {isLoading ?
        <Loading />
        :
        <ReactMarkdown 
          children={content}
        />
      }
    </PostInfoMain>
  )
}