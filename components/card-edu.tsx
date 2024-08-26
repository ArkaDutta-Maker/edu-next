"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
export const Card_Edu = () => {
  return (
    <Card className="max-w-[400px]">
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
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width="100%"
        />
      </CardBody>
      <Divider />
      <CardFooter>
        <Link showAnchorIcon href="/#">
          Course Details
        </Link>
      </CardFooter>
    </Card>
  );
};
