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
    <Link to="/">
      <div>
        <a className="navbar-brand" href="#!">
          <span style={{ color: 'var(--corpadrao)' }}>Tec</span>
          <span style={{ color: '#535353' }}>Store</span>
        </a>
      </div>
    </Link>
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
                <a className="dropdown-item fonte" href="produtos.html">Computadores</a>
                <a className="dropdown-item fonte" href="produtos.html">Hardware</a>
                <a className="dropdown-item fonte" href="produtos.html">Periféricos</a>
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




class Produtoexemplo extends Component {

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
      <section className="py-5">
        <div className="container">
          <h3 style={{ marginBottom: '30px' }}>Exemplo de produto</h3>
          <div className="row gx-5">
            <aside className="col-lg-6">
              {/* Estilo interno com tag style */}
              <style>
                {`
                  .product-border {
                    border: 1px solid #eee;
                    -webkit-box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.25), -2px -2px 3px 0 rgba(0, 0, 0, 0.05);
                    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.25), -2px -2px 3px 0 rgba(0, 0, 0, 0.05);
                  }

                  .zoom {
                    -webkit-transition: -webkit-transform .5s ease;
                    transition: transform .5s ease;
                  }

                  .zoom:hover {
                    -webkit-transform: scale(1.2);
                    transform: scale(1.2);
                  }
                `}
              </style>
              <div className="border product-border rounded-4 mb-3 d-flex justify-content-center" style={{ overflow: 'hidden' }}>
                <img style={{ width: '100%', maxHeight: '100vh', margin: 'auto' }} className="zoom rounded-4 fit" src="assets/images/Produto.png" alt="Produto" />
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  <strong>NVIDIA RTX 4090</strong>
                </h4>
                <p>Placa de Vídeo</p>
                <br />
                <span className="text-muted ms-2">200 pedidos realizados</span>
                <br />
                <span className="text-success ms-2">Estoque disponível</span>
              </div>
              <br />
              <div className="mb-3 ps-lg-3">
                <span className="h5">R$9.000,00</span>
                <span className="text-muted">Unidade</span>

                <p>
                  Super placa de vídeo mega legal, potente, forte e poderosa. Roda até tetriz.
                </p>

                <br />
                <table style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th>Marca</th>
                      <th>Modelo</th>
                      <th>Garantia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>NVIDIA</td>
                      <td>RTX 4090</td>
                      <td>3 anos</td>
                    </tr>
                  </tbody>
                </table>

                <button
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    display: 'inline-block',
                    padding: '10px 65px',
                    backgroundColor: 'var(--corpadrao)',
                    color: '#ffffff',
                    borderRadius: '3px',
                    transition: 'all 0.3s',
                    border: '1px solid var(--corpadrao)',
                    marginTop: '10px'
                  }}
                >
                  Comprar
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
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

export default Produtoexemplo;