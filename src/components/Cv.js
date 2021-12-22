const CvPdf = () => {
  return (
    <article className='cv'>
      <nav>
        <a
          className=' cv__download'
          href='https://drive.google.com/file/d/1jV2FvskQwakvqXAcDMf10qmOJVGxfkak/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
          title='CV en PDF'
        >
          <h3 className='cv__title'>Curriculum</h3>
          <i className='fas fa-download'></i>{' '}
        </a>
      </nav>
    </article>
  );
};
export default CvPdf;
