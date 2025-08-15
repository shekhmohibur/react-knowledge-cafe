import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
function App() {
  return (
    <>
      <h1 className='text-3xl text-blue-500 text-center'>Knowledge Cafe</h1>
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
