import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='footer'>
      <section className="redesSociais">
        <ul>
          <li>
            <a href="#">
            <img src="./imagens/fb.png" alt="logo facebook" />
            </a>
          </li>
          <li>
            <a href="#">
            <img src="./imagens/ig.png" alt="logo instagram" />
            </a>
          </li>
          <li>
            <a href="#">
            <img src="./imagens/tw.png" alt="logo twitter" />
            </a>
          </li>
        </ul>
      </section>
      <section className="logo">
        <img src="./imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Ricardo Xavier.</p>
      </section>
    </footer>
  )
}

export default Rodape