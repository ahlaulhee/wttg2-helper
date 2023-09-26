import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

type Keys = {
  key1: string;
  key2: string;
  key3: string;
  key4: string;
  key5: string;
  key6: string;
  key7: string;
  key8: string;
};

type TimedWebsite = {
  available: string;
  pages: string[];
};

function App() {
  const [keys, setKeys] = useState<Keys>({
    key1: "",
    key2: "",
    key3: "",
    key4: "",
    key5: "",
    key6: "",
    key7: "",
    key8: "",
  });

  const info: TimedWebsite[] = [
    {
      pages: ["IAMHERE"],
      available: "xx:00 to xx:14",
    },
    {
      pages: ["Borrow My Daugther", "Deep Journal", "YOU THERE?"],
      available: "xx:00 to xx:29",
    },
    {
      pages: ["Ave Satan", "Fifty Seven", "Number Station", "Your Data"],
      available: "xx:30 to xx:44",
    },
    {
      pages: ["THANATOS", "Little Friends"],
      available: "xx:45 to xx:59",
    },
    {
      pages: ["Brutal Underground"],
      available: "xx:30 to xx:59",
    },
  ];

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeys((prevKeys) => ({
      ...prevKeys,
      [e.target.name]: e.target.value,
    }));
  };

  const checkForKeys = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;

    const pattern = /[1-8] - [a-z0-9]{12}/gi;

    const matches = Array.from(content.matchAll(pattern));

    matches.forEach((match) => {
      const keyNumber = match[0][0];
      console.log(match[0]);
      console.log(match[0].substring(4));
      setKeys((prevKeys) => ({
        ...prevKeys,
        ["key" + keyNumber]: match[0].substring(4),
      }));
      toast({
        title: `Key number ${match[0][0]} found!`,
        description: `${match[0].substring(4)}`,
      });
    });

    setTimeout(() => {
      e.target.value = "";
    }, 3000);

    return;
  };

  const compileKeys = () => {
    const values = Object.values(keys);

    values.shift();

    const concatenatedKeys = values.join("");

    navigator.clipboard
      .writeText(concatenatedKeys)
      .then(() => {
        toast({
          title: "Compiled Key copied to clipboard successfully",
        });
        console.log("Keys copied to clipboard successfully");
      })
      .catch((err) => {
        toast({
          title: "Failed to copy keys to clipboard",
        });
        console.error("Failed to copy keys to clipboard: ", err);
      });
  };

  const clearKeys = () => {
    setKeys({
      key1: "",
      key2: "",
      key3: "",
      key4: "",
      key5: "",
      key6: "",
      key7: "",
      key8: "",
    });
  };

  return (
    <main className="flex md:flex-row flex-col items-center justify-center h-fit md:h-screen gap-4 flex-grow">
      <Card className="h-[35rem] w-[24rem] flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Useful information</CardTitle>
          <CardDescription>
            We always forget when some of these sites open. Don't lie to me
          </CardDescription>
        </CardHeader>
        <CardContent className="h-5/6">
          <Accordion type="single" collapsible className="w-full">
            {info.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.available}</AccordionTrigger>
                <AccordionContent>
                  {item.pages.map((page, index) => (
                    <p key={index}>{page}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      <Card className="flex flex-col min-h-[35rem] w-[24rem] justify-between">
        <CardHeader>
          <CardTitle>Store your keys here...</CardTitle>
          <CardDescription>
            Did you know that Lucas can steal your in-game notes if you don't
            turn off your pc in time?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 flex flex-col justify-center items-center">
          <Input
            className={`font-bold ${
              keys.key1.length >= 12 ? "bg-primary text-black" : ""
            } duration-500`}
            name="key1"
            value={keys.key1}
            onChange={handleInputChange}
            placeholder="Key 1"
          />
          <Input
            className={`font-bold ${
              keys.key2.length >= 12 ? "bg-primary text-black" : ""
            } duration-500`}
            name="key2"
            value={keys.key2}
            onChange={handleInputChange}
            placeholder="Key 2"
          />
          <Input
            className={`font-bold ${
              keys.key3.length >= 12 ? "bg-primary text-black" : ""
            } duration-500`}
            name="key3"
            value={keys.key3}
            onChange={handleInputChange}
            placeholder="Key 3"
          />
          <Input
            className={`font-bold ${
              keys.key4.length >= 12 ? "bg-primary text-black" : ""
            } duration-500`}
            name="key4"
            value={keys.key4}
            onChange={handleInputChange}
            placeholder="Key 4"
          />
          <Input
            className={`font-bold ${
              keys.key5.length >= 12 ? "bg-primary text-black" : ""
            } duration-500`}
            name="key5"
            value={keys.key5}
            onChange={handleInputChange}
            placeholder="Key 5"
          />
          <Input
            className={`font-bold ${
              keys.key6.length >= 12 ? "bg-primary text-black" : ""
            } duration-500`}
            name="key6"
            value={keys.key6}
            onChange={handleInputChange}
            placeholder="Key 6"
          />
          <Input
            className={`font-bold ${
              keys.key7.length >= 12 ? "bg-primary text-black" : ""
            } duration-500`}
            name="key7"
            value={keys.key7}
            onChange={handleInputChange}
            placeholder="Key 7"
          />
          <Input
            className={`font-bold ${
              keys.key8.length >= 12 ? "bg-primary text-black" : ""
            } duration-500`}
            name="key8"
            value={keys.key8}
            onChange={handleInputChange}
            placeholder="Key 8"
          />
          <div className="w-full flex space-x-2">
            <Button className="w-full" onClick={compileKeys}>
              Compile Keys
            </Button>
            <Button className="w-full" onClick={clearKeys}>
              Clear Keys
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="h-[35rem] w-[24rem] flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Source Code Checker</CardTitle>
          <CardDescription>
            Not gonna lie... Sometimes finding keys in the source code is hard
          </CardDescription>
        </CardHeader>
        <CardContent className="h-5/6">
          <Textarea
            className="resize-none h-full"
            onChange={checkForKeys}
            placeholder="Search for a key... Paste your source code here."
          />
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
