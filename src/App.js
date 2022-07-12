import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const [hasHovered, setHasHovered] = useState(false);
  const [top, setTop] = useState('0');
  const [left, setLeft] = useState('0');

  const appStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const appStyleAfterHover = {
    display: 'block',
  };

  const buttonStyle = {
    position: 'absolute',
    top: `${top}vh`,
    left,
  }

  const onHover = () => {
    var height = 95;
    var width = window.innerWidth - 40;

    if (!hasHovered) {
      setHasHovered(!hasHovered);
    }
    setTop(Math.floor(Math.random() * height).toString())
    setLeft(Math.floor(Math.random() * width))
  }

  return (
    <div
      style={hasHovered ? appStyleAfterHover : appStyle}
      className="App"
    >
      <Button
        className='button'
        style={hasHovered ? buttonStyle : null}
        variant='light'
        size='sm'
        onMouseEnter={() => onHover()}
        onClick={() => console.log('omg')}
      >
        Click to Enter
      </Button>
    </div>
  );
}

export default App;