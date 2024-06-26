import AnimateText from '../AnimateText'
import SingleSkill from './SingleSkill'

const Skills = () => {
  return (
    <div className='my-7'>
      <AnimateText text='Skills' className='my-5' />

      <div className='bg-circularLight dark:bg-circularDark rounded-full h-screen w-full flex-center relative mt-5 lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg dark:lg:bg-circularDarkLg sm:bg-circularLightSm dark:sm:bg-circularDarkSm md:bg-circularLightMd dark:md:bg-circularDarkMd'>
        <SingleSkill title='Web' x='0vw' y='0vw' />
        <SingleSkill title='HTML' x='-25vw' y='2vw' />
        <SingleSkill title='Css' x='-5vw' y='-10vw' />
        <SingleSkill title='Tailwind' x='20vw' y='6vw' />
        <SingleSkill title='Bootstrap' x='0vw' y='12vw' />
        <SingleSkill title='Js' x='-20vw' y='-15vw' />
        <SingleSkill title='ReactJS' x='15vw' y='-12vw' />
        <SingleSkill title='Nodejs' x='20vw' y='-5vw' />
        <SingleSkill title='NextJS' x='-0vw' y='-20vw' />
        <SingleSkill title='Express' x='-25vw' y='18vw' />
        <SingleSkill title='MongoDB' x='18vw' y='18vw' />
        <SingleSkill title='Python' x='-25vw' y='25vw' />
      </div>
    </div>
  )
}

export default Skills
