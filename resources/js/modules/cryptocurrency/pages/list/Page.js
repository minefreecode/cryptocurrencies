// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { articleListRequest, articleUpdateRequest, articleRemoveRequest } from '../../service'

// import components
import CryptocurrencyRow from './components/ArticleRow'
import { Link } from 'react-router-dom'

class Page extends Component {
  static displayName = 'CryptocurrencyPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    cryptocurrency: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('moeen')
    const { dispatch } = this.props

    dispatch(articleListRequest({}))
  }


  togglePublish = (id) => {
    const cryptocurrency = this.props.cryptocurrencies.find(cryptocurrency => (cryptocurrency.id === id))

    if (!cryptocurrency)
      return


    this.props.dispatch(cryptocurrencyUpdateRequest(cryptocurrency.toJson()))
  }

  handleRemove = (id) => {
    this.props.dispatch(cryptocurrencyRemoveRequest(id))
  }

  renderArticles() {
    return this.props.cryptocurrencies.map((cryptocurrency, index) => {
      return <CryptocurrencyRow key={index}
                                article={cryptocurrency}
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
        { this.renderArticles() }
        </tbody>
      </table>
      </main>
  }
}

export default Page

