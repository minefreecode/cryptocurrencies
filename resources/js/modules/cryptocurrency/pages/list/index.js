// Импортировать библиотеки
import { connect } from 'react-redux'
import Cryptocurrency from '../../Cryptocurrency'

// Испортироваь компонент
import Page from './Page'

/**
 * Обновляем свойства компонента при обновлении хранилища
 * @param state
 * @returns {{meta: *, cryptocurrencies: *}}
 */
const mapStateToProps = state => {
  const {data, ...meta} = state.cryptocurrencies
  
  return {
    cryptocurrencies: data.map((cryptocurrency) => new Cryptocurrency(cryptocurrency)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
