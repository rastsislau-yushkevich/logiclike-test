import { useQuery } from 'react-query';
import '../styles/Tabs.scss';
import { getTopics } from '../api/courses';
import { FC, useContext } from 'react';
import { TabContext } from '../App';

const Tabs: FC = () => {
  const { active, setActive } = useContext(TabContext);

  const { data, isLoading, isError } = useQuery('topics', getTopics);

  if (isLoading) return <h1>Загрузка...</h1>;

  if (isError) return <h1>Ошибка...</h1>;

  const handleClick = (e: any) => {
    setActive(e.target.innerHTML);
  };

  return (
    <aside className='tabs'>
      <ul>
        {data?.map((topic: string) => (
          <li
            key={topic}
            className={`tabBtn ${active === topic ? 'active' : ''}`}
          >
            <button onClick={handleClick}>{topic}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Tabs;
