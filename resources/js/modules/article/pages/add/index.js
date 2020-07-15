import { connect } from 'react-redux'
import Article from '../../Article'

// Импортируем страницу добавления
import Page from './Page'

/**
 * Данная функция используется только для создания модели
 * @returns {{article: Article}}
 */
const mapStateToProps = () => {
  const article = new Article({})
  return {
    article
  }
}

export default connect(mapStateToProps)(Page)
