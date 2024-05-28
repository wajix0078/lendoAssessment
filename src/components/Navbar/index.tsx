import React from "react"

const Navbar: React.FC = () => {

  return (<div
    style={{
      height: "81.858px",
      backgroundColor: "#ffffff",
      position: "absolute",
      top: "0",
      left: "223.25px",
      right: "0",
      overflow: "hidden",
      zIndex: "185",
    }}
  >
    <div
      style={{
        display: "flex",
        width: "581.94px",
        height: "24.806px",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: "193",
        margin: "28.6px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "286.183px",
          gap: "34.728px",
          alignItems: "center",
          flexShrink: "0",
          flexWrap: "nowrap",
          position: "relative",
          zIndex: "188",
        }}
      >
        <span
          style={{
            height: "15px",
            flexShrink: "0",
            flexBasis: "auto",
            fontFamily: "Proxima Nova, var(--default-font-family)",
            fontSize: "17px",
            fontWeight: "400",
            lineHeight: "15px",
            color: "#0d0f52",
            position: "relative",
            textAlign: "left",
            whiteSpace: "nowrap",
            zIndex: "189",
          }}
        >
          Overview
        </span>
        <span
          style={{
            height: "15px",
            flexShrink: "0",
            flexBasis: "auto",
            fontFamily: "Proxima Nova, var(--default-font-family)",
            fontSize: "17px",
            fontWeight: "400",
            lineHeight: "15px",
            color: "#0d0f52",
            position: "relative",
            textAlign: "left",
            whiteSpace: "nowrap",
            zIndex: "190",
          }}
        >
          Invest
        </span>
        <span
          style={{
            height: "15px",
            flexShrink: "0",
            flexBasis: "auto",
            fontFamily: "Proxima Nova, var(--default-font-family)",
            fontSize: "17px",
            fontWeight: "700",
            lineHeight: "15px",
            color: "#0d0f52",
            position: "relative",
            textAlign: "left",
            whiteSpace: "nowrap",
            zIndex: "191",
          }}
        >
          Auto-Invest
        </span>
        <span
          style={{
            height: "15px",
            flexShrink: "0",
            flexBasis: "auto",
            fontFamily: "Proxima Nova, var(--default-font-family)",
            fontSize: "17px",
            fontWeight: "400",
            lineHeight: "15px",
            color: "#0d0f52",
            position: "relative",
            textAlign: "left",
            whiteSpace: "nowrap",
            zIndex: "192",
          }}
        >
          My Portfolio
        </span>
      </div>
      <div
        style={{
          width: "106.044px",
          height: "24.806px",
          flexShrink: "0",
          position: "relative",
          zIndex: "193",
          display: "flex",
          alignItems: "center",
          columnGap: 25,
        }}
      >
        <button
          className="LanguageText"
          style={{
            fontFamily: "Proxima Nova, var(--default-font-family)",
            border: "none",
            background: "transparent",
            width: "fit-content",
            cursor: "pointer",
          }}
        >
          En
        </button>
        <button
          style={{
            border: "none",
            background: "transparent",
            width: "fit-content",
            cursor: "pointer",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_432_78)">
              <line
                x1="2.58611"
                y1="13.2819"
                x2="13.7486"
                y2="13.2819"
                stroke="#A4A6BB"
                strokeWidth="1.24028"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.82639 13.2524V7.84833C3.82639 5.45088 5.7699 3.50735 8.16736 3.50735V3.50735C10.5648 3.50735 12.5083 5.45087 12.5083 7.84833V13.2524"
                stroke="#A4A6BB"
                strokeWidth="1.24028"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.78749 15.2014L7.54721 15.2014"
                stroke="#A4A6BB"
                strokeWidth="1.24028"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.16736 3.50736L8.16736 1.55835"
                stroke="#A4A6BB"
                strokeWidth="1.24028"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_432_78">
                <rect
                  width="14.8833"
                  height="14.8833"
                  fill="white"
                  transform="translate(0.725693 0.938202)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          style={{
            border: "none",
            background: "transparent",
            width: "fit-content",
            cursor: "pointer",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.15">
              <rect
                x="0.755554"
                y="0.597229"
                width="24.8056"
                height="24.8056"
                rx="12.4028"
                fill="#0D0F52"
              />
              <circle
                cx="13.1583"
                cy="9.27917"
                r="4.34097"
                fill="white"
              />
              <path
                d="M13.1583 16.7208C10.1373 16.7208 7.57499 17.9753 6.67825 20.2704C6.22653 21.4265 6.82063 22.6844 7.95217 23.1945C9.03757 23.6839 10.7219 24.1625 13.1583 24.1625C15.5947 24.1625 17.2791 23.6839 18.3645 23.1945C19.496 22.6844 20.0901 21.4265 19.6384 20.2704C18.7416 17.9753 16.1793 16.7208 13.1583 16.7208Z"
                fill="white"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div
      style={{
        width: "14.883px",
        height: "2.481px",
        backgroundColor: "#2d91fe",
        borderRadius: "2.481px",
        position: "relative",
        zIndex: "187",
        margin: "26.117px 0 0 189.762px",
      }}
    />
    <div
      style={{
        width: "620.389px",
        height: "0.48px",
        backgroundPosition: "center",
        backgroundImage:
          "url(/images/cd87b9c6-a27a-4569-a752-c34bf35e81a4.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: "186",
        margin: "-0.62px 0 0 24.806px",
      }}
    />
  </div>)

}

export default Navbar;