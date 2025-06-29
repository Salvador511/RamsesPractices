class CustomError extends Error {
  constructor({ message, status }){
    super(message)
    this.status = status
  }
}

const ERROR = {
  INVALID_FIELDS: () => { throw new CustomError({ message: 'Campos inválidos', status: 400 }) },
  BAD_EMAIL: () => { throw new CustomError({ message: 'Error al enviar el correo', status: 400 }) },
  FORBIDDEN: () => { throw new CustomError({ message: 'No permitido', status: 403 }) },
  NOT_FOUND: () => { throw new CustomError({ message: 'No encontrado', status: 404 }) },
  EMAIL_ALREADY_EXISTS: () => { throw new CustomError({ message: 'El correo ya existe', status: 409 }) }
}

export default ERROR