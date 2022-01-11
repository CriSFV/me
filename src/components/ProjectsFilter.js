export const ProjectsFilter = (props) => {
  const optionValue = (ev) => {
    props.handleSearch(ev.currentTarget.value);
    console.log(ev.target.value);
  };
  return (
    <>
      <label htmlFor='projects' className='filter__project'>
        ¿Quieres ver algo en particular?:{' '}
      </label>
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
        <option value='JS'>JavaScript</option>
        <option value='ReactJS'>ReactJS</option>
        <option value='NodeJS'>NodeJS</option>
      </select>
    </>
  );
};
