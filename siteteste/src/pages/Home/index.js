import React, { Component, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './estilolimpo.css'; // Importando estilolimpo.css
import './normalize.css'; // Importando normalize.css
import './index.css';
import {Link} from 'react-router-dom';
import ModalCarrinho from './ModalCarrinho';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
    <div className="container">
        <a className="navbar-brand" href="#!">
          <span style={{ color: 'var(--corpadrao)' }}>Tec</span>
          <span style={{ color: '#535353' }}>Store</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={isNavOpen ? 'true' : 'false'}>
                Categorias
              </a>
              <div className={`dropdown-menu mask-custom shadow-1`} aria-labelledby="navbarDropdownMenuLink">
  <div>
    <Link to="/produto" className='alteralink'>Computadores</Link>
  </div>
  <div>
    <Link to="/produto" className='alteralink'>Hardware</Link>
  </div>
  <div>
    <Link to="/produto" className='alteralink'>Periféricos</Link>
  </div>
</div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Promoções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Parceiros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vantagens">Sobre nós</a>
            </li>
            <li className="nav-item contato">
              <a className="nav-link" href="#contact">Contato</a>
            </li>

          </ul>
        </div>

        <div className="input-group">
          <input type="search" className="form-control rounded" placeholder="O que você está procurando?" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" className="btn btn-outline-secondary">
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
};

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/carrossel1.png'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/carrosel2.png'}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/carrossel3.png'}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};




class Home extends Component {

  constructor(props) {
    super(props);
    this.modalCarrinhoRef = React.createRef();
  }


  
  handleClick = (produto) => {
    console.log(this.modalCarrinhoRef.current); // Verificar no console
    this.modalCarrinhoRef.current.adicionarAoCarrinhoExterno(produto);
  };

  abrirModalCarrinho = () => {
    this.modalCarrinhoRef.current.abrirModal(); // Método fictício para abrir o modal
  };
  
