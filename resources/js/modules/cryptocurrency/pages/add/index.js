import { connect } from 'react-redux'
import Cryptocurrency from '../../Article'

// Импортируем страницу добавления
import Page from './Page'

/**
 * Данная функция используется только для создания модели
 * @returns {{article: Cryptocurrency}}
 */
const mapStateToProps = () => {
  const article = new Cryptocurrency({})
  return {
    article
  }
}

export default connect(mapStateToProps)(Page)
