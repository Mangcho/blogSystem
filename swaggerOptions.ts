export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'blogSystem',
      version: '0.0.1',
    },
  },
  apis: ['./src/routes*.ts'], // files containing annotations as above
}

