import React from 'react';

export const AddFormComponent =(props)=>{
  console.log(props)
  return(
    <div>
      <form>
        <input type='text'
          name='title'
          placeholder='Title'
          onChange={props.handleChange} />
        <input type='text'
          name='description'
          placeholder='Description'
          onChange={props.handleChange} />
          <button>Add Todo</button>
      </form>
      </div>
  )
}
