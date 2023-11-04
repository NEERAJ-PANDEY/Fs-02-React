import './App.css';
import Card from './Component/Card';

function App() {
  const style = {
    marginLeft: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: '80%',
    width: '80%'
  }
  const cards = [{
    name: 'Pink',
    color: '#E29587',
    code: '#E29587'
  },
  {
    name: 'Orange',
    color: 'orange',
    code: '#FF7F50'
  },
  {
    name: 'Cyan',
    color: 'cyan',
    code: '#40E0D0'
  },
  {
    name: 'Gray',
    color: 'gray',
    code: '#CCCCFF'
  },
  {
    name: 'Yellow',
    color: 'yellow',
    code: '#DFFF00'
  },
  {
    name: 'Purple',
    color: 'purple',
    code: '#800080'
  },
  {
    name: 'Green',
    color: 'green',
    code: '#008000'
  },
  {
    name: 'Teal',
    color: 'teal',
    code: '#FF00FF	'
  },
  {
    name: 'Fuchsia',
    color: 'fuchsia',
    code: '#008080'
  },
  {
    name: 'Aqua',
    color: 'aqua',
    code: '#00FFFF'
  }
  ];


  return (
    <div className="App" style={style}>{
      cards.map((card) => (
        <Card {...card} />
      ))
    }
      {/* <Card card={cardPink} />
//       <Card card={grayCard} />
//       <Card card={cyanCard} />
//       <Card card={orangeCard} />
//       <Card card={yellowCard} />
//       <Card card={greenCard} />
//       <Card card={purpleCard} />
//       <Card card={tealCard} />
//       <Card card={fuchsiaCard} />
//       <Card card={aquaCard} /> */}
    </div>
  );
}

export default App;

