import {content} from '../Content'

const Services = () => {
  const {services} = content;
  return <section>
    <div className='md:container px-5 py-14'>
      <h2 className='title'>{services.title}</h2>
      <h4 className='subtitle'>{services.subtitle}</h4>
      <br />
      <div className=''>
        {
          services.service_content.map((content, i)=>(
            <div key={i} className='min-w-[14rem] duration-300 cursor-pointer border-2 rounded-xl text-center bg-bg_light_primary p-6'>
              <img src={content.logo} alt="..." />
              <h6>{content.title}</h6>
              <h6>{content.para}</h6>
            </div>
          ))
        }
      </div>
    </div>
  </section>;
};

export default Services;
