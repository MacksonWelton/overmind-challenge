import React, { useState } from "react";
import { Balls, RegisterForm } from "./components";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import emailjs from "emailjs-com";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.password !== input.password2) {
      alert("As senhas não são iguais. Por favor tente novamente.");
      return;
    }

    if (window.confirm("Tem certeza que deseja envia este formulário?")) {
      emailjs
        .sendForm(
          "service_doeft37",
          "template_i48xq3o",
          e.target,
          "user_H2icw4gHwXzzUmOwGt0cs"
        )
        .then(() => alert("Cadastro realizado com sucesso!"))
        .catch((err) => {
          alert("Não foi possível enviar o seu e-mail")
          console.error(err)
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle dark={darkMode} />
      <RegisterForm
        input={input}
        handleChangeInput={handleChangeInput}
        darkMode={darkMode}
        toogleDarkMode={toogleDarkMode}
        handleSubmit={handleSubmit}
      />

      {Array(10)
        .fill(0)
        .map((size, i) => {
          size = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
          return <Balls key={i} width={size} height={size} dark={darkMode} />;
        })}
    </ThemeProvider>
  );
}

export default App;
