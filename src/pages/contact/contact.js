import React, {Component} from 'react'
import NavBar from '../../components/Navbar/Navbar';
import './contact.css';

class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
    }

    render() {
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
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Como podemos te chamar?</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Nome"
                                           value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }}/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="email">Onde te responderemos?</label>
                                    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email"
                                           value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="message">Como podemos te ajudar?</label>
                                    <textarea class="form-control" id="message" name="message" rows="8" placeholder="Mensagem"
                                              value={this.state.message} onChange={(event) => { this.setState({ message: event.target.value }) }}>
                                    </textarea>
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
}

export default ContactForm;