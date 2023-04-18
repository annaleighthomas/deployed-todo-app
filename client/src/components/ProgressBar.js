const ProgressBar = ({ progress }) => {
  const colors = [
    'rgb(100, 134, 222)',
    'rgb(220, 100, 222)',
    'rgb(135, 235, 124)',
    'rgb(237, 242, 136)',
    'rgb(245, 144, 108)',
    'rgb(235, 127, 213)'
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div className='outer-bar'>
      <div 
        className='inner-bar'
        style={{ width: `${progress}%`, backgroundColor: randomColor }}  
      ></div>
    </div>
  );
}
  
  export default ProgressBar;