
import { connectToDatabase } from '@/app/configs/mongodb'
import React from 'react'

const MongoDbTest = ({ isConnected }) => {
    return (
        <div>
            { isConnected ? "connected" : "not connected" }
        </div>
    )
}

export default MongoDbTest


export const getServerSideProps = async (ctx) => {
let isConnected;

const  { db } = await connectToDatabase()
isConnected = true;

const TodosCollection = process.env.TODOS_COLLECTION
const TodosData = await db.collection(TodosCollection).find({}).toArray();

return {
props: {
isConnected,
todos: JSON.parse(JSON.stringify(TodosData))
}
}
}