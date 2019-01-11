module.exports = {
    development: {
      client: 'postgresql',
      //connection: 'postgress://postgres:postgres@localhost:5432/postgres'
      connection:'postgres://uxgnowcytrdkho:4f8970a644807d8fd4924067957ee48afa462a64fbbaf3e2be2682fcbfc6bdc2@ec2-107-22-162-8.compute-1.amazonaws.com:5432/d6movgca2u150p'

    },
    production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL + '?ssl=true'
    }  
  };