import SingleProject from '@/components/Project/SingleProject'
import FeatureProject from '@/components/Project/FeatureProject'
import EcommerceUser from '../../public/images/projects/E-commerce User.png'
import ECommerceAdmin from '../../public/images/projects/Auth.png'
import ECommerceBackEnd from '../../public/images/projects/E-comerce_BackEnd.png'
import Authentication from '../../public/images/projects/Auth.png'
import RealEstate from '../../public/images/projects/RealEstate.png'
import Readme from '../../public/images/projects/Readme.png'

const AllProjects = () => {
  return (
    <div className='flex justify-between gap-16 items-start flex-wrap flex-col'>
      <FeatureProject
        type='Website'
        title='Full Stack Real state'
        github='https://github.com/Omar-Sa6ry/Real-Estate-Full-Stack-'
        link='https://github.com/Omar-Sa6ry/Real-Estate-Full-Stack-'
        content='Modern MERN Stack Real Estate website by using React js, Tailwind, Node js, Express, MongoDB'
        img={RealEstate}
      />

      <FeatureProject
        type='E-commerce'
        title='E-commerce User Interface'
        github='https://github.com/Omar-Sa6ry/E-commerce-User-Interface'
        link='https://github.com/Omar-Sa6ry/E-commerce-User-Interface'
        content='E-commerce User Interface (Client Page) by using bootstrap & React.js'
        img={EcommerceUser}
      />

      <div className='between-center w-full gap-24 lg:gap-10 md:gap-20 lg:flex-col'>
        <SingleProject
          type='BackEnd'
          title='E-commerce BackEnd'
          link='https://github.com/Omar-Sa6ry/E-commerce-BackEnd'
          github='https://github.com/Omar-Sa6ry/E-commerce-BackEnd'
          img={ECommerceBackEnd}
        />

        <SingleProject
          type='Dashboard'
          title='E-commerce Admin Interface'
          link='https://github.com/Omar-Sa6ry/E-commerce-Admin-Interface'
          github='https://github.com/Omar-Sa6ry/E-commerce-Admin-Interface'
          img={ECommerceAdmin}
        />
      </div>

      <div className='between-center w-full gap-24 lg:gap-10 md:gap-20 lg:flex-col'>
        <SingleProject
          type='Authentication'
          title='Full Stack Authentication Page'
          link='https://github.com/Omar-Sa6ry/Full-Stack-Authentication'
          github='https://github.com/Omar-Sa6ry/Full-Stack-Authentication'
          img={Authentication}
        />

        <SingleProject
          type='ReadMme'
          title='Read Me for omar_sa6ry'
          link='https://github.com/Omar-Sa6ry/Omar-Sa6ry'
          github='https://github.com/Omar-Sa6ry/Omar-Sa6ry'
          img={Readme}
        />
      </div>
    </div>
  )
}

export default AllProjects
