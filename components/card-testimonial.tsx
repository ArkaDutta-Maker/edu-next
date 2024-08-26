"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
export const Card_Test = () => {
  return (
    <Card className="shadow-md">
      <CardBody className="overflow-visible py-2">
        <p className="m-3 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt pretium convallis. Vestibulum in odio tortor. Pellentesque a
          ipsum nunc. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Ut ut commodo massa. Mauris at purus feugiat erat pretium
          volutpat at egestas sapien. Lorem ipsum dolor sit amet, consectetur.
        </p>
      </CardBody>

      <Divider />
      <Divider />
      <CardFooter>
        <div className="flex items-center w-full m-3 gap-3">
          <Image
            className="object-fill rounded-medium"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
            height={40}
            alt="pf icon"
          />
          <div className="flex flex-col">
            <span className="text-lg">Lorem Ipsum </span>
            <span className="text-gray-400 text-sm">Lorem Ipsum </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
