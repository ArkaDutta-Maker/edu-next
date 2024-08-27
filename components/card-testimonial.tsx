"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
export const Card_Test = () => {
  return (
    <Card className="rounded-small">
      <CardBody className="overflow-visible py-2">
        <p className="text-center m-3 text-gray-600 dark:text-gray-400">
          My team and I enjoy interviewing candidates from Scaler because of the
          skills they possess and also the approach taken by Scaler towards the
          training process itself.
        </p>
      </CardBody>

      <Divider />
      <Divider />
      <CardFooter>
        <div className="flex items-center w-full m-3 gap-3">
          <Image
            alt="pf icon"
            className="object-fill rounded-medium"
            height={80}
            src="https://assets.fp.scaler.com/seo/_next/static/media/Rajasekhar%20-%20ExpressBee.18bb8bdf.webp"
            width={80}
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold">Lorem Ipsum </span>
            <span className="text-gray-400 text-md font-light">
              Lorem Ipsum{" "}
            </span>
            <span className="text-gray-400 text-sm font-light">
              Lorem Ipsum{" "}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
