"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
export const Card_About = () => {
  return (
    <Card>
      <CardBody className="overflow-visible py-2">
        <div className="flex items-center justify-center">
          <Image
            alt="pf icon"
            className="object-fill rounded-full"
            height={100}
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center my-3">
          <span className="text-lg">Lorem Ipsum </span>
          <span className="text-gray-400 text-lg">Lorem Ipsum </span>
        </div>
      </CardBody>

      <Divider />
      <Divider />
      <CardFooter>
        <p className="m-3 text-center font-mono text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt pretium convallis. Vestibulum in odio tortor. Pellentesque a
          ipsum nunc.
        </p>
      </CardFooter>
    </Card>
  );
};
