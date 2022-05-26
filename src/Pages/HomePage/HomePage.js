import React from 'react'
import Cirriculum from '../../Components/Cirriculum/Cirriculum'
import CourseCard from '../../Components/CourseCard/CourseCard'
import Carousel from '../../Components/Carousel/Carousel'

function HomePage() {
  return (
    <div>
      <Carousel />
      <Cirriculum />
      <CourseCard />
    </div>
  )
}

export default HomePage