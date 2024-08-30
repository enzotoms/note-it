import UndrawImg from "../../assets/images/undraw.svg";

const About = () => {
  return (
    <div className="container mt-8 mx-auto p-2 bg-blue-600 border rounded-tr-3xl rounded-bl-3xl">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold pt-12 text-white">About This App</h1>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center mt-8 mb-8">
        <div className="w-full mx-8 md:w-1/2 flex justify-center md:justify-center">
          <img src={UndrawImg} className="w-full md:w-3/4 max-w-xs md:max-w-md pt-10 md:pt-0" alt="Note App Illustration" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mt-8 md:mt-0 px-6 md:px-10">
          <h6 className="text-3xl font-extrabold text-center md:text-left text-white">Note It</h6>
          <p className="text-center md:text-left text-base font-medium mt-4 text-white leading-relaxed">
            Unlock your creativity with Note It, the ultimate web app for capturing thoughts, ideas, and everything in between.
             Whether you’re jotting down reminders or drafting the next big idea, Note It keeps your notes organized and
              accessible from anywhere. With a sleek, intuitive interface and powerful features, staying productive has never been
               easier. Say goodbye to cluttered notebooks and hello to the future of note-taking!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
