export const ProjectsFilter = (props) => {
  const optionValue = (ev) => {
    props.handleSearch(ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor='projects' className='filter__project'>
        {' '}
        <select
          className='filter__projects__select tags'
          name='projects'
          id='projects'
          value={props.userSearch}
          onChange={optionValue}
        >
          <option value='all'>Todos</option>
          <option value='HTML5'>HTML5</option>
          <option value='CSS3'>CSS3</option>
          <option value='SASS'>SASS</option>
          <option value='JAVASCRIPT'>JavaScript</option>
          <option value='REACT'>ReactJS</option>
          <option value='NODEJS'>NodeJS</option>
        </select>
      </label>
    </>
  );
};
