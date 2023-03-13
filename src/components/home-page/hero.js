import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Alper</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
    </section>
  );
};

export default Hero;
