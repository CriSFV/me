const CvPdf = () => {
  return (
    <article id='cv' className='cv'>
      <h3 className='cv__title'>CV</h3>
      <a
        className='cv__download'
        href='https://drive.google.com/file/d/1lB7RCwTI4ZnGNn_1OKQAL8ra4UilWFGV/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        title='CV en PDF'
      >
        {' '}
        Descargar <i className='fas fa-download'></i>
      </a>
    </article>
  );
};
export default CvPdf;
