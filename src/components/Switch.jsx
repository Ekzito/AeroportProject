import React, { Component } from 'react';
import './Switch.css';

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }   
    }


    handleClickDeparting() {
        this.props.showDeparting();
    }

    handleClickArriving() {
        this.props.showArriving();
    }

    handleClickDetained() {
        this.props.showDetained();
    }

    handleClickAll() {
        this.props.showAll();
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let value = this.state.value;
        value = +value;
        this.props.search(value);

    }

    handleChange(event) {
      let value = event.target.value;
      this.setState({value});
    }

    render() {
        return(
            <div className='Switch'>
              <div className='Switch__toggle__container'>
                <button className='Switch__toggle__button' onClick={() => this.handleClickAll()}>Все рейсы</button>
                <button className='Switch__toggle__button' onClick={() => this.handleClickDeparting()}>Вылетающие рейсы</button>
                <button className='Switch__toggle__button' onClick={() => this.handleClickArriving()}>Прилетающие рейсы</button>
                <button className='Switch__toggle__button' onClick={() => this.handleClickDetained()}>Задержанные рейсы</button>
              </div>
              <form className='Switch__toggle__form' onSubmit={(event) => this.handleSubmit(event)}>
                <input value={this.state.value} onChange={(event) => this.handleChange(event)} className='Switch__toggle__input' type='text' placeholder='Поиск по номеру рейса'></input>
                <button className='Switch__toggle__form__buttom' type='submit'>Искать</button>
              </form>
            </div>
        )
    }
}

export default Switch;