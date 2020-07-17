import Model from '../../utils/Model'
/**
 * Модель для справочника криптовалют
 */
class Cryptocurrency extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.title = props.title || ''
    this.description = props.description || ''
    this.symbol = props.symbol || ''
    this.imageUrl = props.imageUrl //Картинка
  }
}

export default Cryptocurrency
