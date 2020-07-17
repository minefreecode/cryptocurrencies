import { connect } from 'react-redux'
import Cryptocurrency from '../../Article'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const article = state.articles.data.find(article => article.id === Number(params.id))
  return {
    article: article ? new Cryptocurrency(article) : new Cryptocurrency({})
  }
}

export default connect(mapStateToProps)(Page)
