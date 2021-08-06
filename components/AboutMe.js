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
        <p>
          Hello and welcome to my blog. My name is Luke Glendining, a 30 year
          old technology and code lover. I am writing about what I learn to help
          others gain more knowledge on programming and tech in general and also
          to improve my own knowledge and understanding of concepts by writing
          and teaching others.
        </p>
      </div>
    </div>
  );
}
