import { QuestionProvider } from './context/questionContext';
import Home from './pages/Home';
function App() {
  return (
    <QuestionProvider>
      <Home />
    </QuestionProvider>
  );
}

export default App;
