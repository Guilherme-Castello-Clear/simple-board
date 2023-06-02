import Board from '../components/Board'
import Button from '../components/Button';
import Player from "../components/Player";

const step = 50;
function App() {
  return (
    <>
      <Board>
        <Player></Player>
      </Board>
      <Button step={step} direction="Up"></Button>
      <Button step={step} direction="Down"></Button>
      <Button step={step} direction="Right"></Button>
      <Button step={step} direction="Left"></Button>
    </>
  );
}

export default App;
