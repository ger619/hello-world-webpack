import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Greetings } from './components/Greetings';

function App() {
    return (
        <Router>
            <h1>My App</h1>
            <Routes>
                <Route path="/" element={<Greetings/>}/>
            </Routes>
        </Router>
    );
}
export default App;
