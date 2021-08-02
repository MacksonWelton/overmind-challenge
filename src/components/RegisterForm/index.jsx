import React from "react";
import ButtonDarkMode from "../ButtonDarkMode";
import { mask } from "remask";

import * as S from "./styles";

const RegisterForm = ({
  input,
  handleChangeInput,
  toogleDarkMode,
  darkMode,
  handleSubmit,
}) => {
  return (
    <S.Container dark={darkMode}>
      <S.DarkModeButtons>
        <S.SelectDarkMode onClick={toogleDarkMode}>
          <ButtonDarkMode active={darkMode} />
        </S.SelectDarkMode>
      </S.DarkModeButtons>
      <S.Title>CADASTRE-SE</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Label dark={darkMode} htmlFor="name">
            Nome completo
          </S.Label>
          <S.InputGroup>
            <S.InputIcon dark={darkMode}>
              <i className="fas fa-user"></i>
            </S.InputIcon>
            <S.Input
              dark={darkMode}
              type="text"
              name="name"
              id="name"
              placeholder="Ex: José da Silva santos"
              value={input.name}
              onChange={handleChangeInput}
              autoFocus
              required
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label dark={darkMode} htmlFor="email">
            Email
          </S.Label>
          <S.InputGroup>
            <S.InputIcon dark={darkMode}>
              <i className="fas fa-envelope"></i>
            </S.InputIcon>
            <S.Input
              dark={darkMode}
              type="email"
              name="email"
              id="email"
              value={input.email}
              onChange={handleChangeInput}
              placeholder="Ex: usuario@provedor.com"
              required
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label dark={darkMode} htmlFor="phone">
            Telefone
          </S.Label>
          <S.InputGroup>
            <S.InputIcon dark={darkMode}>
              <i className="fas fa-phone-alt"></i>
            </S.InputIcon>
            <S.Input
              dark={darkMode}
              type="tel"
              name="phone"
              id="phone"
              value={mask(input.phone, ["(99) 99999-9999"])}
              onChange={handleChangeInput}
              placeholder="Ex: (82) 99999-9999"
              required
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label dark={darkMode} htmlFor="password">
            Senha
          </S.Label>
          <S.InputGroup>
            <S.InputIcon dark={darkMode}>
              <i className="fas fa-lock"></i>
            </S.InputIcon>
            <S.Input
              dark={darkMode}
              type="password"
              name="password"
              id="password"
              value={input.password}
              onChange={handleChangeInput}
              required
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label dark={darkMode} htmlFor="password2">
            Digite sua senha novamente
          </S.Label>
          <S.InputGroup>
            <S.InputIcon dark={darkMode}>
              <i className="fas fa-lock"></i>
            </S.InputIcon>
            <S.Input
              dark={darkMode}
              type="password"
              name="password2"
              id="password2"
              value={input.password2}
              onChange={handleChangeInput}
              required
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.ButtonSubmit dark={darkMode} type="submit">
          Enviar
        </S.ButtonSubmit>
      </S.Form>
    </S.Container>
  );
};

export default RegisterForm;
