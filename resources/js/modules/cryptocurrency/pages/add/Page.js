// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { cryptocurrencyAddRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'AddCryptocurrency'
  static propTypes = {
    cryptocurrency: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate.Validator({
      name: 'required|min:3',
      symbol: 'required',
      description: 'required|min:10',
    })
    
    const cryptocurrency = this.props.cryptocurrency.toJson()
    
    this.state = {
      cryptocurrency,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.fileInputRef = React.createRef();
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const cryptocurrency = nextProps.cryptocurrency.toJson()
    
    if (!_.isEqual(this.state.cryptocurrency, cryptocurrency)) {
      this.setState({ cryptocurrency })
    }
    
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
  
    this.setState({ cryptocurrency: { ...this.state.cryptocurrency, [name]: value} })
  
    errors.remove(name)
  
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const cryptocurrency = this.state.cryptocurrency
    const { errors } = this.validator
    
    this.validator.validateAll(cryptocurrency)
      .then((success) => {
        if (success) {
          this.submit(cryptocurrency)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(cryptocurrency) {
    this.props.dispatch(cryptocurrencyAddRequest(cryptocurrency))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator
  
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }
  
        this.setState({ errors })
        return;
      })

    //редирект после добавления
    this.props.history.push("/cryptocurrencies");
  }

  //Для добавления файла
  fileSelect = event => {
    this.setState({ cryptocurrency: { ...this.state.cryptocurrency, ['selectedFile']: event.target.files[0]} })
    console.log(event.target.files[0])
  }

  render() {
    return <div className="col-sm-9 ml-sm-auto col-md-10 pt-3">
      <h1>Создать</h1>
      <Form {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            fileSelectChange={this.fileSelect}
      />
    </div>
  }
}

export default Page
