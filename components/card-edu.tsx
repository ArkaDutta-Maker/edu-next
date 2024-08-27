"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
export const Card_Edu = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Lorem Ipsum</p>
          <p className="text-small text-default-500">Lorem Ipsum</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-scale-down rounded-xl"
          src="https://media.istockphoto.com/id/1353769234/photo/training-and-skill-development-concept-with-icons-of-online-course-conference-seminar-webinar.jpg?b=1&s=612x612&w=0&k=20&c=1HIqyEn7_T6-WMcNGxdv9CN45tb_FUp-eqZf9kG6G8A="
          width="100%"
        />
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex justify-between items-center gap-3 w-full">
          <Button isExternal as={Link} color="primary" href="/1" size="md">
            Apply Now!
          </Button>
          <Link showAnchorIcon href="/#">
            Course Details
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
