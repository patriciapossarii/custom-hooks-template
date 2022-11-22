import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import {url} from "./constants/constants"
import axios from "axios";
import{useCapturarNome} from "./hooks/useCapturarNome"
import {useCapturarPostagem} from "./hooks/useCapturarPostagem"
import {useRequestData} from "./hooks/useRequestData"
function App() {
//const [nomeUsuarios, setNomeUsuarios] = useState([]);
//  const [postagens, setPostagens] = useState([]);
  
 // const nomeUsuarios = useCapturarNome()
 // const postagens = useCapturarPostagem()

 const nomeUsuarios = useRequestData(`${BASE_URL}users`)
 const postagens = useCapturarPostagem(`${BASE_URL}comments`)
 /* useEffect(() => {
    axios
      .get(`${BASE_URL}users`)
      .then((response) => {
        setNomeUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */
/*
  useEffect(() => {
    axios
      .get(`${BASE_URL}comments`)
      .then((response) => {
        setPostagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
*/
  return (
    <>
      <h1>Exercício 1</h1>
      {nomeUsuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>;
      })}
      <hr />
      <h1>Exercício 2</h1>
      {postagens.map((post) => {
        return <p key={post.id}>{post.body}</p>;
      })}
    </>
  );
}

export default App;
