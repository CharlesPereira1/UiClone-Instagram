import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { FeedProps } from "./index";

export const List = styled(FlatList as new () => FlatList<FeedProps>)``;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "#999",
})``;
