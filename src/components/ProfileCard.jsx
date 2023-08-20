import React, { useEffect, useState } from "react";

const ProfileCard = ({ imageUrl }) => {
  const cardStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <div style={{ marginTop: "-13rem", marginLeft: "50rem" }}>
          <div style={cardStyle}>
            <img src={imageUrl} alt="Profile" style={imageStyle} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileCard;
