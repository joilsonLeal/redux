import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom2.jpg?ts=1564484531&ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom2.jpg?ts=1564484531&ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom2.jpg?ts=1564484531&ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom2.jpg?ts=1564484531&ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom2.jpg?ts=1564484531&ims=326x"
          alt="tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-venetto-casual-caminhada-leve-confortavel-masculino/06/EPL-0186-006/EPL-0186-006_zoom2.jpg?ts=1564484531&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

    </ProductList>
  );
}

export default Home;
