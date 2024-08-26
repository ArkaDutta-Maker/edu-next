"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
export const Card_About = () => {
  return (
    <Card className="shadow-md">
      <CardBody className="overflow-visible py-2">
        <div className="flex items-center justify-center">
          <Image
            className="object-fill rounded-full"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={100}
            height={100}
            alt="pf icon"
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
        <p className="m-3 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt pretium convallis. Vestibulum in odio tortor. Pellentesque a
          ipsum nunc. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut ut commodo massa. Mauris at purus feugiat erat pretium
          volutpat at egestas sapien. Lorem ipsum dolor sit amet, consectetur.
        </p>
      </CardFooter>
    </Card>
  );
};
