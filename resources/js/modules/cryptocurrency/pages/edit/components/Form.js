import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const CryptocurrencyImage = styled.img`
   width: 50px;
   height: 50px;
`;

const displayName = 'CryptocurrencyFrom'
const propTypes = {
    cryptocurrency: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fileSelectChange: PropTypes.func.isRequired,
}

const Form = ({cryptocurrency, errors, onChange, onSubmit, fileSelectChange}) => {

    function handleChange(name, value) {
        if (value !== cryptocurrency[name]) {
            onChange(name, value)
        }
    }

    return <form onSubmit={e => onSubmit(e)}>
        <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Название</label>
            <div className="col-sm-10">
                <input type="text"
                       id="name"
                       name="name"
                       className={`form-control ${errors.has('name') && 'is-invalid'}`}
                       placeholder="Title"
                       value={cryptocurrency.name || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)} />
                {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="symbol" className="col-sm-2 col-form-label">Описание</label>
            <div className="col-sm-10">
        <textarea id="symbol"
                  name="symbol"
                  className={`form-control ${errors.has('symbol') && 'is-invalid'}`}
                  rows="3"
                  placeholder="Description"
                  value={cryptocurrency.symbol}
                  onChange={e => handleChange(e.target.name, e.target.value)} />
                {errors.has('symbol') && <div className="invalid-feedback">{errors.first('symbol')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="description" className="col-sm-2 col-form-label">Описание</label>
            <div className="col-sm-10">
        <textarea id="description"
                  name="description"
                  className={`form-control ${errors.has('description') && 'is-invalid'}`}
                  rows="3"
                  placeholder="Description"
                  value={cryptocurrency.description}
                  onChange={e => handleChange(e.target.name, e.target.value)} />
                {errors.has('description') && <div className="invalid-feedback">{errors.first('description')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="file" className="col-sm-2 col-form-label">Файл</label>
            {cryptocurrency.imageUrl != '' ? <CryptocurrencyImage src={cryptocurrency.imageUrl}/> : ''}
        </div>
        <div className="form-group row">
            <div className="col-sm-10">
                <input type="file" onChange={fileSelectChange}/>
                {errors.has('file') && <div className="invalid-feedback">{errors.first('file')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-10 ml-auto">
                <button disabled={errors.any()} type="submit" className="btn btn-primary">Обновить</button>
            </div>
        </div>
    </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
