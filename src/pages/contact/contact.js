import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import './contact.css';

function ContactForm() {

    return (
        <>
            <NavBar/>
            <div className="page-container">
                <div className="row">
                    <div className="col-10 offset-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <h1 className="title" >
                                Entre Em Contato Conosco!
                            </h1>
                        </div>
                        <form>
                            <div className="form-group">
                                <label for="name">Como podemos te chamar?</label>
                                <input type="text" class="form-control" id="name" placeholder="Nome"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Onde te responderemos?</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Como podemos te ajudar?</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Mensagem"></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" class="btn submit-button">ENVIAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )


}
export default ContactForm