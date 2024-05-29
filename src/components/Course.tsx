import { ReactElement } from 'react';
import '../styles/Course.scss'
import { CourseType } from '../types/Course';

const Course = ({name, image, bgColor}: Pick<CourseType, 'name' | 'image' | 'bgColor'>): ReactElement => {
    return(
        <div className='course'>
            <div className='course-img' style={{backgroundColor: bgColor}}>
                <img src={image} alt="Item image" />
            </div>
            <p className='course-name'>{name}</p>
        </div>
    )
}

export default Course;