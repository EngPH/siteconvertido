// ModalCarrinho.js
import React, { Component, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const produtos = [
  { id: 'compra1', nome: 'Placa de Vídeo 3060', valor: 2000, imagem: process.env.PUBLIC_URL + '/assets/images/produto1.png' },
  { id: 'compra2', nome: 'Processador I7', valor: 3000, imagem: process.env.PUBLIC_URL + '/assets/images/produto2.png' },
  { id: 'compra3', nome: 'Memória Ram 16GB', valor: 500, imagem: process.env.PUBLIC_URL + '/assets/images/produto3.png' },
  { id: 'compra4', nome: 'Placa Mãe Z790', valor: 2500, imagem: process.env.PUBLIC_URL + '/assets/images/produto4.png' },
  { id: 'compra5', nome: 'Cooler Gelado', valor: 800, imagem: process.env.PUBLIC_URL + '/assets/images/produto5.png' },
  { id: 'compra6', nome: 'Cooler Gelado', valor: 800, imagem: process.env.PUBLIC_URL + '/assets/images/produto6.png' },
];

class ModalCarrinho extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      carrinho: [],
    };
    this.modalCarrinhoRef = React.createRef();
  }

  handleModalShow = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  adicionarAoCarrinhoExterno = (produto) => {
    // Verifica se o produto é válido
    if (produto && produto.id) {
      // Chama a função adicionarAoCarrinho
      this.adicionarAoCarrinho(produto);
    } else {
      console.error("Produto inválido.");
    }
  };

  adicionarAoCarrinho = (produto) => {
    const { carrinho } = this.state;
    const produtoNoCarrinho = carrinho.find((item) => item.id === produto.id);

    if (produtoNoCarrinho) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
      );
      this.setState({ carrinho: novoCarrinho });
    } else {
      this.setState((prevState) => ({
        carrinho: [...prevState.carrinho, { ...produto, quantidade: 1 }],
      }));
    }
  };

  removerDoCarrinho = (produto) => {
    const { carrinho } = this.state;
    const produtoNoCarrinho = carrinho.find((item) => item.id === produto.id);

    if (produtoNoCarrinho) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === produto.id ? { ...item, quantidade: Math.max(0, item.quantidade - 1) } : item
      );

      const carrinhoAtualizado = novoCarrinho.filter((item) => item.quantidade > 0);

      this.setState({ carrinho: carrinhoAtualizado });
    }
  };

  calcularTotal = () => {
    const { carrinho } = this.state;
    return carrinho.reduce((total, item) => total + item.valor * item.quantidade, 0);
  };

  handleCompra = () => {
    console.log('Compra realizada!');
    this.handleModalClose();
  };

  render() {
    const { carrinho } = this.state;
    const { adicionarAoCarrinhoExterno } = this.props;

    return (
      <div>
        <div className="icone-carrinho">
         <div className="icone-carrinho-conteudo" onClick={this.handleModalShow}>
         <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-cart" viewBox="0 1 16 17">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          Carrinho
        </div>
      </div>

        <Modal show={this.state.showModal} onHide={this.handleModalClose} centered>
          <Modal.Header closeButton>
            <h1 className="navbar-brand">
              <span style={{ color: 'var(--corpadrao)' }}>Tec</span>
              <span style={{ color: '#535353' }}>Store</span>
            </h1>
          </Modal.Header>
          <Modal.Body>
            <h4>Carrinho de Compras</h4>
            {carrinho.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              <div>
                <ul>
                {carrinho.map((item) => (
  <li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
    {item.nome} - R${(item.valor * item.quantidade).toFixed(2)}
    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
      Quantidade: {' '}
      <button onClick={() => this.removerDoCarrinho(item)} style={{ width: '30px', height: '30px', margin: '0 5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        -
      </button>
      <p style={{ padding: '10px', margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{item.quantidade}</p>
      <button onClick={() => this.adicionarAoCarrinho(item)} style={{ width: '30px', height: '30px', margin: '0 5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        +
      </button>
    </div>
  </li>
))}
</ul>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Total: R${this.calcularTotal().toFixed(2)}</p>
                  <button  onClick={this.handleCompra}>
                    Comprar
                  </button>
                </div>
              </div>
            )}
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModalClose}>
              Continuar Comprando
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalCarrinho;