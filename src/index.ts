import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { schema } from "./schema";
// import { createServer } from 'http'
const port = Number(process.env.API_PORT) || 4000
// const server = createServer({
//   port
// });
// 4
// server.start().then(() => {
//   console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
// });
const yoga = createYoga({ schema })
const server = createServer(yoga)
  
server.listen(port, () => {
    console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
})