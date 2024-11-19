import React from "react";
import "./Home.css";
import fotoPessoal from "../../../src/andrey.jpg";

function Home() {
  return (
    <div className="main">
      <div className="content">
        <section className="section" id="about-me">
          <div className="container">
            <div className="presentation">
              <img src={fotoPessoal} alt="Personal" />
              <div className="personal-info">
                <h3>Andrey Ferreira</h3>
                <p>Desenvolvedor de Software</p>
                <p>Recife, Pernambuco, 🇧🇷</p>
              </div>
            </div>
          </div>
          <div className="container">
            <p>
              Meu nome é Andrey Ferreira e estou estudando para me tornar um
              Desenvolvedor Node.js. Sou de Recife, PE, Brasil, e atualmente
              estou cursando Sistemas para Internet na UNICAP (Universidade
              Católica de Pernambuco). Estou aprendendo tecnologias como
              Node.js, Express.js, TypeScript, React, SQL (PostgreSQL) e NoSQL
              (MongoDB). Em todos os meus projetos, utilizo o Git para
              versionamento de código e colaboração.
            </p>
            <br />
            <p>
              {" "}
              Tenho grande interesse em desenvolvimento back-end, DevOps e
              desenvolvimento de jogos.
            </p>
          </div>
        </section>
        <section className="section" id="stack">

        </section>
      </div>
    </div>
  );
}

// function Home() {
//   return (
//     <div className="home">
//       <section className="section" id="about">
//         <h2>Sobre Mim</h2>
//         <p>
//           Sou um desenvolvedor de software focado em criar soluções eficientes e
//           inovadoras. Possuo habilidades em JavaScript, React, Node.js e mais.
//         </p>
//       </section>

//       <section className="section" id="projects">
//         <h2>Projetos</h2>
//         <ul>
//           <li>Gerenciador de Tarefas - React e Node.js</li>
//           <li>Aplicativo Financeiro - Flutter e Firebase</li>
//         </ul>
//       </section>
//     </div>
//   );
// }

export default Home;
