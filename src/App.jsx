import './App.css';
import China from './components/China/China';
import Cursor from './components/Cursor/Cursor';
import MainPage from './components/MainPage/MainPage';
import Test from './components/Test/Test';

function App() {

  return (
    <>
      <Cursor />
      <main>
        <China/>
        {/* <Test/> */}
        {/* <MainPage /> */}
      </main>
    </>
  )
}

export default App
