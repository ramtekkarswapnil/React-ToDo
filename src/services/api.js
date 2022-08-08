export const getAllToDo = async()=> {


    const response = await fetch('https://hgg7a930zi.execute-api.us-east-2.amazonaws.com/Stage/todos',{
        Method: 'GET',
        Headers: {
          'Content-Type': 'application/json'
        }
        
      })
    .then(res => res.json())
    .then((data) => {
        return data.Items;
    })
    .catch(console.log);


    console.log("Respone=>",response)

    return response;
}

export const addToDo = async(val)=> {

  console.log("new Val=>",val);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({todo: val})
  };

  const response = await fetch('https://hgg7a930zi.execute-api.us-east-2.amazonaws.com/Stage/todos'
  ,requestOptions)
  .then(res => {
    if(res.ok)
      return res;
    else{
      throw new Error(response)
    }})
  .catch(console.log);


  console.log("POST Respone=>",response);
}


    // return [
    //     {
    //         id: 1,
    //         text: 'Learn Javascript',
    //         completed: false
    //     },
    //     {
    //         id: 2,
    //         text: 'Learn React',
    //         completed: false
    //     },
    //     {
    //         id: 3,
    //         text: 'Build a React App',
    //         completed: false
    //     }
    // ]
