import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card_Edu } from "@/components/card-edu";
import Image from "next/image";
import CarouselCustom from "@/components/carousel-custom";
import CarouselCustomNoAutoplay from "@/components/carousel-with-no-autoplay";
import { color } from "framer-motion";
import { Card_Test } from "@/components/card-testimonial";
import { Button } from "@nextui-org/button";
import { Card_About } from "@/components/card-about";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
        <Dialog>
          <DialogTrigger asChild>
            <Button color="primary" size="lg">
              Chat With Us
            </Button>
          </DialogTrigger>
          <DialogContent className="items-start sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Chat With Us</DialogTitle>
              <DialogDescription>
                Enter your details and we will get back to you
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Email Address
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                  placeholder="Enter your Email Address"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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
          children={<Card_Edu />}
          count={5}
          showArrows_val={true}
          loop_val={true}
        />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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
        <CarouselCustom children={<Card_Test />} val={2000} count={5} />
      </div>
      <Button
        as={Link}
        color="secondary"
        size="lg"
        showAnchorIcon
        isExternal
        variant="ghost"
        href="/#"
      >
        View More Success Stories
      </Button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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
      <div className="container md:mx-3 scale-96">
        <CarouselCustomNoAutoplay
          children={<Card_About />}
          count={3}
          showArrows_val={false}
          loop_val={true}
        />
      </div>
      <div className="container md:mx-3">
        <p className="ml-4 md:ml-9 text-justify ">
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
