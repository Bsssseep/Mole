import { useState } from 'react';
import MoleContainer from './MoleContainer';

function App() {
    const [score, setScore] = useState(0);

    const createMoleHill = () => {
        const hills = [];
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                    key={i} // Assign a unique key to each MoleContainer
                    setScore={setScore}
                    score={score}
                />
            );
        }

        return (
            <div>
                {hills}
            </div>
        );
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    );
}

export default App;
