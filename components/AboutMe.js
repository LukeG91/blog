import Image from "next/image";
import Me from "../public/images/me.png";

export default function AboutMe() {
  return (
    <div className="aboutMeMainContainer">
      <div className="aboutMeImageContainer">
        <Image
          src={Me}
          alt="me"
          className="aboutMeImage"
          width={400}
          height={400}
        />
      </div>
      <div className="aboutMeParagraphContainer">
        <p className="aboutMeParagraph">
          Hello and welcome to my blog. My name is Luke Glendining, I am a 30
          year old technology and code lover. I will be blogging about some of
          the topics that I learn throughout my coding journey in order to share
          my knowledge and to help others gain more knowledge on programming and
          tech in general. I am also working towards improving my own knowledge
          and understanding of concepts by writing and teaching others.
        </p>
      </div>
    </div>
  );
}
