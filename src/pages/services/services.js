import React,{Component} from 'react'
import NavBar from '../../components/Navbar/Navbar'
import group from '../../assets/images/Group.svg'
import group2 from '../../assets/images/Group 2.svg'
import group2_1 from '../../assets/images/Group 2-1.svg'
import group3 from '../../assets/images/Group 3.svg'
import './services.css'

class Services extends Component {

   render() {
      return (
         <>
            <NavBar/>
            <div className="container-fluid background-services">
               <h1 className="title-service text-center col-md-6">Entenda um pouco sobre nossos serviços!</h1>
               <div className="service row justify-content-md-center">
                  <img className="img-service float-md-left img-fluid" src={group} alt="group"/>
                  <div className="desc-service float-left">
                     <h2 className="title-desc-service text-center">
                        Design da Gamificação
                     </h2>
                     <p className="text-desc-service text-center">
                        Identificamos e analisamos problemas no contexto da sua empresa para planejar e elaborar uma gamificação personalizada.
                     </p>
                  </div>
               </div>
               <div className="service row justify-content-md-center">
                  <div className="desc-service float-left">
                     <h3 className="title-desc-service text-center">
                        Desenvolvimento da Gamificação
                     </h3>
                     <p className="text-desc-service text-center">
                        Desenvolvemos um software a partir de uma gamificação personalizada para o seu contexto, ou realizamos atualização e manutenção de softwares já existentes, afim de melhorar uma gamificação.
                     </p>
                  </div>
                  <img className="img-service float-left" src={group2} alt="group"/>
               </div>
               <div className="service row justify-content-md-center">
                  <img className="img-service float-left" src={group2_1} alt="group"/>
                  <div className="desc-service float-left">
                     <h2 className="title-desc-service text-center">
                        Treinamento
                     </h2>
                     <p className="text-desc-service text-center">
                        Realizamos treinamentos gamificados acerca de gamificação e conteúdos na área de Engenharia de Software.
                     </p>
                  </div>
               </div>
               <div className="service row justify-content-md-center">
                  <div className="desc-service float-left">
                     <h3 className="title-desc-service text-center">
                        Consultoria
                     </h3>
                     <p className="text-desc-service text-center">
                        Identificamos problemas e sugerimos melhorias em gamificações já existentes ou ainda em andamento.
                     </p>
                  </div>
                  <div className="float-left">
                     <img className="img-service" src={group3} alt="group"/><br/>
                     <p className="text-right"><a className="cred-img-service" href="https://br.freepik.com/fotos-vetores-gratis/negocio">Crédito das imagens: Macrovector - br.freepik.com</a></p>
                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default Services