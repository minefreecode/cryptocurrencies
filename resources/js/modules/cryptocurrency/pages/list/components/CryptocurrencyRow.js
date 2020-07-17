import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const ArticleImage = styled.img`
   width: 30px;
   height: 30px;
`;

const displayName = 'ArticleRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const CryptocurrencyRow = ({ index, article, togglePublish, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{article.imageUrl != ''? <ArticleImage src={article.imageUrl}/>: ''}</td>
    <td>{article.title}</td>
    <td>{article.symbol}</td>
    <td>{article.description}</td>
    <td>
      <div className="btn-group" role="group" aria-label="Actions">
        <Link className="btn btn-primary" to={`articles/${article.id}/edit`}>Редактировать</Link>
        <button className="btn btn-danger" onClick={() => handleRemove(article.id)}>Удалить</button>
      </div>
    </td>
  </tr>)
}

CryptocurrencyRow.displayName = displayName
CryptocurrencyRow.propTypes = propTypes

export default CryptocurrencyRow
