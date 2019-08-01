import React, { Component } from 'react'
import './cards.css';

class Cards extends Component {

    render() {

        return (


            <div className="row d-flex justify-content-around cards card-class">
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">ENGAJAMENTO</h5>
                            <p className="card-text">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">MOTIVAÇÃO</h5>
                            <p className="card-text">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">PRODUTIVIDADE</h5>
                            <p className="card-text">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;