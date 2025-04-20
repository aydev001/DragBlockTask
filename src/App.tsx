import { useSelector } from 'react-redux'
import { RootState } from './app/store'

const App = () => {
  const {orderCards} = useSelector((state: RootState)  => state.orderCard)
  console.log(orderCards)
  return (
    <div>
      Hello
    </div>
  )
}

export default App
