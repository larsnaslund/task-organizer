import './assets/App.css';
import './assets/Responsive.css';
import './assets/CommonUI.css';
import { TaskProvider } from './TaskContext';
import Dashboard from './screens/Dashboard';

function App() {

    return <TaskProvider>
        {/* TODO router if more pages */}
        <Dashboard />
    </TaskProvider>;
}

export default App;
