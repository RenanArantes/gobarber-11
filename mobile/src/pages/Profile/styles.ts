import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  top: 42px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const Separator = styled.View`
  border-bottom-color: #232129;
  border-bottom-width: 2px;
  margin-top: 24px;
`;

export const SignOutButton = styled(RectButton)`
  height: 35px;
  background: #ff5400;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 12px 24px 24px;
`;

export const SignOutButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #232129;
`;
