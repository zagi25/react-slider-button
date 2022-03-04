import { useRef, useState } from 'react';

const SliderButton = (props) => {
  const circleRef = useRef(null);
  const [clicked, setClicked] = useState(false);


  const clickSlider = () => {
    setClicked(!clicked);
    // props.clickOnSlider();
    !clicked ? 
      circleRef.current.style.left = (props.size - parseFloat(circleRef.current.style.width) - (!props.inner ? - 0.1 : 0.3)) + 'rem'
      :
      circleRef.current.style.left = (0 + (!props.inner ? -0.1 : 0.3)) + 'rem'

  };

  const hoverSliderIn = () => {
    circleRef.current.style.background = props.hover;
  };

  const hoverSliderOut = () => {
    circleRef.current.style.background = props.circleColor;
  };

  const slideBtn = {
    display: 'flex',
    alignItems: 'center',
  };

  const slideContainer = {
    width: props.size + 'rem',
    height: props.size / 2 + 'rem',
    background: props.background,
    borderRadius: props.size / 3 + 'rem',
    position: 'relative',
    boxShadow: 'inset 0 0 3px #cccccc',
  };

  const slideCircle = {
    width: (props.size / 2 + (props.size * !props.inner ? 0.15 : -0.5)) + 'rem',
    height: (props.size / 2 + (props.size * !props.inner ? 0.15 : -0.5)) + 'rem',
    borderRadius: '50%',
    background: props.circleColor,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: (props.size * !props.inner ? -0.08 : 0.3) + 'rem',
    transition: 'left 0.2s linear',
    cursor: 'pointer',
  };

  return(
    <div style = { slideBtn }>
      <div style = { slideContainer }>
        <div 
          id = 'slide'
          ref = { circleRef } 
          style = { slideCircle }
          onClick = { clickSlider }
          onMouseEnter = { hoverSliderIn }
          onMouseOut = { hoverSliderOut }
        >
        </div>
      </div>
    </div>
  );
}

const click = () => {
  //pass
}

SliderButton2.defaultProps = {
  size : 5,
  background: '#e8e8e8',
  inner: true,
  circleColor: '#999999',
  hover: '#757575',
  clickOnSlider: click,
}

export default SliderButton;
