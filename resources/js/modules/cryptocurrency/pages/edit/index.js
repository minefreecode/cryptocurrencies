import { connect } from 'react-redux'
import Cryptocurrency from '../../Cryptocurrency'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  let cryptocurrencies = Object.values(state.cryptocurrencies)
  const cryptocurrency = cryptocurrencies.find(cryptocurrency => cryptocurrency.id === Number(params.id))
  return {
    cryptocurrency: cryptocurrency ? new Cryptocurrency(cryptocurrency) : new Cryptocurrency({})
  }
}

export default connect(mapStateToProps)(Page)
