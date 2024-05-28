import React from "react";
import './Banner.css'

const Banner = () => {
  //JSX == html + js
  // O return com parênteses () é pra retornar usando várias linhas
  return(
    <header className="banner">
    <img src="./imagens/banner.png" alt="O banner principal da pagina do Organo"/>
    </header>
  )
}

export default Banner