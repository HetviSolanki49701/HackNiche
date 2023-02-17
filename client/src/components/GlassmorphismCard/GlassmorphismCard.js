import React from "react";
import "./GlassmorphismCard.css";
import Tilt from "react-vanilla-tilt";
import Iframe from "react-iframe";
const   GlassmorphismCard = () => {
  return (
    <div className="container">
      <Tilt className="card" options={{ speed: 400, max: 25 }}>
        <div className="content">
          <Iframe
            width="auto"
            height="200"
            src="https://www.youtube.com/embed/ssGhAqPDPD8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <div className="topic text-lg font-semibold">Video One</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            dolor eum quo voluptate dolorem illo esse, non corporis. Quo eveniet
            dicta cupiditate iusto asperiores in eos sit quae iste numquam.
          </div>
          <a
            href="https://www.youtube.com/embed/ssGhAqPDPD8"
            className="text-sm underline underline-offset-2"
          >
            Read More
          </a>
        </div>
      </Tilt>
      <Tilt className="card" options={{ speed: 400, max: 25 }}>
        <div className="content p-2">
          <Iframe
            width="auto"
            height="200"
            src="https://www.youtube.com/embed/ssGhAqPDPD8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <div className="topic text-lg font-semibold">Video Two</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            dolor eum quo voluptate dolorem illo esse, non corporis. Quo eveniet
            dicta cupiditate iusto asperiores in eos sit quae iste numquam.
          </div>
          <a
            href="https://www.youtube.com/embed/ssGhAqPDPD8"
            className="text-sm underline underline-offset-2 p-9" 
          >
            Read More
          </a>
        </div>
      </Tilt>
      <Tilt className="card" options={{ speed: 400, max: 25 }}>
        <div className="content p-2">
          <Iframe
            width="auto"
            height="200"
            src="https://www.youtube.com/embed/ssGhAqPDPD8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <div className="topic text-lg font-semibold">Video Three</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            dolor eum quo voluptate dolorem illo esse, non corporis. Quo eveniet
            dicta cupiditate iusto asperiores in eos sit quae iste numquam.
          </div>
          <a
            href="https://www.youtube.com/embed/ssGhAqPDPD8"
            className="text-sm underline underline-offset-2"
          >
            Read More
          </a>
        </div>
      </Tilt>
    </div>
  );
};

export default GlassmorphismCard;
