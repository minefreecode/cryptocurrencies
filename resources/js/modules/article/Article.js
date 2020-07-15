import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'

/**
 * Модель для статей
 */
class Article extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.slug = props.slug || ''
    this.title = props.title || ''
    this.description = props.description || ''
    this.content = props.content || ''
    this.published = props.published || false
    this.publishedAt = props.publishedAt ? moment(props.publishedAt) : null
    this.selectedFile = props.selectedFile || '' //Добавляем файл

    // связываем пользователя
    this.user = props.user ? new User(props.user) : null
  }
}

export default Article
