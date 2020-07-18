import { connect } from 'react-redux'
import Cryptocurrency from '../../Cryptocurrency'

// Импортируем страницу добавления
import Page from './Page'

/**
 * Данная функция используется только для создания модели
 * @returns {{article: Cryptocurrency}}
 */
const mapStateToProps = () => {
  const cryptocurrency = new Cryptocurrency({})
  return {
    cryptocurrency
  }
}

export default connect(mapStateToProps)(Page)
