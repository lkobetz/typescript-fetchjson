// to compile: tsc index.ts (tsc = typescript compiler)
// this generates index.js in same directory
// then you can run node index.js to get the result of this file
// you can combine the two commands above with ts-node index.ts, which compiles the ts file and returns the result

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((response) => {
  console.log(response.data)
})
