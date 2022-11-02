import React from 'react';
import {QuizProvider} from "./contexts/quiz";
import Container from "./components/Container";

function App() {
    return (
        <React.StrictMode>
            <QuizProvider>
                <Container/>
            </QuizProvider>
        </React.StrictMode>
    );
}

export default App;
