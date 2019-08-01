import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

    render() {
        return (
            <div>
                <div class="card w-100 footer-background p-3 mt-5">
                    <div class="card-body">
                        <div className="row d-flex justify-content-around flex-wrap p-3">
                            <div className="maps">
                                <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.4574123052116!2d-48.04729204879104!3d-15.98968698887581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2a8b79b8e96d%3A0x4026b52b1bd9012a!2sOrc&#39;estra+Gamifica%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1564693692999!5m2!1spt-BR!2sbr" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="footer-content" id="social-networks-footers">
                                    <div className="footer-sub">
                                        <h3><b>Redes Sociais</b></h3>
                                    </div>

                                    <p><b>Facebook:</b>facebook/orcestra</p>
                                    <p><b>Instagram:</b>@orcestra</p>
                                    <p><b>LinkedIn:</b>@orcestra</p>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-sub">
                                        <h3><b>Informações de Contato</b></h3>
                                    </div>
                                    <p><b>Telefone:</b>99999999</p>
                                    <p><b>E-mail:</b>oaosakoskas</p>
                                    <p><b>Endereço:</b>FGA</p>
                                    <p><b>Cidade:</b>Gama DF</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-11 d-flex justify-content-end">
                            <a className="contact-btn p-2 pl-5 pr-5" type="button">Entrar em Contato</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Footer;