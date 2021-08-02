import styled from 'styled-components';

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0ch.11px;
  color: ${(props) => props.theme.colors.primary};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primary};
  text-transform: none;
  line-height: 19px;
  font-size: 16px;
  letter-spacing: 0.15px;
`;