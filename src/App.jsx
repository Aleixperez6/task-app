import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
    <div className="container mx-auto max-w-lg px-4 pb-20">
      <TodoList />
    </div>
    <div>
      <h3 className='text-black font-semibold text-center pb-10'>made with 🖤 from <a href="http://aleix-dev.com/">@aleixdev</a>  </h3>
    </div>
    </>
  );
}

export default App;
