// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { cryptocurrencyListRequest, cryptocurrencyUpdateRequest, cryptocurrencyRemoveRequest } from '../../service'

// import components
import CryptocurrencyRow from './components/CryptocurrencyRow'
import { Link } from 'react-router-dom'

class Page extends Component {
  static displayName = 'CryptocurrencyPage'
  static propTypes = {
    cryptocurrencies: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
  }

  //После монтирования компонента
  componentDidMount() {
    const { dispatch } = this.props

    //Загружаем в хранилище криптовалюты
    dispatch(cryptocurrencyListRequest({}))
  }


  handleRemove = (id) => {
    this.props.dispatch(cryptocurrencyRemoveRequest(id))
  }

  renderCryptocurrencies() {
    return this.props.cryptocurrencies.map((cryptocurrency, index) => {
      return <CryptocurrencyRow key={index}
                                cryptocurrency={cryptocurrency}
                                index={index}
                                togglePublish={this.togglePublish}
                                handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Статьи</h1>
      <table className="table table-responsive table-striped">
        <thead className="thead-inverse">
        <tr>
          <th>#</th>
          <th></th>
          <th>Title</th>
          <th>Symbol</th>
          <th>Description</th>
          <th><Link to='/cryptocurrencies/create' className="btn btn-success">Добавить</Link></th>
        </tr>
        </thead>
        <tbody>
        { this.renderCryptocurrencies() }
        </tbody>
      </table>
      </main>
  }
}

export default Page

