import React from "react";
import { Button } from "../../shared/component/Button";
import LogoAlexandria from "../../assets/img/landing/LogoAlexandria.svg";
import LogoAlexandriaInv from "../../assets/img/landing/LogoAlexandriaInv.svg";
import Shared from "../../assets/img/landing/shared.svg";
import Google from "../../assets/img/landing/Google.svg";
import Spotify from "../../assets/img/landing/Spotify.svg";
import Amazon_logo from "../../assets/img/landing/Amazon.com-Logo.svg";
import Instagram_logo from "../../assets/img/landing/instagram.svg";
import Facebook_logo from "../../assets/img/landing/facebook.svg";
import Twitter_logo from "../../assets/img/landing/twitter.svg";
import Phone from "../../assets/img/landing/phone.svg";
import World from "../../assets/img/landing/world.svg";
import Mail from "../../assets/img/landing/mail.svg";
function Landing() {
  return (
    <div className="flex flex-col w-screen h-screen">
      {/*Nav bar*/}
      <div className="flex w-full flex-col items-center py-10 px-20 lg:flex-row">
        {/*Logo*/}
        <div
          className="flex flex-row items-center font-black text-2xl mr-2"
          style={{ fontFamily: "Muli, sans-serif" }}
        >
          <span className="h-12 w-12 mr-3">
            <img src={LogoAlexandria} width="50" height="50"></img>
          </span>
          Alexandria
        </div>
        <a href="#why" className="link px-8">
          Why alexandria
        </a>
        <a href="#features" className="link px-8">
          Features
        </a>
        <a href="#powered" className="link px-8">
          Powered by
        </a>
        <a href="#about" className="link px-8">
          About us
        </a>
        <span className="flex-auto"></span>
        <Button className="primary font-bold" action={() => {}}>
          Sign In
        </Button>
      </div>
      {/**Header home */}

      <div className="flex flex-row w-full items-center h-full">
        <div className="flex flex-col w-1/2 px-32 py-16">
          <span
            className="text-6xl font-extrabold"
            style={{ fontFamily: "Muli, sans-serif" }}
          >
            Knowledge
            <br />
            for <br />
            everyone
          </span>
          <span style={{ fontFamily: "Muli, sans-serif" }}>
            <a className="font-bold">Alexandria</a> esta bien loco mira que
            bonito texto
          </span>
          <Button className="primary font-bold" action={() => {}}>
            Learn more
          </Button>
        </div>
        <div className="flex flex-col w-1/2 px-32 py-16">
          <div className="center">
            <img src={Shared} width="" height=""></img>
          </div>
        </div>
      </div>
      {/**Powered by */}
      <div className="flex flex-col w-full h-full items-center ">
        <div className="divide-y-2 divide-white-400">
          <div
            className=" flex text-center pb-3 h-1/2 px-30 pt-16 text-4xl font-black"
            style={{ fontFamily: "Muli, sans-serif" }}
          >
            <span>Powered by</span>
          </div>

          <div className="grid grid-cols-3 gap-8 flex content-center h-1/2 px-30  pt-16 pb-16  ">
            <div>
              <img src={Amazon_logo} width="200" height=""></img>
            </div>
            <div>
              <img src={Google} width="200" height=""></img>
            </div>
            <div>
              <img src={Spotify} width="200" height=""></img>
            </div>
          </div>
        </div>
      </div>
      {/*Footer*/}

      <div
        style={{ backgroundColor: "#242526" }}
        className="flex flex-col w-full h-full float-left pt-20 pb-5 px-40  "
      >
        <div
          className="flex flex-row items-center  font-black text-2xl mr-2"
          style={{ fontFamily: "Muli, sans-serif" }}
        >
          <span className="h-12 w-12 mr-3">
            <img src={LogoAlexandriaInv} width="50" height="50"></img>
          </span>
          Alexandria
        </div>

        <div className=" grid grid-cols-6 grid-flow-col gap-5 flex content-center h-1/2 px-30  pt-16 pb-16  ">
          <div className="col-start-1 font-bold">Explore</div>
          <div className="col-start-1">
            <a href="#Home">Home</a>
          </div>
          <div className="col-start-1">
            <a href="#WhyUs">Why Us</a>
          </div>
          <div className="col-start-1">
            <a href="#Features">Features</a>
          </div>
          <div className="col-start-2 font-bold">
            <a>Get involved</a>
          </div>
          <div className="col-start-2">
            <a href="#Donate">Donate</a>
          </div>
          <div className="col-start-2">
            <a href="#Carrers">Carrers</a>
          </div>
          <div className="col-start-3 font-bold">
            <a>Social</a>
          </div>
          <div className="grid grid-cols-3 col-start-3 gap-4">
            <div className="flex content-center">
              <img src={Facebook_logo} width="20" height="20"></img>
            </div>
            <div className="flex content-center">
              <img src={Twitter_logo} width="20" height="20"></img>
            </div>
            <div className="flex content-center">
              <img src={Instagram_logo} width="20" height="20"></img>
            </div>
          </div>
          <div className="col-start-5 font-bold">Contact</div>
          <div className="grid grid-cols-2 col-start-5 gap-2">
            <div className="flex content-center">
              <img src={Mail} width="20" height="20"></img>
            </div>
            <div className="flex content-center">
              <img src={Phone} width="20" height="20"></img>
            </div>
          </div>
          <div className="col-start-6 font-bold">Country</div>
          <div className="grid grid-cols-2 col-start-6 content-around">
            <div className="flex content-center">
              <img src={World} width="20" height="20"></img>
            </div>
            <div>UBICACION</div>
          </div>
        </div>
      </div>
      {/**copyright */}
      <div
        style={{ backgroundColor: "#3D5AFE" }}
        className="flex flex-col w-full h-full float-left px-20 py-5"
      >
        <div className="flex flex-row w-full h-full float-left py-5 px-10 text-xs ">
          <div className="flex-auto">
            <a className="font-bold">The Alexandria Foundation</a>
            <a>© 2020 All rights reserved</a>
          </div>
          <div className="pr-8 pl-8 ">
            <a href="#privacy" className="link px-8">
              Privacy Policy
            </a>
          </div>
          <div className="pr-8 pl-8 ">
            <a href="#TermsOfService" className="link px-8">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
