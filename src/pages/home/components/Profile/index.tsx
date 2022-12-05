import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { ProfileContainer, ProfileInfo, ProfileInfoBottom, ProfileInfoTop } from "./styles";

import { api } from "../../../../lib/axios";

import iconGithub from "../../../../assets/iconGithub.svg";
import iconBuild from "../../../../assets/iconBuild.svg";
import iconPeople from "../../../../assets/iconPeople.svg";
import iconLink from "../../../../assets/iconLink.svg";
import { username } from "../..";
import { Loading } from "../../../../components/Loading";

interface ProfileProps {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  followers: string;
  company: string;
  bio: string;
}

interface Props {
  isLoading: boolean;
}

export function Profile({ isLoading }: Props) {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);

  const fetchPost = useCallback(async() => {
    const response = await api.get(`/users/${username}`);
    setProfile(response.data);
  }, [profile]);

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <ProfileContainer>
      {isLoading ?
        <Loading />
        :
        <>
          <div>
            <img src={profile.avatar_url} alt="" width={148} />
          </div>
          <ProfileInfo>
            <div>
              <ProfileInfoTop>
                <h1>{profile.name}</h1>
                <a href={profile.html_url} target="_blank">
                  GITHUB
                  <img src={iconLink} alt="" width={12} />
                </a>
              </ProfileInfoTop>
              <p>{profile.bio}</p>
            </div>
            <ProfileInfoBottom>
              <div>
                <img src={iconGithub} alt="" />
                {profile.login}
              </div>
              <div>
                <img src={iconBuild} alt="" />
                {profile.company}
              </div>
              <div>
                <img src={iconPeople} alt="" />
                {profile.followers} seguidores
              </div>
            </ProfileInfoBottom>
          </ProfileInfo>
        </>
      }
    </ProfileContainer>
  );
}