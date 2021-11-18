import '../styles/Contact.scss';

const ContactMe = () => {
  return (
    <>
      <section className='contact'>
        <h2 className='contact__title'>Contacto</h2>
        <ul className='contact__list'>
          <li className='contact__list__item'>
            <a
              href='https://github.com/CriSFV'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github' title='Go to my Github'></i>
            </a>
          </li>
          <li className='contact__list__item'>
            <a
              href='https://www.linkedin.com/in/crisfvalverde/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin-in' title='Go to my LinkedIn'></i>{' '}
            </a>
          </li>
          <li className='contact__list__item'>
            <a
              href='https://twitter.com/Krais_me'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-twitter' title='Go to my twitter'></i>{' '}
            </a>
          </li>
        </ul>
        <form
          action='https://formspree.io/f/mleayywn'
          method='POST'
          className='form'
          id='contact'
        >
          <label htmlFor='message'>
            <textarea
              id='menssage'
              name='message'
              rows='8'
              cols='30'
              placeholder='Escríbeme lo que quieras'
              className='item form__message'
              required
            ></textarea>
          </label>
          <input
            type='submit'
            className='form__botton'
            value='Envíame un mensaje'
          />
        </form>
      </section>
    </>
  );
};
export default ContactMe;
