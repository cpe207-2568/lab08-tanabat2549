import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Taskcard from './components/Task';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName='thanabat' type='student'></Sidebar>
        
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput></TaskInput>  
            {/* Card รายการ */}
              <Taskcard id={1} title="Read a book" description='Vite + React + Bootstrap + TS' isDone={true}></Taskcard>
              <Taskcard id={2} title="Write code" description='Finish project for class' isDone={false}></Taskcard>
              <Taskcard id={3} title="Deploy app" description='Push project to GitHub Pages' isDone={false}></Taskcard>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName = "Thanabat Kangwankrai" studentId = "670612121"></Footer>
    </div>
  );
}

export default App;
