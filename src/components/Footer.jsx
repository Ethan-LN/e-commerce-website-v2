import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import React from "react";

function Footer() {
  const socialMediaStyle = "m-3 rounded-full cursor-pointer p-2 text-white ";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        {/* Store information */}
        <h1 className="text-[25px] font-bold">Spring Collection Store</h1>
        <p className="text-[10px]">
          By accessing Spring Collection and navigating without modifying your
          parameters, you accept the use of cookies or similar technologies.
          This is in order for us to provide you with the best services and
          offers adapted to your interests. But most importantly, a more secure
          experience on our website. For more information, please check our
          Privacy Policy.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialMediaStyle + "bg-blue-700"}>
            <Facebook />
          </div>
          <div className={socialMediaStyle + "bg-orange-500"}>
            <Instagram />
          </div>
          <div className={socialMediaStyle + "bg-sky-400"}>
            <Twitter />
          </div>
          <div className={socialMediaStyle + "bg-red-600"}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        {/* Contact information */}
        <div className="flex m-3">
          <LocationOnOutlined className="text-purple-700"/>
          <p className="pl-3">State of Victoria</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined className="text-purple-700"/>
          <p className="pl-3">+61 (03) 9882 7987</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined className="text-purple-700"/>
          <p className="pl-3">info@springcollection.com.au</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
