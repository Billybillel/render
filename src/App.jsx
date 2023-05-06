import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './app/slice/counterSlice'

export function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
         <button
          aria-label="incrementByAmount value"
          onClick={() => dispatch({type:incrementByAmount(),payload:100})}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  )
}