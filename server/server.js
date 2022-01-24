const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const axios = require('axios');
const cors = require('cors');
const app = express();
const schema = buildSchema(`
    type Employee {
        id : ID
        name : String
        place : String
        email : String
    }
    type Query {
        getEmployees : [Employee]
        getEmployee(id : ID) : Employee
    } 
    type Mutation {
        createEmployee(name : String! , place : String! , email : String) : Employee!
        deleteEmployee(id : ID) : Employee
    }
`);
const root = {
    getEmployees : async () => {
        const result = await axios.get('http://localhost:3003/employees');
        const data = result.data
        return data
    },
    getEmployee : async ({id}) => {
        const result = await axios.get(`http://localhost:3003/employees/${id}`);
        const data = result.data
        return data
    },
    createEmployee : async (args) => {
        const result = await axios.post('http://localhost:3003/employees' , {
            name : args.name ,
            place : args.place,
            email : args.email
        })
        const data = result.data
        return data
    },
    deleteEmployee : async ({id}) => {
        const result = await axios.delete(`http://localhost:3003/employees/${id}`)
        const data = result.data
        return data
    }
};
app.use(
    cors({
        optionsSuccessStatus: 200, //option sucess status
        origin: "http://localhost:3000", //origin allowed to access the server
    })
);

app.use('/graphql' , graphqlHTTP({
    graphiql : true , 
    schema : schema , 
    rootValue : root
}));

app.listen(4000 , () => console.log('Server listening on port 4000'));