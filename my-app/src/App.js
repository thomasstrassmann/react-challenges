import css from './App.module.css';
// import Content from './components/Content';
// import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import ContentHooks from './components/ContentHooks';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <ContentHooks/>
    </div>
  );
}

export default App;