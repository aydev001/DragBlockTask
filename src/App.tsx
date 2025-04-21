import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
  const {statusBlocks} = useSelector((state: RootState)  => state.statusBlock)
  console.log(statusBlocks)
  return (
    <div className='h-[100vh] bg-gray-100 p-[5px]'>
      <Header/>
      <Content>
        Content
      </Content>
    </div>
  )
}

export default App
