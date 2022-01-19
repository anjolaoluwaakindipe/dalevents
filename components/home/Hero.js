import Button from "../shared/Button";
import styles from "../../styles/Home.module.css";

const Hero = () => {
    return (
        <div className={`${styles.container} w-full h-[750px] flex `}>
            <section className="lg:w-[940px] w-full p-[40px] lg:my-auto my-auto lg:pr-32 lg:ml-60">
                <h1 className="lg:text-6xl text-5xl text-light-brown font-extrabold lg:leading-[75px] leading-[50px] ">
                    COME AND CELEBRATE YOUR VICTORIES
                </h1>

                <div className="flex lg:flex-row flex-col">
                    <Button extraStyles="mt-12 border-2 border-primary-pink bg-transparent w-full text-primary-pink hover:bg-primary-pink hover:border-transparent hover:text-light-brown lg:text-3xl">
                        <p>CHECK BOOKINGS</p>
                    </Button>
                    <Button extraStyles="mt-8 border-2 border-light-brown bg-transparent w-full text-light-brown hover:bg-dark-brown hover:border-transparent hover:text-light-brown lg:text-3xl lg:ml-10">
                        <p>CONTACT NOW</p>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Hero;
