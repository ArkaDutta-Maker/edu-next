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
import { Button } from "@nextui-org/button";
const DialogChat = () => {
  return (
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
  );
};

export default DialogChat;
