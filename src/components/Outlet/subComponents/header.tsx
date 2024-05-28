import React from "react"

export const Header:React.FC = () => {
 return (
    <div
            style={{
              display: "flex",
              width: "590.372px",
              height: "24.806px",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              zIndex: "68",
              margin: "34.728px 0 0 39.689px",
            //   backgroundColor:"yellow"
            }}
          >
            <span
              style={{
                height: "24.806px",
                flexShrink: "0",
                fontFamily: "Proxima Nova, var(--default-font-family)",
                fontSize: "18.60416603088379px",
                fontWeight: "700",
                lineHeight: "24.806px",
                color: "#0d0f52",
                position: "relative",
                textAlign: "left",
                whiteSpace: "nowrap",
                zIndex: "2",
              }}
            >
              Auto Investment
            </span>
            <div
              style={{
                display: "flex",
                width: "57.247px",
                gap: "7.442px",
                alignItems: "center",
                flexShrink: "0",
                flexWrap: "nowrap",
                position: "relative",
                zIndex: "68",
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: "25px",
                  height: "13px",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flexShrink: "0",
                  flexBasis: "auto",
                  fontFamily: "Proxima Nova, var(--default-font-family)",
                  fontSize: "8.681944847106934px",
                  fontWeight: "400",
                  opacity: "0.5",
                  lineHeight: "12.403px",
                  color: "#0d0f52",
                  letterSpacing: "0.13px",
                  position: "relative",
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  zIndex: "69",
                }}
              >
                Active
              </span>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  width: "fit-content",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_475)">
                    <rect
                      x="1.19545"
                      y="1.09758"
                      width="24.1854"
                      height="14.2632"
                      rx="7.1316"
                      fill="#80CB17"
                      stroke="#80CB17"
                      strokeWidth="0.620139"
                    />
                    <circle
                      cx="18.2493"
                      cy="8.22917"
                      r="7.1316"
                      fill="white"
                      stroke="#80CB17"
                      strokeWidth="0.620139"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_475">
                      <rect
                        width="24.8056"
                        height="14.8833"
                        fill="white"
                        transform="translate(0.885376 0.787506)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
 )
    
}