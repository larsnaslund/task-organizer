import './assets/App.css';
import './assets/Responsive.css';
import { KanbanProvider } from './KanbanContext';
import Dashboard from './screens/Dashboard';

function App() {

    return <KanbanProvider>
        {/* TODO router if more pages */}
        <Dashboard />
    </KanbanProvider>;
}

export default App;
