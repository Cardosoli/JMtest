import React from 'react';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App'
import ValidateCNPJ from '../ValidateCNPJ/ValidateCNPJ'
import user from '../Img/User.png'
import Icon from '../Icon/icon'
import Home from '../Home/Home'

import React from 'react';


describe('Start Test', () => {

    it('App renderiza sem falhar', () => {
        const component = shallow(<App />);
        expect(component.exists()).toEqual(true);
    });
    
    it('Home renderiza sem falhar', () => {
        const component = shallow(<Home />);
        expect(component.exists()).toEqual(true);
    });

    // Home

    it('Home renderiza sem falhar', () => {
        const component = shallow(<Home />);
        expect(component.exists()).toEqual(true);
    });

    it('Possui ícone (gráfico) quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
        <div className="icon_home">
            <Icon tag="line-chart" size='2x'/>
        </div>)).toEqual(true);
    });

    it('Possui texto de home correto quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
        <div className="text_home">
            <span>Cotação de Seguros</span>
            <p> Solução inovadora da líder de mercado</p>
        </div>)).toEqual(true);
    });

    it('Possui Link correto para validar CNPJ iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
        <div className="button_footer"  onClick={() => { this.props.history.replace('/cnpj') }}>
            <span className='iniciar'> Iniciar </span>
            <span className='icon_iniciar'>
                <Icon tag="icon-arrow-right" size='1x'/>
            </span>
        </div>)).toEqual(true);
    });

    // ValidateCNPJ

    it('ValidateCNPJ renderiza sem falhar', () => {
        const component = shallow(<ValidateCNPJ />);
        expect(component.exists()).toEqual(true);
    });

    it('Possui ícone (gráfico) quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
            <div className="icon_nova_cotacao">
                <Icon tag="line-chart" size='lg'/>
            </div>)).toEqual(true);
    });

    it('Possui código e nome de cotação quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
            <div className='cotacao'>
                <span>Nova cotação</span>
                 <span>#0980</span>
            </div>)).toEqual(true);
    });

    it('Possui foto de user quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
            <img src={user} width='30' height='30'/>)).toEqual(true);
    });

    it('Possui icone (check-circle) quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
            <span className="icon_cnpj">
            <Icon tag="icon-check-circle" size='sm'/>
        </span>)).toEqual(true);
    });

    it('Possui código de menu e texto quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
        <div className="body_menu">
            <div className="codigo">
                <span>1</span>
            </div>
            <div className="text">
                Buscar por CNPJ ou empresa
            </div>
        </div>)).toEqual(true);
    });

    it('Possui icone (flexa) quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
        <span className='icon'>
             <Icon tag="icon-arrow-right" size='1x'/>
        </span>)).toEqual(true);
    });

    it('Possui icone (check-circle) quando iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
            <span className="icon_cnpj">
            <Icon tag="icon-check-circle" size='sm'/>
        </span>)).toEqual(true);
    });

    it('Possui Link correto para validar CNPJ iniciado', () => {
        wrapper.setState({ started: true });
        expect(wrapper.contains(
        <div className="button_footer" onClick={this.CNPJsearch} color='white' background='rgb(50, 204, 204)'>
            <span className='ok'>
                OK
            </span>
            <span className='icon'>
                <Icon tag="icon-arrow-right" size='1x'/>
            </span>
        </div>)).toEqual(true);
    });
});

 