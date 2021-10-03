import { styled } from "@material-ui/core";
import React from "react";
import { Post } from "../models";

interface Props {
  post: Post;
}
const PostView = ({ post }: Props): JSX.Element => {
  return (
    <Root>
      {post.title && <Title>{post.title}</Title>}
      <Content>{post.content}</Content>
    </Root>
  );
};
export default PostView;

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Title = styled("h2")({
  fontSize: "18px",
});

const Content = styled("p")({
  fontSize: "12px",
});
