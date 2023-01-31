// import ShoppingList from './components/ShoppingList';
import EditExercice from './components/EditExercice';
import ExercicesList from './components/ExercicesList';
import CreateExercice from './components/CreateExercice';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<ExercicesList />}></Route>
          <Route path="/edit:id" element={<EditExercice />}></Route>
          <Route path="/create" exact element={<CreateExercice />}></Route>
          <Route path="/user" exact element={<CreateUser />}></Route>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
