import { content } from "../Content";

const Hero = () => {
  const { hero } = content;
  return (
    <section id="home">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute  top-[36%] right-[-22%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>
        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <a href="https://www.linkedin.com/in/muhammad-saif-ur-rehman-061ab41b5/" target="_blank">
            <button className="btn">{hero.btnText}</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, index) => (
              <div
                key={index}
                data-aos="fade-down"
                data-aos-delay={index * 300}
                className={`flex items-center w-80 gap-5 ${
                  index === 1 && "flex-row-reverse text-right"
                }`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
