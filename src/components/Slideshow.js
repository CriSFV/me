import '../styles/Slideshow.scss';
import project1 from '../images/project4.png';

export function Slideshow(props) {
  console.log(props);
  return (
    <div className='slideshow-container'>
      <div className='mySlides'>
        <div className='numbertext'>1/3</div>
        <img className='img' src={project1} alt='img' />
        <div className='text'>
          Web responsive creada con React con llamada a API externa
        </div>
      </div>
    </div>
  );
}
