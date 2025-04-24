import React, { useState } from "react";
import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <section className="wrapper py-[5rem] flex flex-col gap-5 items-center">
      <SubHeading heading="Our Services" />
      <h2
        data-aos="fade-up"
        className="heading-2 max-w-[60rem] mx-auto text-center"
      >
        From Concept to Reality: Building Tomorrow's Solutions Today
      </h2>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service) => (
          <div
            data-aos="fade-up"
            className="bg-secondary/30 group hover:bg-secondary/50 rounded-lg p-5 flex text-center flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="bg-tertiary group-hover:bg-secondary p-4 aspect-square rounded-full">
                {service.icon}
              </div>
              {/* <img
                loading="lazy"
                src={service.icon}
                width="75"
                height="75"
                className="h-[3.5rem] md:h-[4rem] object-contain"
                alt=""
              /> */}
              <h6 className="text-xl font-medium mt-2">{service.title}</h6>
              <p className="desc mt-2 !text-black line-clamp-6">
                {service.desc}
              </p>
            </div>
            <Link
              to={`/services/${service.link}`}
              onClick={() => handleSelectServiceToShowDetail(service)}
              className="primary-btn mt-5 w-fit mx-auto"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[2.2rem]"
          >
            <X size={30} />
          </button>
        </div>
        <div className="wrapper flex flex-col gap-6 tex-white pb-[2rem]">
          <h1 className="heading-2">{selectedService.title}</h1>
          <p className="desc whitespace-pre-line">
            {selectedService.detailContent}
          </p>
        </div>
      </Drawer>
    </section>
  );
};

export default AllServices;
