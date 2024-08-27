"use client";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

import { Button } from "@/components/ui/button";

import { title } from "./primitives";
import { subtitle } from "./primitives";

const FormCustom = () => {
  return (
    <form className="space-y-4 ">
      <div>
        <h1 className={title({ size: "sm", class: "my-2" })}>
          Book a Live Class, For Free
        </h1>
      </div>
      <h2 className={subtitle({ class: "text-gray-500" })}>
        Your Topic of Interest
      </h2>
      <Select
        className="flex w-full flex-wrap md:flex-nowrap gap-4 my-2"
        label="Select a Topic"
      >
        <SelectItem key="1">1</SelectItem>
        <SelectItem key="1">2</SelectItem>
        <SelectItem key="1">3</SelectItem>
      </Select>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-2 ">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          variant="flat"
        />
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-2">
        <Input
          label="Phone-Number"
          placeholder="Enter your phone number"
          type="phone-number"
        />
      </div>

      <Button className="w-full my-2" color="primary" type="submit">
        Book Free Live Class
      </Button>

      <p className="mt-3 text-sm text-gray-400 ">Limited Seats Left</p>
    </form>
  );
};

export default FormCustom;
