const dev = {
  context: 'http://localhost:3001/'
}

const prod = {
  context: 'ec2-52-15-210-2.us-east-2.compute.amazonaws.com:3001/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev