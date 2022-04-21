import {GlobalStyle} from './styles/global'
import AppRoute from './router'
import {Header} from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoute/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