  render() {
    const produto1 = { id: 'compra1', nome: 'Placa de Vídeo 3060', valor: 2000 };
    const produto2 = { id: 'compra2', nome: 'Processador I7', valor: 3000 };
    const produto3 = { id: 'compra3', nome: 'Memória Ram 16GB', valor: 500 };
    const produto4 = { id: 'compra4', nome: 'Placa Mãe Z790', valor: 2500 };
    const produto5 = { id: 'compra5', nome: 'Cooler Gelado', valor: 800 };
    const produto6 = { id: 'compra6', nome: 'Cooler Gelado', valor: 800 };
    return (
 
      
      
      <div>
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></link>

        <title>TecStore</title>
        {/*Header*/}
        <header>
          
          {/* Navbar */}
          <Navbar/>
          {/* Navbar */}
          {/*Section: Design Block*/}
          <section>
            
            {/* Plano de fundo Header com CSS Inline*/}
            <div id="intro" className="bg-image" style={{backgroundImage: 'url(assets/img/setup2.png)', height: '35vh'}}>
              <div className="mask" style={{backgroundColor: 'rgba(250, 182, 162, 0.15)'}} />
            </div>
            <div id="intro2" className="bg-image" style={{backgroundImage: 'url(assets/img/setup3.png)', height: '45vh'}}>
              <div className="mask" style={{backgroundColor: 'rgba(250, 182, 162, 0.15)'}} />
            </div>
            <div id="intro3" className="bg-image" style={{backgroundImage: 'url(assets/img/setup4.png)', height: '50vh'}}>
              <div className="mask" style={{backgroundColor: 'rgba(250, 182, 162, 0.15)'}} />
            </div>
          </section></header>
        {/* Modal Carrinho*/}
       
        {/* Intro */}
        {/*Section: Início site*/}
        <section>
        <div className="icone-carrinho" >
          <ModalCarrinho style={{ height: '60px', width: '60px' }} ref={this.modalCarrinhoRef} />
        </div>
          <div className="estrutura-produtos">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="secao-cabecalho">
                    <h2>Novidades</h2>

                    <Link to="/produto" className='alteralink roxo' >Todos os Produtos</Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a className="size" href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto1.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                      <Link to="/produtoexemplo" className='alteralink'><h4>Placa de Vídeo 3060</h4></Link>
                      </a>
                      <h6>R$2.000,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (24)</span>
                      <button onClick={() => this.handleClick(produto1)}>Adicionar ao Carrinho</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto2.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                      <Link to="/produtoexemplo" className='alteralink'><h4>Processador I7</h4></Link>
                        
                      </a>
                      <h6>R$3.000,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (21)</span>
                      <button onClick={() => this.handleClick(produto2)}>Adicionar ao Carrinho</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto3.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Memória Ram 16GB</h4>
                      </a>
                      <h6>R$500,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (36)</span>
                      <button onClick={() => this.handleClick(produto3)}>Adicionar ao Carrinho</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto4.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Placa Mãe Z790</h4>
                      </a>
                      <h6>R$2.500,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <span>Reviews (48)</span>
                      <button onClick={() => this.handleClick(produto4)}>Adicionar ao Carrinho</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto5.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Cooler Gelado</h4>
                      </a>
                      <h6>R$800,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />
                      <div>
                      <button onClick={() => this.handleClick(produto5)}>Adicionar ao Carrinho</button>
                      </div>

                      <span>Reviews (16)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="produto-item">
                    <a href="exemploproduto.html"><img src={process.env.PUBLIC_URL + '/assets/images/produto6.png'} alt="" /></a>
                    <div className="down-content">
                      <a href="exemploproduto.html">
                        <h4>Fonte 1000W</h4>
                      </a>
                      <h6>R$800,00</h6>
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                      <br />              
                      <span>Reviews (32)</span>
                      <button onClick={() => this.handleClick(produto6)}>Adicionar ao Carrinho</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Carrossel (documentação )*/}
          <MyCarousel/>
          {/* Seção Vantagens (features da loja) */}
          <section className="secao-box layout_padding" id="vantagens">
            <div className="container">
              <div className="heading_container">
                <h2>
                  Faça seu pedido!!!
                </h2>
                <p>
                  Comprando na TecStore você garante várias vantagens
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="box">
                    <div className="detail-box">
                      <h5>
                        Frete Grátis
                      </h5>
                      <p>
                        A partir de R$300,00 em compras
                      </p>
                      <a href>
                        <span>
                          Veja mais
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="box">
                    <div className="detail-box">
                      <h5>
                        Entrega Rápida
                      </h5>
                      <p>
                        Diversas transportadoras disponíveis
                      </p>
                      <a href>
                        <span>
                          Veja mais
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="box">
                    <div className="detail-box">
                      <h5>
                        Parcelamento
                      </h5>
                      <p>
                        Compre em até 12x sem juros
                      </p>
                      <a href>
                        <span>
                          Veja mais
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </a>
                      
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="box">
                    <div className="detail-box">
                      <h5>
                        Garantia Extendida
                      </h5>
                      <p>
                        Ganhe grátis 1 ano de garantia extendida
                      </p>
                      <a href>
                        <span>
                          Veja mais
                        </span>
                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Seção de contato*/}
          <section className="secao-contato" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form_container">
                    <div className="heading_container">
                      <h2>
                        Entre em contato
                      </h2>
                    </div>
                    <form action>
                      <div>
                        <input type="text" placeholder="Nome " />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" placeholder="Telefone" />
                      </div>
                      <div>
                        <input type="text" className="message-box" placeholder="Mensagem" />
                      </div>
                      <div className="d-flex ">
                        <button>
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/*Mapa interativo*/}
                <div className="col-md-6">
                  <div className="boxmap">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.0283628031116!2d-51.473846172973936!3d-25.4038611775785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef462cdc2f72fb%3A0xbe73a2c1e8973c98!2sCentro%20Universit%C3%A1rio%20Campo%20Real!5e0!3m2!1spt-BR!2sbr!4v1695167273156!5m2!1spt-BR!2sbr" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Footer*/}
        </section>
        <section className="footerok">
          <footer className="text-center text-lg-start">
            <div className="container p-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                  <h5 className="white text-uppercase mb-4">tecstore</h5>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a href="#!" className="text-white">Sobre nós</a>
                    </li>
                    <li>
                      <a href="produtos.html" className="text-white">Produtos</a>
                    </li>
                    <li>
                      <a href="#contact" className="text-white">Contato</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className=" white text-uppercase mb-4">Ajuda</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white">Garantia</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Entregas</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Devoluções</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Pagamentos</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className=" white text-uppercase mb-4">Carreira</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white">Trabalhe conosco</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Estágios</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="white text-uppercase mb-4">Receba promoções e novidades</h5>
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example2" className="form-control" placeholder="Email" />
                  </div>
                  <button type="submit" className="btn btn-outline-white btn-block"><strong>Inscreva-se</strong></button>
                </div>
              </div>
            </div>
            {/* Copyright */}
            <div className="text-center p-3">
              <p className="white">© 2023 Copyright TecStore</p>
            </div>
          </footer>
        </section>
        
        {/* Fim do site e carregador dos scripts*/}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-+dCXTV2P4WVL1PXJma8b4a4v0W4o3AGFDAdIw0Cs09Tzoj3VhnI8R2s6/C85/81lfG7MOd69qlhshbPf2V9uqLkDr0" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-W1J8fIleJ5Y5l8M+aWqA/YaUsC1/1jz7Fp4Z9qjEd1b99b+TAXLpnm7FG9wBCRLj" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.min.js" integrity="sha384-rbskxy4JovNuHhrj2whF83YgHx3mFpMSQ8Ew3mKSrC1vY+ixq0UqozFqW9e/U8Z6" crossorigin="anonymous"></script>
        {/* jQuery primeiro, depois Popper.js, depois Bootstrap JS */}
      </div>

      </div>
      

    );
  }
}

export default Home;