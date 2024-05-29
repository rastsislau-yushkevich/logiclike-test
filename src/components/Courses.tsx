import '../styles/Courses.scss';
import { useQuery } from 'react-query';
import { getCourses } from '../api/courses';
import { FC } from 'react';
import CoursesGrid from './CoursesGrid';

const Courses: FC = () => {
  const { data, isLoading, isError } = useQuery('courses', getCourses);

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error</h1>;

  return (
    <main className='courses'>
      <CoursesGrid courses={data} />
    </main>
  );
};

export default Courses;
