export type CourseType = {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
};

export type CoursesGridProps = {
  courses: CourseType[]
}
