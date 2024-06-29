import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"


function App() {
  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state)=> state.counter)
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='flex border border-purple-400 rounded-md bg-slate-50 p-10'>
      <button onClick={()=> dispatch(increment())} className='px-3 py-2 rounded-md bg-green-600 text-xl font-semibold'>increment</button>
      <button onClick={()=> dispatch(incrementByValue(5))} className='px-3 py-2 rounded-md bg-green-600 text-xl font-semibold'>increment 5</button>
      <h1 className='text-3xl mx-10'>{count}</h1>
      <button onClick={()=> dispatch(decrement())} className='px-3 py-2 rounded-md bg-red-600 text-xl font-semibold'>decrement</button>
      </div>
    </div>
  )
}

export default App
