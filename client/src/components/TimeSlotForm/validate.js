const validate = values => {

    const errors = {}

    if (!values.firstName) {
      errors.firstName = '*Required'
    }

    if (!values.lastName) {
      errors.lastName = '*Required'
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = '*Required'
    } else if (isNaN(Number(values.phoneNumber))) {
      errors.phoneNumber = '*Invalid number'
    }

    return errors
}

export default validate;