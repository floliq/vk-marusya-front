import './App.scss';
import { Counter } from './features/counter/Counter';
import { Quotes } from './features/quotes/Quotes';
import logo from './logo.svg';

export const App = () => (
  <div className='app'>
    <header className='app-header'>
      <img src={logo} className='app-logo' alt='logo' />
      <Counter />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Quotes />
      <span>
        <span>Learn </span>
        <a
          className='app-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          React
        </a>
        <span>, </span>
        <a
          className='app-link'
          href='https://redux.js.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Redux
        </a>
        <span>, </span>
        <a
          className='app-link'
          href='https://redux-toolkit.js.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Redux Toolkit
        </a>
        <span>, </span>
        <a
          className='app-link'
          href='https://react-redux.js.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Redux
        </a>
        ,<span> and </span>
        <a
          className='app-link'
          href='https://reselect.js.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Reselect
        </a>
      </span>
    </header>
  </div>
);
