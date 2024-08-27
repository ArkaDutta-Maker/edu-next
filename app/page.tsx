import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { title, subtitle } from "@/components/primitives";
import { Card_Edu } from "@/components/card-edu";
import CarouselCustom from "@/components/carousel-custom";
import CarouselCustomNoAutoplay from "@/components/carousel-with-no-autoplay";
import { Card_Test } from "@/components/card-testimonial";
import ResponsiveCardDiv from "@/components/Responsive-Card-Div";
import DialogChat from "@/components/Dialog-Chat";
import AccordionCustom from "@/components/Accordion-Custom";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Edu&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Next&nbsp;</h1>
        <br />
        <h1 className={title()}>The Next Level of Education</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Innovative, intruiging, and interactive learning platform
        </h2>
      </div>
      <div className="my-3 justify-start">
        <DialogChat />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1 className={title({ color: "violet", underline: true })}>
          {" "}
          Our Courses
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Next Level Courses to take you to the next level
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
        <h1 className={title({ color: "violet", underline: true })}>
          {" "}
          Testimonials
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
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
        color="secondary"
        href="/#"
        size="lg"
        variant="ghost"
      >
        View More Success Stories
      </Button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1 className={title({ color: "violet", underline: true })}>
          {" "}
          Our Team
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Meet the team behind Edu-Next
        </h2>
      </div>
      {/* About the team */}
      <ResponsiveCardDiv />
      <Button
        isExternal
        showAnchorIcon
        as={Link}
        color="secondary"
        href="/about"
        size="lg"
        variant="ghost"
      >
        View the Entire Team
      </Button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h2 className={title({ color: "violet", underline: true })}> FAQ</h2>
        <h2 className={subtitle({ class: "mt-4" })}>
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
