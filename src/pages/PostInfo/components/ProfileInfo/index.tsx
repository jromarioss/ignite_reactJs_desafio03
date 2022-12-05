import { NavLink } from "react-router-dom";

import { ProfileInfoContainer, ProfileInfoIcons, ProfileInfoLink, ProfileInfoTop } from "./styles";

import iconGithub from '../../../../assets/iconGithub.svg'
import iconComments from '../../../../assets/iconComments.svg'
import iconCalender from '../../../../assets/iconCalender.svg'
import iconLink from '../../../../assets/iconLink.svg'
import iconBack from '../../../../assets/iconBack.svg'
import { PostsProps } from "../../../home";
import { dateFormatter } from "../../../../utils/formatter";
import { Loading } from "../../../../components/Loading";

interface PostProps {
  postInfo: PostsProps;
  isLoading: boolean;
}

export function ProfileInfo({ postInfo, isLoading }: PostProps) {
  
  return (
    <ProfileInfoContainer>
      {isLoading ? 
        <Loading />
        :
        <>
          <ProfileInfoTop>
            <ProfileInfoLink>
              <NavLink to="/">
                <img src={iconBack} alt="" />
                VOLTAR
              </NavLink>
              <a href={postInfo.html_url} target="_blank">
                VER NO GITHUB
                <img src={iconLink} alt="" />
              </a>
            </ProfileInfoLink>
            <div>
              <h2>{postInfo.title}</h2>
            </div>
          </ProfileInfoTop>
          <ProfileInfoIcons>
            <div>
              <img src={iconGithub} alt="" />
              {postInfo.user.login}
            </div>
            <div>
              <img src={iconCalender} alt="" />
              {dateFormatter(postInfo.created_at)}
            </div>
            <div>
              <img src={iconComments} alt="" />
              {postInfo.comments} comentários
            </div>
          </ProfileInfoIcons>
        </>
      }
    </ProfileInfoContainer>
  );
}