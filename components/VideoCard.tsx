import React from "react";
import { Card, CardBody } from "@nextui-org/card";
export default function CarouselCustom({ link }: { link: string }) {
  return (
    <Card className="flex justify-center">
      <CardBody className="overflow-visible py-2">
        <div className="max-w-sm">
          <iframe
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full rounded-lg"
            frameborder="0"
            height="200"
            referrerpolicy="strict-origin-when-cross-origin"
            src={link}
            title="YouTube video player"
            width="100%"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold ">Yt Video</h3>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
