import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { title, subtitle } from "@/components/primitives";
import { Card_Edu } from "@/components/card-edu";
import CarouselCustom from "@/components/carousel-custom";
import CarouselCustomNoAutoplay from "@/components/carousel-with-no-autoplay";
import { Card_Test } from "@/components/card-testimonial";
import ResponsiveCardDiv from "@/components/Responsive-Card-Div";
import FormCustom from "@/components/FormCustom";
import AccordionCustom from "@/components/Accordion-Custom";
export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 py-8 md:py-10">
      <div className="w-full flex flex-col lg:flex-row items-center pt-8 lg:pt-16">
        {/* Left Side */}
        <div className="inline-block max-w-xl text-center justify-center ">
          <h1
            className={title({
              class: "justify-center text-center",
              color: "violet",
            })}
          >
            Joddha&nbsp;
          </h1>
          {/* <h1 className={title({ color: "blue", underline: true })}>
            Next&nbsp;
          </h1> */}
          <br />
          <h2 className={subtitle({ class: "text-gray text-center text-xl" })}>
            WIN YOUR BATTLE WITH US
          </h2>
          <h2
            className={subtitle({
              class: "mt-4 text-gray-400 dark:text-gray-400",
            })}
          >
            Joddha is an Educational Startup from Bengal, indeed for Bengal,
            founded by Engineers & alumnus of Jadavpur University.{" "}
          </h2>
        </div>
        {/* Right Side */}
        <div className="justify-end lg:w-1/2 p-8 rounded-lg shadow-lg mt-8 lg:mt-0 dark:border-2 border-blue-500">
          <FormCustom />
        </div>
      </div>
      <hr className="hidden md:block h-px my-9 bg-gray-200 border-0 dark:bg-gray-700" />
      <hr className="hidden md:block h-px my-9 bg-gray-200 border-0 dark:bg-gray-700" />
      <hr className="hidden sm:block h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1 className={title({ color: "blue" })}> Our Courses</h1>
        <h2
          className={subtitle({
            class: "ml-5 text-gray-400 dark:text-gray-400",
          })}
        >
          Next Level Courses to take u Next level
        </h2>
      </div>
      <div className="container md:p-10">
        <CarouselCustomNoAutoplay
          count={5}
          loop_val={true}
          showArrows_val={true}
        >
          {" "}
          <Card_Edu />
        </CarouselCustomNoAutoplay>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1 className={title({ color: "violet" })}>Our Team</h1>
        <h2
          className={subtitle({
            class: "mt-4 text-gray-400 dark:text-gray-400",
          })}
        >
          Meet the team behind Edu-Next
        </h2>
      </div>
      {/* About the team */}
      <ResponsiveCardDiv />
      <Button
        isExternal
        showAnchorIcon
        as={Link}
        className="mt-5"
        color="secondary"
        href="/about"
        size="lg"
        variant="bordered"
      >
        View the Entire Team
      </Button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1
          className={title({
            color: "blue",
          })}
        >
          Testimonials
        </h1>
        <h2
          className={subtitle({
            class: "mt-4 text-gray-400 dark:text-gray-400",
          })}
        >
          What Our students have to say
        </h2>
      </div>
      <div className="container md:p-10">
        <CarouselCustom count={5} val={2000}>
          <Card_Test />
        </CarouselCustom>
      </div>
      <Button
        isExternal
        showAnchorIcon
        as={Link}
        className="my-4"
        color="primary"
        href="/#"
        size="lg"
        variant="bordered"
      >
        View More Success Stories
      </Button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1 className={title({ color: "violet" })}> FAQ</h1>
        <h2
          className={subtitle({
            class: "mt-4 text-gray-400 dark:text-gray-400",
          })}
        >
          Frequently Asked Questions
        </h2>
      </div>{" "}
      <div className="container md:pl-8">
        <AccordionCustom />
      </div>
      <div className="container md:mx-3">
        <p className="md:ml-9 text-justify ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          dignissim velit in auctor scelerisque. Mauris ullamcorper, quam at
          convallis faucibus, magna augue commodo urna, id volutpat tellus ante
          quis ligula. Nullam et venenatis felis, non ullamcorper sem. Ut
          pharetra posuere nisi eget laoreet. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Proin venenatis
          odio mi, in pellentesque ligula condimentum ut. Cras quis lorem enim.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Vestibulum suscipit purus eleifend nibh
          rhoncus elementum. Suspendisse magna tortor, luctus vitae tristique
          sed, lacinia eu quam.
        </p>
      </div>
    </section>
  );
}
