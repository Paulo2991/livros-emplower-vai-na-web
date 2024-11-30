import S from "./Header.module.scss";
import Livro from "../../assets/livro.png";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={S.header}>
        <section className={S.boxShadow}>
          <img src={Livro} alt="Livro" />
          <h1>Livros Vai Na Web</h1>
        </section>
        <nav className={S.menu}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="livrosDoados">Livros Doados</Link>
            </li>
            <li>
              <Link to="queroDoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>
        <section className={S.input}>
          <input
            type="text"
            id="pesquisa"
            name="pesquisa"
            placeholder="O que vc procura?"
          />
          <img src={search} alt="" />
        </section>
      </header>
    </>
  );
}

export default Header;
