import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[auto] bg-[#f2f2f2] flex flex-col items-center justify-center gap-16 m-[70px] mobile:m-[60px] tablet:m-[60px]">
        <div className="w-full h-[88vh] bg-[#027BCE] flex justify-center mobile:h-[70vh]">
          <div className="w-[42.5%] h-full flex items-center justify-center mobile:w-[85%] mobile:h-full z-100">
            <div className="w-full h-[65%] flex flex-col items-center justify-between mobile:h-[45%] tablet:h-[40%] mobile:w-full tablet:w-full">
              <div className="w-full h-[50%] text-4xl text-[#f2f2f2] font-bold flex items-center tablet:text-[#f2f2f2] mobile:text-[#f2f2f2] tablet:text-2xl mobile:text-[17.9px] mobile:h-[100px] mobile:w-full mobile:leading-7 mobile:text-center">
                LIVE, LEARN, GROW. INVESTING IN YOUR EDUCATION GOES A LONG WAY
              </div>
              <div className="w-full h-[30%] text-[#f2f2f2] text-sm tablet:text-[#f2f2f2] mobile:text-[#f2f2f2] tablet:text-[10px] mobile:text-[10px] mobile:h-[50px] mobile:leading-4 mobile:text-center">
                One of the primary goals of education is to cultivate a genuine
                enthusiasm for learning. This starts from a young age, as
                children's natural curiosity is nurtured through engaging,
                hands-on activities.
              </div>
            </div>
          </div>
          <div className="w-[42.5%] h-full mobile:w-[85%] flex items-center justify-center mobile:hidden">
            <img
              className="w-full h-full  tablet:w-[90%] tablet:h-[85%]"
              src="images/hero-edited.png"
              alt="hero-image"
            />
          </div>
        </div>
        <div className="w-[85%] flex flex-col gap-16 items-center justify-center">
          <div className="w-full h-[80vh] flex justify-center items-center mobile:flex-col-reverse mobile:mb-[20px]">
            <div className="w-[50%] h-full flex justify-center items-center mobile:w-full mobile:h-full">
              <img
                className="w-full h-full mobile:w-[65%] mobile:h-full tablet:w-[80%] tablet:h-[80%] flex position-contain repeat-no-repeat background-center"
                src="images/vector.png"
                alt="about"
              />
            </div>
            <div className="w-[50%] h-full bg-[#027BCE] rounded-[5px] flex flex-col items-center justify-center mobile:w-full mobile:h-[70%] mobile:mt-[55px]">
              <div className="w-[85%] h-[30px] flex items-center text-[white] text-3xl font-bold mobile:text-lg mobile:h-[20px] mobile:mt-2 tablet:text-xl">
                Lets Talk About
              </div>
              <div className="w-[85%] h-[50px] flex items-center text-[white] text-4xl font-bold mobile:text-xl mobile:h-[20px] tablet:text-[26px] tablet:h-[30px]">
                Prime Tutors Academy
              </div>
              <div className="w-[85%] h-[10px] text-[white] font-bold">
                {" "}
                <hr />{" "}
              </div>
              <div className="w-[85%] h-[300px] flex items-center text-[white] text-sm text-justify mb-[5px] mobile:text-[9px] mobile:leading-[10.5px] mobile:h-[250px] mobile:mb-[10px] tablet:text-[13px] tablet:mb-[5px] tablet:leading-[12px]">
                Prime Tutors Academy was formally founded at the year 2021{" "}
                <br /> At Prime Tutors, we are passionate about empowering
                students to reach their full potential. Our team of experienced,
                dedicated educators is committed to providing personalized,
                high-quality tutoring services that help learners of all ages
                and backgrounds excel. Prime Tutors was established to bridge
                the achievement gap and unlock the innate brilliance in each of
                our students. We understand that every learner has unique needs,
                strengths, and learning styles, which is why we tailor our
                approach to ensure maximum impact and lasting success. Our
                tutors are more than just subject matter experts, they are
                mentors, role models, and partners in the learning journey, we
                empower students to develop essential academic skills, build
                confidence, and cultivate a lifelong love of learning. Join the
                Prime Tutors family today and experience the transformative
                power of personalized education. Together, we'll reach new
                heights of academic excellence and personal growth.
              </div>
            </div>
          </div>
          <div className="w-[85%] h-[80vh] bg-[black]"></div>
          <div className="w-[85%] h-[80vh] bg-[red]"></div>
          <div className="w-[85%] h-[80vh] bg-[green]"></div>
        </div>
      </div>
    </>
  );
};
export default Hero;
