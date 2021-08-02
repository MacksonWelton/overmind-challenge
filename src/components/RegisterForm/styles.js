import styled from "styled-components";

export const DarkModeButtons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectDarkMode = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Container = styled.section`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto auto auto;
  background-color: ${(props) =>
    props.dark ? props.theme.background.dark : props.theme.background.light};
  border-radius: 10px;
  padding: 0px 10px 10px 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border: 1px solid #fff;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  color: ${props => props.dark ? props.theme.colors.secondary : props.theme.colors.primary};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  gap: 15px;
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: ${(props) =>
    props.dark ? props.theme.colors.secondary : props.theme.colors.primary};
  margin-left: 2px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  font-weight: bold;
  font-size: 14px;
  border-left: 0;
  border-top: 2px solid;
  border-right: 2px solid;
  border-bottom: 2px solid;
  background-color: ${(props) =>
    props.dark ? props.theme.background.dark : props.theme.background.dark};
  border-color: #fff;
  color: ${(props) =>
    props.dark ? props.theme.colors.secondary : props.theme.colors.primary};
  border-radius: 0 10px 10px 0;

  &::placeholder {
    color: ${(props) =>
      props.dark ? props.theme.colors.secondary : props.theme.colors.primary};
  }

  &:focus {
    outline: none;
    border-right: 4px solid
      ${(props) =>
        props.dark ? props.theme.colors.secondary : props.theme.colors.primary};
  }
`;

export const ButtonSubmit = styled.button`
  width: 150px;
  margin-top: 10px;
  border-radius: 25px;
  padding: 10px;
  font-size: 22px;
  background: ${(props) =>
    props.dark ? props.theme.colors.primary : props.theme.colors.secondary};
  border: 2px solid #fff;
  color: ${(props) =>
    props.dark ? props.theme.colors.secondary : props.theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  &:hover {
    color: ${(props) =>
      props.dark ? props.theme.colors.primary : props.theme.colors.secondary};
    background-color: ${(props) =>
    props.dark ? props.theme.background.dark : props.theme.background.dark};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-top: 3px;
  border-radius: 10px;
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 0;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-color: #fff;
  color: ${(props) =>
    props.dark ? props.theme.colors.secondary : props.theme.colors.primary};
  padding: 10px 15px;
  width: 20px;
  border-radius: 10px 0 0 10px;
  background-color: ${(props) =>
    props.dark ? props.theme.background.dark : props.theme.background.dark};
`;
