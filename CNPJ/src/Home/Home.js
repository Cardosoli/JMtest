
import React, { Component } from 'react'
 
import Icon from '../Icon/icon'

export class Home extends Component {
    
    render() {
        
        return (
            <div className="container">
                <div className="home">
                    <div className="header"/>
                    <div className="home_seguros">
                        <div className="icon_home">
                            <Icon tag="line-chart" size='2x'/>
                        </div>
                        <div className="text_home">
                            <span>Cotação de Seguros</span>
                            <p> Solução inovadora da líder de mercado</p>
                        </div>
                    </div>
                    <div className="button_footer"  onClick={() => { this.props.history.replace('/cnpj') }}>
                        <span className='iniciar'> Iniciar </span>
                        <span className='icon_iniciar'>
                            <Icon tag="icon-arrow-right" size='1x'/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
