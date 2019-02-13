import React, { Component } from 'react'
import user from '../Img/User.png'
import cnpjService from '../cnpjService/cnpjService'
import Icon from '../Icon/icon'
import Input from '../Components/form/form'
import {Button} from 'reactstrap'

export class ValidateCNPJ extends Component {

    state = {
        valid: null,
        cnpj: null,
    }
   
    handleChange = (e) => {
        let value = e.target.value;

        String.prototype.replaceAll = function(target, replacement) {
            return this.split(target).join(replacement);
        }

        const newValue = value.replaceAll('.', '').replaceAll('/', '').replaceAll('-', '')

        this.setState ({
            cnpj: newValue
        })
    }

    CNPJsearch = async() => {
        try {
            const validate = await cnpjService.validateCNPJ(encodeURIComponent(this.state.cnpj));
            this.setState({
                valid: validate.valid
            })
            console.log("CNPJ válido")
        } 
        catch (e) {
            this.setState({
                valid: false
            })
            console.log("CNPJ inválido")
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

                            <Input
                                name='CodCnpj'
                                id='CodCnpj'
                                type="text"
                                placeholder="Digite o CNPJ"
                                mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                                onChange={(e) => this.handleChange(e)}
                            />
                            {state.valid !== null &&
                                <span className={!state.valid ? "icon_cnpj_invalid" : "icon_cnpj_valid"}>
                                    <Icon tag="icon-check-circle" size='sm'/>
                                </span>
                            }
                        </div>
                    </div>

                    <div className="button_confirm">
                        <div className="button_container" />
                            <Button 
                                className={this.state.cnpj==null ? "button_footer" : "button_footer_blue"}
                                onClick={this.CNPJsearch} 
                                disabled={!this.state.cnpj}
                            >
                                <span className='ok'>
                                    OK
                                </span>
                                <span className='icon'>
                                    <Icon tag="icon-arrow-right" size='1x'/>
                                </span>
                            </Button>
                        </div>                       
                    </div>
                </div>
            
        )
    }
}

export default ValidateCNPJ
