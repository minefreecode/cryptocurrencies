// Импортировать библиотеки
import { connect } from 'react-redux'
import Cryptocurrency from '../../Cryptocurrency'

// Испортироваь компонент
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.cryptocurrencies
  
  return {
    articles: data.map((cryptocurrency) => new Cryptocurrency(cryptocurrency)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
