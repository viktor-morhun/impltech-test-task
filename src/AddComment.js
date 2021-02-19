import React, {useState} from 'react';

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}


export default function AddComment({onCreate}) {
  const input = useInputValue('');

  function submitHandler(event) {
    event.preventDefault();
    
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="comment" {...input.bind}/>
      <button type="submit">Submit</button>
    </form>
  );
}