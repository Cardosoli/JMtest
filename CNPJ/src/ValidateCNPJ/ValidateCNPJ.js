import React, { Component } from 'react'
import user from '../Img/User.png'
import cnpjService from '../cnpjService/cnpjService'
import Icon from '../Icon/icon'

const cnpjValidate = '112.345.678/0001-23'

export class ValidateCNPJ extends Component {

    state = {
        valid: false
    }

    CNPJsearch = async() => {
        const validate = await cnpjService.validateCNPJ(encodeURIComponent(cnpjValidate))
        if(validate.status === 200){
           this.setState ({
                valid: true
           })
        }
    }



    render() {

        const state = this.state;
        
        return (
            <div>
                <div className="validate_cnpj" >
                        <div className="header_nova_cotacao">
                            <div className="icon_nova_cotacao">
                                <Icon tag="line-chart" size='lg'/>
                            </div>
                            <div className="cotacao">
                                <span>Nova cotação</span>
                                <span>#0980</span>
                            </div>
                            <div className="user">
                                <img src={user} width='30' height='30'/>
                            </div>
                        </div>
                </div>

                <div className="body_busca_cnpj">
                    <div className="body_menu">
                        <div className="codigo">
                            <span>1</span>
                        </div>
                        <div className="text">
                            Buscar por CNPJ ou empresa
                        </div>
                    </div>

                    <div className="list_cnpj">
                        <div className="title">
                            CNPJ / Empresa
                        </div>
                        <div className="description">
                            <span className="cod_cnpj">
                                12.345.678/0001-23
                            </span>
                            <span className={!state.valid ? "icon_cnpj" : "icon_cnpj_green"}>
                                <Icon tag="icon-check-circle" size='sm'/>
                            </span>
                        </div>
                    </div>

                    <div className="button_confirm">
                        <div className="button_container" />
                        <div className="button_footer" onClick={this.CNPJsearch} color='white' background='rgb(50, 204, 204)'>
                            <span className='ok'>
                                OK
                            </span>
                            <span className='icon'>
                                <Icon tag="icon-arrow-right" size='1x'/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ValidateCNPJ
