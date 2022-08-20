import React, { Component } from 'react';
import perfilCat from '../../images/perfil.gif';
import './styles.scss';

export default class Perfil extends Component {
    render() {

        return (
            <div className="row">
                <div className="col-md-6">
                    <img alt='' src={perfilCat} className="imagePerfil" />
                </div>
                <div className="col-md-6 apresentacao">
                    <h3>João Junior</h3>
                    <p>
                        Olá tudo bem? a principio eu estarei usando esse espaço para uma breve descrição sobre min, no meu portifólio 
                        aqui jás sendo desenvolvido... bem maneiro esse slider do lado passando as skills né? hahah
                    </p>
                </div>
            </div>
        )
    }
}