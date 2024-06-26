import {
  ProjectsCompleted,
  SatisfiedClients,
  Start,
  YearsOfExperience
} from '@/data/Constant'
import AboutImage from '../../../public/images/profile/About.jpg'
import Image from 'next/image'
import SpecialSpan from './SpecialSpan'

const start = Start
const currentYear = new Date()?.getFullYear()
const year = currentYear - start + 1

const Body = () => {
  return (
    <div className='between-center gap-2 lg:flex-col lg:gap-8'>
      <div className='center-wrap mr-10 gap-4 flex-col lg:order-2 w-1/3 lg:w-full'>
        <h2 className='text-primary dark:text-primaryDark w-full mb-1 font-bold uppercase text-xl text-left'>
          biography
        </h2>
        <p className='font-medium'>
          Hi, I'm{' '}
          <span className='text-dark dark:text-light font-bold'>
            Omar Sabry
          </span>
          , a web developer with a passion for creating beautiful, functional,
          and user-centered digital experiences. With{' '}
          {year === 1 ? 'one' : year}
          &nbsp;
          {year > 1 ? 'years' : 'year'} of experience in the field. I am always
          looking for new and innovative ways to bring my clients' visions to
          life.
        </p>

        <p className='font-medium'>
          I believe that design is about more than just making things look
          pretty – it's about solving problems and creating intuitive, enjoyable
          experiences for users.
        </p>

        <p className='font-medium'>
          Whether I'm working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion to your next project.
        </p>
      </div>

      <div className='w-1/3 lg:order-1 lg:my-8 lg:w-auto min-h-max p-6 border-2 border-dark dark:border-light border-solid relative dark:bg-dark bg-light rounded-2xl'>
        <div className='top-0 -right-3 absolute -z-10 w-[102%] h-[103%] bg-dark rounded-[2rem]'></div>
        <Image
          src={AboutImage}
          className='h-auto w-full rounded-2xl'
          alt='About Page'
          priority
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vh'
        />
      </div>

      <div className='w-1/4 lg:order-3 lg:flex-row lg:w-full flex-col gap-11 flex items-end justify-center flex-wrap'>
        <SpecialSpan title='Satisfied Clients' value={SatisfiedClients} />
        <SpecialSpan title='Projects Completed' value={ProjectsCompleted} />
        <SpecialSpan title='Years Of Experience' value={YearsOfExperience} />
      </div>
    </div>
  )
}

export default Body
