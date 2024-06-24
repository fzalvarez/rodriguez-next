import {
  FluentChatBubblesQuestion24Regular,
  IcOutlineDirectionsBus,
  TablerBrandCitymapper,
} from "@/components/svg";
import { Searcher } from "@/searchlib/components/Searcher";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import NextImage from "next/image";

import Popup from "@/assets/Banner-popup.jpg";

export default function Home() {
  return (
    <>
      <main className="w-full bg-[url(../assets/Hero-Banner.png)] bg-cover bg-[50%_60%] mt-[-65px] relative z-0">
        <div className="absolute z-0 top-0.5 left-0 w-full h-full bg-gradient-to-b from-transparent to-white"></div>
        <div className="container py-32 relative z-10">
          <div className="rounded-xl shadow-xl w-full">
            <Searcher
              url="https://privado.toursrodriguez.com.pe/"
              lang="es"
              variant="flat"
            />
          </div>
        </div>
      </main>
      <section className="container flex flex-col items-end gap-10 -mt-16 relative z-[5]">
        <Button
          as="a"
          href="#"
          color="primary"
          radius="full"
          variant="ghost"
          startContent={
            <FluentChatBubblesQuestion24Regular className="text-2xl" />
          }
        >
          Preguntas Frecuentes
        </Button>
        <Card
          isFooterBlurred
          className="lg:p-0 lg:after:hidden after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-t after:from-transparent after:to-black/70 after:z-[5]"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start text-white lg:hidden">
            <p className="text-tiny font-bold uppercase opacity-80">
              ¡Adventurate más!
            </p>
            <h2 className="text-2xl font-medium">
              Creando inolvidables experiencias
            </h2>
          </CardHeader>
          <Image
            as={NextImage}
            removeWrapper
            src={Popup.src}
            alt="popup"
            height={Popup.height}
            width={Popup.width}
            className="object-cover z-0 max-h-72 lg:hidden"
          />
          <CardFooter className="absolute z-10 bottom-0 bg-black/40 border-t-1 border-default lg:hidden">
            <div className="flex items-center justify-between w-full">
              <div className="text-white flex items-center gap-2">
                <span>Lima</span>
                <TablerBrandCitymapper className="text-2xl" />
                <span>Huaraz</span>
              </div>
              <Button
                as="a"
                href="#"
                color="primary"
                radius="full"
                size="sm"
                startContent={<IcOutlineDirectionsBus className="text-lg" />}
              >
                ¡Reserva hoy!
              </Button>
            </div>
          </CardFooter>
          <CardBody className="p-0 max-lg:hidden grid grid-cols-3">
            <div className="col-span-2">
              <Image
                as={NextImage}
                removeWrapper
                src={Popup.src}
                alt="popup"
                height={Popup.height}
                width={Popup.width}
                className="object-cover z-0 rounded-none max-h-72"
              />
            </div>
            <div className="col-span-1 bg-gradient-to-b from-primary to-orange-500 px-4 py-10 flex flex-col text-white">
              <p className="text-tiny font-bold uppercase opacity-80">
                ¡Adventurate más!
              </p>
              <h2 className="text-2xl font-medium">
                Creando inolvidables experiencias
              </h2>
              <div className="flex-1"></div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span>Lima</span>
                  <TablerBrandCitymapper className="text-2xl" />
                  <span>Huaraz</span>
                </div>
                <Button
                  as="a"
                  href="#"
                  color="default"
                  radius="full"
                  size="sm"
                  className="bg-white"
                  startContent={<IcOutlineDirectionsBus className="text-lg" />}
                >
                  ¡Reserva hoy!
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
