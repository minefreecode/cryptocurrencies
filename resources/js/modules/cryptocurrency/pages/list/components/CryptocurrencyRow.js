import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const CryptocurrencyImage = styled.img`
   width: 30px;
   height: 30px;
`;

const displayName = 'CryptocurrencyRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  cryptocurrency: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const CryptocurrencyRow = ({ index, cryptocurrency, togglePublish, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{cryptocurrency.imageUrl != ''? <CryptocurrencyImage src={cryptocurrency.imageUrl}/>: ''}</td>
    <td>{cryptocurrency.title}</td>
    <td>{cryptocurrency.symbol}</td>
    <td>{cryptocurrency.description}</td>
    <td>
      <div className="btn-group" role="group" aria-label="Actions">
        <Link className="btn btn-primary" to={`cryptocurrenciss/${cryptocurrency.id}/edit`}>Редактировать</Link>
        <button className="btn btn-danger" onClick={() => handleRemove(cryptocurrency.id)}>Удалить</button>
      </div>
    </td>
  </tr>)
}

CryptocurrencyRow.displayName = displayName
CryptocurrencyRow.propTypes = propTypes

export default CryptocurrencyRow
