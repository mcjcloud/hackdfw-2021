import React, { useEffect } from "react";
import { styled } from "@material-ui/core";
import { useSelector } from "react-redux";
import { fetchGroupById, selectGroup } from "../store/group";
import { useParams } from "react-router-dom";
import PostView from "../components/PostView";

interface Params {
  id: string;
}
const GroupPage = (): JSX.Element => {
  const { id } = useParams<Params>();
  const group = useSelector(selectGroup(id));

  useEffect(() => {
    fetchGroupById(id);
  }, [id]);
  return (
    <Root>
      {group?.posts.map((post) => (
        <PostWrapper>
          <PostView post={post} />
        </PostWrapper>
      ))}
    </Root>
  );
};
export default GroupPage;

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const PostWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "8px",
});
