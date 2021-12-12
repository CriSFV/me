const CvPdf = () => {
  return (
    <article className='cv'>
      <a
        className=' cv__download'
        href='https://drive.google.com/file/d/1lB7RCwTI4ZnGNn_1OKQAL8ra4UilWFGV/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        title='CV en PDF'
      >
        <h3 className='cv__title'>Curriculum</h3>
        <i className='fas fa-download'></i>{' '}
      </a>
    </article>
  );
};
export default CvPdf;
