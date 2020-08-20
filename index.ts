// to compile: tsc index.ts (tsc = typescript compiler)
// this generates index.js in same directory
// then you can run node index.js to get the result of this file
// you can combine the two commands above with ts-node index.ts, which compiles the ts file and returns the result

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response) => {
  const todo = response.data as Todo
  const id = todo.id
  const title = todo.title
  const completed = todo.completed
  console.log(`
    The id is ${id}
    The title is ${title}
    It is completed- ${completed}
  `)
})
