import { Button } from "@nextui-org/button";

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

const DialogChat = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button color="primary" size="lg" variant="bordered">
          <span className="text-blue-500 dark:text-blue-400">Chat With Us</span>
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
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input
              className="col-span-3"
              id="name"
              placeholder="Enter your Name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="username">
              Email Address
            </Label>
            <Input
              className="col-span-3"
              id="username"
              placeholder="Enter your Email Address"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogChat;
