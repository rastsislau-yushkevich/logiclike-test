import '../styles/Courses.scss';
import Course from './Course';
import { CourseType, CoursesGridProps } from '../types/Course';
import { FC, useContext, useMemo } from 'react';
import { TabContext } from '../App';

const filterCourses = (courses: CourseType[], active: string) =>
  courses.filter((course: any) =>
    active === 'Все темы' ? course : course.tags.includes(active)
  );

const CoursesGrid: FC<CoursesGridProps> = ({ courses }: CoursesGridProps) => {
  const { active } = useContext(TabContext);

  const activeTabCourses = useMemo(
    () => filterCourses(courses, active),
    [active, courses]
  );
  return (
    <main className='courses'>
      {activeTabCourses.map(({ name, id, image, bgColor }: CourseType) => (
        <Course
          key={id}
          name={name}
          image={image}
          bgColor={bgColor}
        />
      ))}
    </main>
  );
};

export default CoursesGrid;
