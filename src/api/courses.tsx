import { CourseType } from "../types/Course";

export const getCourses = async () => {
    const res = await fetch('https://logiclike.com/docs/courses.json');
    const data = await res.json();
    return data
}

export const getTopics = async (): Promise<string[]> => {
    const res = await fetch('https://logiclike.com/docs/courses.json');
    const data = await res.json();
    const topics = data.reduce((acc: string[], curr: any) => acc.concat(curr.tags) , [])
    topics.unshift('Все темы')
    return Array.from(new Set(topics))
}