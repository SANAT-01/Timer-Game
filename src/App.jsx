import Player from './components/Player.jsx';
import TimmerChallenge from './components/TimmerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimmerChallenge title="Easy" targetTime={1}/>
        <TimmerChallenge title="Moderate" targetTime={2 }/>
        <TimmerChallenge title="Hard" targetTime={5}/>
        <TimmerChallenge title="Pro" targetTime={10}/>
      </div>
    </>
  );
}

export default App;
