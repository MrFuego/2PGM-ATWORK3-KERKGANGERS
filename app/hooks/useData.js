import React, {useEffect, useReducer } from 'react';

const reducer = (state, action)=>{
  switch (action.type) {
    case 'idle':
      return { status: 'idle',data: undefined, error: undefined,}
    case 'loading':
      return { status: 'loading',data: undefined, error: undefined,}
    case 'success':
      return { status: 'success',data: action.payload, error: undefined,}
    case 'error':
      return { status: 'error',data: undefined, error: action.payload,}
    default:
      throw new Error('invalid action');
      break;
  }
}

export const useData = ()=>{
  const initialState = {
    status: 'idle',data: undefined, error: undefined,
  }

  const [
    state, dispatch
  ] = useReducer(reducer, initialState)

  const fetchData = () => {
    fetch('https://api.airtable.com/v0/appAEVbXaAREzjeRr/Table%201?api_key=keyQSuOk7cheTM4ji')
      .then((response) => response.json())
      .then((data) => {
        dispatch({type:'success', payload:data.records})
      })
      .catch((error) => dispatch({type:'error', payload:error}))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const refetch = fetchData;

  return{state, refetch}
}