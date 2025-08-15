import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const addBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const markedAsReadHandler = time => {
    setReadingTime(readingTime + parseInt(time))
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex mx-auto container justify-between'>
        <Blogs
        addBookmark={addBookmark}
        markedAsReadHandler={markedAsReadHandler}
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
      </div>
      
    </div>
  )
}

export default App
