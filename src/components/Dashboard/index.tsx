import "./index.css";
import Navbar from "../Navbar";
import Outlet from "../Outlet";

export default function Main() {
  return (
    <div
      style={{
        width: "70%",
        height: "960px",
        position: "relative",
        overflow: "hidden",
        margin: "0px auto ",
        background: "#fff",
        borderRadius: 40,
      }}
      className="main-container"
    >
      <div
        style={{
          width: "100%",
          height: "879.357px",
          borderRadius: "40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* side bar */}
        <div
          style={{
            width: "223.25px",
            height: "558.125px",
            position: "absolute",
            top: "0",
            left: "0",
            overflow: "hidden",
            zIndex: "105",
            borderRight: "1px solid #E5E5F3"
          }}
        >
          <div
            style={{
              width: "0.62px",
              height: "558.125px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              top: "0",
              left: "222.63px",
              zIndex: "184",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "27.286px",
              bottom: "0",
              left: "-1px",
              right: "0.62px",
              zIndex: "180",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "9.455px",
                paddingLeft: "40.31px",
                flexShrink: 0,
              }}
            >
              <svg
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.0882 1.4514C20.6419 3.00512 20.6419 5.52417 19.0881 7.07786L17.5189 8.64712C17.0345 9.13147 17.0345 9.91678 17.5189 10.4011L20.9926 13.8749C22.5463 15.4286 22.5463 17.9477 20.9926 19.5014C19.4389 21.0551 16.9198 21.0551 15.3661 19.5014L8.20214 12.3373C7.45602 11.5912 7.03686 10.5792 7.03687 9.52408C7.03687 8.46891 7.45604 7.45696 8.20216 6.71085L13.4617 1.45136C15.0154 -0.102333 17.5345 -0.102314 19.0882 1.4514Z"
                  fill="url(#paint0_radial_432_45)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.89523 8.3569C3.44891 6.80317 5.96794 6.80315 7.52164 8.35686L14.6856 15.5209C15.4318 16.267 15.8509 17.279 15.8509 18.3342C15.8509 19.3894 15.4317 20.4013 14.6856 21.1475L9.42605 26.407C7.87234 27.9607 5.35331 27.9606 3.79965 26.4069C2.24598 24.8531 2.24602 22.3341 3.79974 20.7804L5.36897 19.2112C5.85333 18.7268 5.85333 17.9415 5.36897 17.4571L1.89527 13.9834C0.341566 12.4297 0.34155 9.91062 1.89523 8.3569Z"
                  fill="#4BDFFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6023 19.7193C15.5214 19.6504 15.4427 19.5777 15.3663 19.5013L8.20226 12.3373C7.45614 11.5911 7.03698 10.5792 7.03699 9.52402C7.03699 9.04661 7.1228 8.57805 7.28588 8.13895C7.36671 8.20783 7.44545 8.28047 7.52184 8.35687L14.6859 15.5209C15.432 16.267 15.8511 17.279 15.8511 18.3342C15.8511 18.8116 15.7653 19.2802 15.6023 19.7193Z"
                  fill="#2D91FE"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_432_45"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(16.0357 16.5101) rotate(-84.6107) scale(16.2961 102.046)"
                  >
                    <stop stopColor="#2DADFE" />
                    <stop offset="1" stopColor="#2D91FE" />
                  </radialGradient>
                </defs>
              </svg>
              Lendo
            </div>

            <div
              style={{
                display: "flex",
                width: "222.63px",
                height: "262.939px",
                padding: "31.007px 49.611px 31.007px 49.611px",
                flexDirection: "column",
                gap: "24.806px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                position: "relative",
                overflow: "hidden",
                zIndex: "126",
                margin: "240.614px 0 0 1px",
              }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="109"
                  height="91"
                  viewBox="0 0 109 91"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_544)">
                    <mask
                      id="mask0_1_544"
                      style={{
                        maskType: "alpha",
                      }}
                      maskUnits="userSpaceOnUse"
                      x="9"
                      y="19"
                      width="91"
                      height="72"
                    >
                      <path
                        d="M9.24945 19.7028H99.2316V90.0266H9.24945V19.7028Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_1_544)">
                      <path
                        d="M86.7676 90.0261C97.6821 77.8714 100.969 67.453 98.3642 63.2361C95.0775 57.9029 92.4729 60.0734 87.6978 56.7246C77.2795 49.469 87.6358 42.4614 83.977 38.8646C77.2175 32.0431 70.2099 49.9651 62.2721 43.8258C56.7529 39.5468 63.4504 33.7795 62.2721 27.5161C59.9776 14.8653 44.0401 19.5783 39.203 27.5161C34.3039 35.5159 32.3194 46.8644 18.2423 48.1047C10.1185 48.8489 2.2427 61.4997 19.6686 68.8173C27.6064 72.1661 10.9867 80.0419 19.0485 90.0261H86.7676Z"
                        fill="#EFF1FE"
                      />
                    </g>
                    <path
                      d="M70.8416 49.978C70.4695 51.6524 69.8494 53.2648 69.3533 54.9391C68.8572 56.6135 68.3611 58.3499 68.3611 60.1483C68.3611 62.4428 69.2913 64.7373 70.8416 66.4117C71.4618 67.0939 72.2059 67.652 72.64 68.3962C73.1361 69.1403 73.3222 70.1946 72.7641 70.9387C72.0199 71.993 70.3455 71.7449 69.2293 72.4271C67.8029 73.2332 67.6169 75.3417 68.4231 76.768C69.2293 78.1943 72.8881 82.2873 78.1593 81.233C80.5158 80.7989 83.6785 78.5664 83.6165 76.1479C83.4925 73.6673 81.1359 71.6829 81.1979 69.1403C81.26 67.528 82.3762 66.1637 83.3064 64.7994C84.2366 63.4971 85.1668 61.8847 84.7327 60.2723C84.1126 57.9778 81.0739 57.2337 79.6476 55.3112C78.7174 54.0709 78.5313 52.4586 78.4693 50.9082C78.4073 49.3579 78.4693 47.8075 77.9112 46.3192C76.7329 42.9084 72.33 43.3425 70.8416 49.978Z"
                      fill="#9FA8ED"
                    />
                    <path
                      d="M76.2998 85.6365H76.5479V58.8465H76.2998V85.6365Z"
                      fill="#7880EF"
                    />
                    <path
                      d="M76.4849 66.5977L76.2368 66.5357C76.6089 64.1172 79.3996 62.6289 79.5236 62.5668L79.6476 62.7529C79.6476 62.8149 76.919 64.3032 76.4849 66.5977Z"
                      fill="#7880EF"
                    />
                    <path
                      d="M76.2989 77.1401C76.0508 75.5278 74.0664 74.4115 74.0664 74.4115L74.1904 74.2255C74.2524 74.2875 76.2989 75.3417 76.5469 77.1401H76.2989Z"
                      fill="#7880EF"
                    />
                    <path
                      d="M77.7881 90.3491H74.9975C73.3231 90.3491 71.9588 88.9848 71.9588 87.3104V84.7058H80.8888V87.2484C80.8268 88.9848 79.4625 90.3491 77.7881 90.3491Z"
                      fill="#9FA8ED"
                    />
                    <path
                      d="M71.8959 85.76H80.8259V85.512H71.8959V85.76Z"
                      fill="white"
                    />
                    <path
                      d="M97.1346 40.6762L94.592 43.2808L91.9874 40.6762L94.53 38.1336L97.1346 40.6762Z"
                      stroke="#9FA8ED"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M61.6636 0.987061V2.10331"
                      stroke="#9FA8ED"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M61.6636 4.83191V5.94816"
                      stroke="#9FA8ED"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M64.1441 3.46761H63.0279"
                      stroke="#9FA8ED"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M60.2993 3.46761H59.183"
                      stroke="#9FA8ED"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M27.6189 3.65414L29.1693 9.48345L33.4482 5.20449L27.6189 3.65414Z"
                      stroke="#9FA8ED"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M1.26303 38.0096L1.32504 34.9709L4.36373 34.9089V31.9322L7.40241 31.8702L7.46442 28.8315"
                      stroke="#9FA8ED"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M1.9442 65.7915C2.62918 65.7915 3.18447 65.2363 3.18447 64.5513C3.18447 63.8663 2.62918 63.311 1.9442 63.311C1.25921 63.311 0.703918 63.8663 0.703918 64.5513C0.703918 65.2363 1.25921 65.7915 1.9442 65.7915Z"
                      stroke="#9FA8ED"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M29.7271 17.1723C27.2466 15.6839 20.9832 17.9784 18.1925 21.3272C14.2857 25.9782 17.3243 33.4819 20.8591 34.1021C25.0141 34.8462 31.5255 26.5364 31.1534 20.1489C31.0914 18.9087 30.5953 17.6684 29.7271 17.1723Z"
                      fill="#EFF1FE"
                    />
                    <path
                      d="M37.8493 50.2256L33.2603 87.744C33.2603 87.868 33.2603 87.9301 33.2603 88.0541H36.423L42.7484 50.2256H37.8493Z"
                      fill="#FFC7BD"
                    />
                    <path
                      d="M51.3053 50.2256H46.0962L45.9101 63.7446L47.2744 87.9921V88.0541H50.4992L50.3131 63.8687L51.3053 50.2256Z"
                      fill="#FFC7BD"
                    />
                    <path
                      d="M46.9033 88.4264V89.9148H52.0504C52.2985 89.9148 52.5466 89.7287 52.5466 89.4187C52.5466 89.2326 52.4225 89.1086 52.2985 88.9845L50.4381 87.9923H47.2754C47.0893 87.9923 46.9033 88.1784 46.9033 88.4264Z"
                      fill="#40327A"
                    />
                    <path
                      d="M35.9888 87.9923H33.1982L31.3378 88.9845C31.2138 89.0466 31.0898 89.2326 31.0898 89.4187C31.0898 89.6667 31.2758 89.9148 31.5859 89.9148H36.733V88.5505C36.733 88.2404 36.485 87.9923 36.1749 87.9923C36.1129 87.9923 35.9888 88.0543 35.9888 87.9923Z"
                      fill="#40327A"
                    />
                    <path
                      d="M41.075 23.188L42.0052 15.0642L51.6173 14.258L49.6329 23.9322L41.075 23.188Z"
                      fill="#9FA8ED"
                    />
                    <path
                      d="M48.7149 16.0937L44.0202 15.6793L43.3604 23.1537L48.0551 23.5681L48.7149 16.0937Z"
                      fill="#FFC7BD"
                    />
                    <path
                      d="M51.5543 13.3283C51.5543 12.9563 51.4303 12.5842 51.3063 12.2741L48.1436 12.3981C47.2754 12.3981 46.5312 12.0881 45.9731 11.5299L46.0971 15.6849C46.0971 16.305 46.6552 16.8011 47.2754 16.8011L51.8024 16.6151L51.6164 14.2585L51.5543 13.3283Z"
                      fill="#FFC7BD"
                    />
                    <path
                      d="M48.1445 10.1031H46.7802C46.0361 10.1031 45.4159 10.5992 45.1679 11.2193V11.2814V11.3434L43.9896 14.4441C43.4315 14.5061 42.9974 15.0022 43.0594 15.5603C43.1214 16.1184 43.6175 16.5525 44.1757 16.4905L45.2299 17.5448V18.599C45.2919 20.3974 46.7802 21.7617 48.5786 21.6377L50.9352 21.4516C51.6793 21.3896 52.2375 20.7075 52.1754 19.9633L51.6173 13.0177C51.3693 11.1573 49.8809 10.0411 48.1445 10.1031Z"
                      fill="#FFC7BD"
                    />
                    <path
                      d="M43.9276 14.4441C44.5477 14.4441 44.9818 14.8781 45.0439 15.4363V15.7463L45.1679 18.9711C45.2299 20.5214 46.5322 21.6997 48.0205 21.6377H48.4546L50.7491 21.5756C51.5553 21.5756 52.1755 20.8935 52.0514 20.0873L51.9274 18.723V18.4129L51.8034 16.7386L47.2764 16.9246C46.6562 16.9246 46.0981 16.4285 46.0981 15.8084L46.2221 11.6534C46.2221 11.3434 43.8036 10.5372 43.8656 12.4596C43.8656 12.3356 43.3695 14.4441 43.9276 14.4441Z"
                      fill="url(#paint0_linear_1_544)"
                    />
                    <path
                      d="M51.6173 13.6999C51.6173 13.4518 51.5553 13.2038 51.4933 12.9557C51.4313 12.7077 51.4313 12.5216 51.3693 12.2736C51.3693 12.2116 51.3693 12.2116 51.3073 12.1496C51.2452 12.0875 51.1212 12.0875 50.9972 12.0875C50.8732 12.0875 50.7491 12.0875 50.6871 12.0875C50.5011 12.0875 50.315 12.0875 50.129 12.0875C49.7569 12.0875 49.3848 12.0875 49.0127 12.0875C48.3306 12.0875 47.6484 12.1496 46.9663 12.2116C46.7182 12.2116 46.4082 12.2736 46.2221 12.3976C45.85 12.7077 45.726 13.3278 45.602 13.6999C45.602 13.7619 45.4779 14.072 45.4159 14.32C43.8036 14.4441 42.4393 13.2038 42.3152 11.6534V11.4674C42.3152 11.4054 42.3152 11.3434 42.3152 11.3434C42.2532 9.79302 43.4315 8.49073 44.9818 8.3667L45.4779 8.30469L49.6949 7.99462H49.9429C51.3072 7.87059 52.5475 8.8008 52.9196 10.0411C52.9816 10.2271 53.0436 10.4132 53.0436 10.6612V10.8473C53.1677 12.0875 52.5475 13.1418 51.6173 13.6999Z"
                      fill="#E4ECFF"
                    />
                    <path
                      d="M55.7102 40.2418C54.47 40.862 52.9816 40.4899 52.2375 39.3116L46.8423 30.5056C46.3461 29.6995 46.2841 28.6452 46.7802 27.839L48.4546 24.7384C49.0127 23.8702 50.067 23.4981 51.0592 23.8081C51.7414 24.0562 52.2995 24.6143 52.5475 25.2965L56.8885 37.0791C57.3846 38.2574 56.8265 39.6217 55.7102 40.2418Z"
                      fill="#9FA8ED"
                    />
                    <path
                      d="M51.4321 46.9396L53.0445 26.413C53.1685 24.9247 51.9903 23.6224 50.4399 23.5604L39.5255 23.3743C37.9131 23.3743 36.6108 24.6766 36.6728 26.289L37.8511 46.5675H37.7891L33.076 86.3184C33.014 86.6285 33.2621 86.8766 33.5721 86.8766L43.5564 86.1324L52.0523 87.1246C52.6724 87.1866 53.2306 86.6905 53.1685 86.0704L51.4321 46.9396Z"
                      fill="#9FA8ED"
                    />
                    <path
                      opacity="0.3"
                      d="M39.0905 86.4422L39.9587 75.7138L40.0827 86.3182L39.0905 86.4422Z"
                      fill="#1B3294"
                    />
                    <path
                      opacity="0.3"
                      d="M39.6496 76.0236L34.3164 75.8996L34.0063 78.8143L39.6496 76.0236Z"
                      fill="#1B3294"
                    />
                    <path
                      opacity="0.3"
                      d="M45.3539 86.1321L43.8656 68.0241L43.6795 86.0081L45.3539 86.1321Z"
                      fill="#1B3294"
                    />
                    <path
                      d="M47.1523 12.2116C46.9043 12.2116 46.5322 12.3976 46.2841 12.5216C45.912 12.8317 45.788 13.4518 45.664 13.8859C45.664 13.948 45.54 14.258 45.4779 14.5061L43.1834 28.8313C43.1214 29.2034 42.6253 29.2034 42.5013 28.8933L41.5711 26.1027L39.3386 23.064L42.3152 12.0875C42.3152 11.9015 42.3152 11.7155 42.3152 11.5294C42.5633 9.66899 48.5166 12.0255 47.1523 12.2116Z"
                      fill="#E4ECFF"
                    />
                    <path
                      d="M52.9816 11.2193L42.5013 11.7775C42.3153 11.7775 42.1912 11.6534 42.1912 11.4674C42.1912 11.2813 42.3153 11.1573 42.5013 11.1573L52.9816 10.5992C53.1677 10.5992 53.2917 10.7232 53.2917 10.9093C53.2917 11.0953 53.1677 11.2193 52.9816 11.2193Z"
                      fill="url(#paint1_linear_1_544)"
                    />
                    <path
                      d="M53.6027 56.0557C53.5407 55.7456 53.6027 55.4975 53.6648 55.2495L55.0291 52.955L54.967 53.265L55.0911 52.5209L56.8275 52.2108V53.203C56.8275 53.265 56.8275 53.265 56.8275 53.265L56.5794 55.9316C56.5174 56.6138 56.0213 57.1719 55.3391 57.2959C54.533 57.42 53.7268 56.8618 53.6027 56.0557Z"
                      fill="#FFC7BD"
                    />
                    <path
                      d="M56.8885 53.0167L56.9505 52.0865L55.0281 52.0245V53.0167H56.8885Z"
                      fill="white"
                    />
                    <path
                      d="M56.9505 52.2105L54.9661 52.3346L52.2995 39.5597C51.9894 38.1334 52.9196 36.7071 54.4079 36.459C55.9583 36.2109 57.3846 37.3892 57.4466 39.0016L56.9505 52.2105Z"
                      fill="#9FA8ED"
                    />
                    <path
                      d="M49.9991 18.9019C50.1693 18.8831 50.2829 18.647 50.2528 18.3747C50.2227 18.1023 50.0603 17.8968 49.8901 17.9156C49.7199 17.9344 49.6063 18.1704 49.6364 18.4428C49.6665 18.7151 49.8288 18.9207 49.9991 18.9019Z"
                      fill="white"
                    />
                    <path
                      opacity="0.3"
                      d="M42.1292 30.4436L36.858 31.6219L37.6022 44.5828L42.1292 30.4436Z"
                      fill="#1B3294"
                    />
                    <path
                      d="M42.6253 75.9619H24.5173C22.9049 75.9619 21.5406 74.6596 21.5406 72.9852V61.4506C21.5406 59.8382 22.8429 58.4739 24.5173 58.4739H42.6253C44.2377 58.4739 45.602 59.7762 45.602 61.4506V72.9232C45.602 74.5976 44.2377 75.9619 42.6253 75.9619Z"
                      fill="url(#paint2_linear_1_544)"
                    />
                    <path
                      d="M37.0431 59.0321H35.9268V57.8538C35.9268 57.3577 35.4927 56.9236 34.9966 56.9236H32.206C31.7099 56.9236 31.2758 57.3577 31.2758 57.8538V58.97H30.1595V57.8538C30.1595 56.7375 31.0898 55.8073 32.206 55.8073H34.9966C36.1129 55.8073 37.0431 56.7375 37.0431 57.8538V59.0321Z"
                      fill="url(#paint3_linear_1_544)"
                    />
                    <path
                      d="M43.0604 67.4662H24.1461C22.7198 67.4662 21.6036 66.3499 21.6036 64.9236V61.0788C21.6036 59.6524 22.7198 58.5362 24.1461 58.5362H43.0604C44.4867 58.5362 45.6029 59.6524 45.6029 61.0788V64.9236C45.6029 66.3499 44.4867 67.4662 43.0604 67.4662Z"
                      fill="url(#paint4_linear_1_544)"
                    />
                    <path
                      d="M33.9434 68.7062H33.1992C32.7031 68.7062 32.269 68.2721 32.269 67.776V67.0318C32.269 66.5357 32.7031 66.1016 33.1992 66.1016H33.9434C34.4395 66.1016 34.8736 66.5357 34.8736 67.0318V67.776C34.8736 68.2721 34.5015 68.7062 33.9434 68.7062Z"
                      fill="url(#paint5_linear_1_544)"
                    />
                    <path
                      d="M34.9356 56.9236C35.0596 56.6755 35.0596 56.3655 35.0596 56.0554L34.1914 53.5128V53.8229L34.2534 53.0787L32.6411 52.3966L32.393 53.3888V53.4508L32.0209 56.1174C31.9589 56.7996 32.269 57.4197 32.8891 57.7298C33.6953 58.0398 34.6255 57.6678 34.9356 56.9236Z"
                      fill="#FFC7BD"
                    />
                    <path
                      d="M34.4395 53.3268L34.6255 52.2105L32.269 52.2725L32.331 53.3888L34.4395 53.3268Z"
                      fill="white"
                    />
                    <path
                      d="M33.014 40.3664C34.1922 41.0486 35.7426 40.6145 36.4247 39.4982L41.944 30.7543C42.4401 29.9481 42.5021 28.8939 42.068 28.0877L40.4556 24.987C39.9595 24.1188 38.8433 23.6847 37.851 24.0568C37.1689 24.3048 36.6108 24.801 36.3627 25.4831L31.8357 37.2037C31.3396 38.382 31.8357 39.7463 33.014 40.3664Z"
                      fill="#9FA8ED"
                    />
                    <path
                      d="M32.084 52.3967L34.8126 52.2726L36.549 39.3738C36.7351 37.8854 35.6808 36.5831 34.2545 36.4591C32.7042 36.3351 31.3399 37.5754 31.4019 39.1877L32.084 52.3967Z"
                      fill="#9FA8ED"
                    />
                    <path
                      d="M0.269836 90.349H108.36V89.9149H0.269836V90.349Z"
                      fill="#EEF3FF"
                    />
                    <path
                      d="M83.2444 15.3743H69.8494V27.8391H83.2444V15.3743Z"
                      fill="white"
                      stroke="#C7CDF9"
                      strokeWidth="0.620139"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M74.0034 21.5134L75.9258 23.3738L79.6467 19.653"
                      stroke="#FF809F"
                      strokeWidth="1.24028"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_544"
                      x1="52.4515"
                      y1="16.2699"
                      x2="45.1649"
                      y2="16.3732"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5E59A6" />
                      <stop offset="1" stopColor="#40327A" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_544"
                      x1="53.2072"
                      y1="10.8928"
                      x2="42.1022"
                      y2="11.5126"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5E59A6" />
                      <stop offset="1" stopColor="#40327A" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_544"
                      x1="33.5828"
                      y1="58.991"
                      x2="33.5828"
                      y2="75.3694"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5E59A6" />
                      <stop offset="1" stopColor="#40327A" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1_544"
                      x1="37.1824"
                      y1="56.3204"
                      x2="30.2575"
                      y2="59.0336"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7C7CB5" />
                      <stop offset="1" stopColor="#5E59A6" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_1_544"
                      x1="33.5838"
                      y1="59.03"
                      x2="33.5838"
                      y2="67.1694"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7C7CB5" />
                      <stop offset="1" stopColor="#5E59A6" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_1_544"
                      x1="34.7072"
                      y1="66.3333"
                      x2="32.5367"
                      y2="68.3746"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7C7CB5" />
                      <stop offset="1" stopColor="#5E59A6" />
                    </linearGradient>
                    <clipPath id="clip0_1_544">
                      <rect
                        width="108.09"
                        height="89.362"
                        fill="white"
                        transform="translate(0.269836 0.98703)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "120.927px",
                  flexDirection: "column",
                  gap: "17.364px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  flexWrap: "nowrap",
                  position: "relative",
                  zIndex: "177",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    width: "120.927px",
                    height: "15px",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexShrink: "0",
                    flexBasis: "auto",
                    fontFamily: "Proxima Nova, var(--default-font-family)",
                    fontSize: "10.54236125946045px",
                    fontWeight: "700",
                    lineHeight: "14.883px",
                    color: "#0d0f52",
                    position: "relative",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    zIndex: "178",
                  }}
                >
                  Why Should You Trust It?
                </span>
                <span
                  style={{
                    display: "flex",
                    width: "120.927px",
                    height: "24.806px",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexShrink: "0",
                    fontFamily: "Proxima Nova, var(--default-font-family)",
                    fontSize: "8.681944847106934px",
                    fontWeight: "400",
                    opacity: "0.5",
                    lineHeight: "12.403px",
                    color: "#0d0f52",
                    letterSpacing: "0.13px",
                    position: "relative",
                    textAlign: "center",
                    zIndex: "179",
                  }}
                >
                  Because of this and that. Anyway investing is very good
                </span>
              </div>
            </div>
            <div
              style={{
                height: "213.328px",
                position: "absolute",
                top: "48.714px",
                left: "0",
                right: "1px",
                zIndex: "107",
              }}
            >
              <div
                style={{
                  width: "173.639px",
                  height: "0.62px",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url(/images/e332893c-4684-4d65-8220-fbc4a8393f73.png)",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  zIndex: "125",
                  margin: "212.708px 0 0 24.185px",
                }}
              />
              <div
                style={{
                  backgroundColor: "#ffffff",
                  position: "absolute",
                  top: "0",
                  bottom: "0.33px",
                  left: "0",
                  right: "-0.37px",
                  zIndex: "108",
                }}
              />
              <div
                style={{
                  height: "34.728px",
                  position: "absolute",
                  top: "39.689px",
                  left: "39.689px",
                  right: "39.319px",
                  overflow: "hidden",
                  zIndex: "109",
                }}
              >
                <div
                  style={{
                    width: "34.728px",
                    height: "34.728px",
                    position: "absolute",
                    top: "-1.24px",
                    left: "0.62px",
                    overflow: "hidden",
                    zIndex: "110",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                  >
                    <rect
                      x="5.89028"
                      y="9.37084"
                      width="23.5653"
                      height="17.3639"
                      rx="0.620139"
                      stroke="#2D91FE"
                      strokeWidth="1.24028"
                    />
                    <path
                      d="M20.1535 9.37084L15.3962 5.14217C14.9263 4.72446 14.2181 4.72446 13.7482 5.14217L8.99097 9.37084"
                      stroke="#2D91FE"
                      strokeWidth="1.24028"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.3549 15.5722H23.8743C23.1893 15.5722 22.634 16.1275 22.634 16.8125V19.2931C22.634 19.9781 23.1893 20.5333 23.8743 20.5333H26.3549"
                      stroke="#2D91FE"
                      strokeWidth="1.24028"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    height: "32.844px",
                    position: "absolute",
                    top: "0",
                    left: "40.309px",
                    right: "-0.25px",
                    zIndex: "114",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "103.563px",
                      flexDirection: "column",
                      gap: "1.24px",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      position: "relative",
                      zIndex: "112",
                      margin: "0 0 0 0",
                    }}
                  >
                    <span
                      style={{
                        height: "20px",
                        flexShrink: "0",
                        flexBasis: "auto",
                        fontFamily: "Proxima Nova, var(--default-font-family)",
                        fontSize: "14.883333206176758px",
                        fontWeight: "700",
                        lineHeight: "19.844px",
                        color: "#0d0f52",
                        position: "relative",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        zIndex: "113",
                      }}
                    >
                      62,540 SAR
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "103.563px",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      position: "relative",
                      zIndex: "114",
                      margin: "-0.16px 0 0 0",
                    }}
                  >
                    <span
                      style={{
                        height: "13px",
                        flexShrink: "0",
                        flexBasis: "auto",
                        fontFamily: "Proxima Nova, var(--default-font-family)",
                        fontSize: "8.681943893432617px",
                        fontWeight: "400",
                        lineHeight: "12.403px",
                        color: "#0d0f52",
                        position: "relative",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        zIndex: "115",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      Account Balance
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                      >
                        <g opacity="0.3">
                          <path
                            d="M4.60782 2.5528L7.08837 5.03335L4.60782 7.51391"
                            stroke="#0D0F52"
                            strokeWidth="1.24028"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "30.364px",
                  gap: "4.961px",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  position: "absolute",
                  top: "89.3px",
                  left: "39.689px",
                  right: "38.699px",
                  zIndex: "120",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    minWidth: "0",
                    padding: "8.682px 14.883px 8.682px 14.883px",
                    flexDirection: "column",
                    gap: "6.201px",
                    alignItems: "center",
                    flexGrow: "1",
                    flexShrink: "0",
                    flexBasis: "0",
                    flexWrap: "nowrap",
                    backgroundColor: "#2d91fe",
                    borderRadius: "26.046px",
                    border: "none",
                    position: "relative",
                    zIndex: "121",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      width: "30px",
                      height: "13px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexShrink: "0",
                      flexBasis: "auto",
                      fontFamily: "Proxima Nova, var(--default-font-family)",
                      fontSize: "8.681943893432617px",
                      fontWeight: "600",
                      lineHeight: "12.403px",
                      color: "#ffffff",
                      position: "relative",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      zIndex: "122",
                    }}
                  >
                    Deposit
                  </span>
                </button>
                <button
                  style={{
                    display: "flex",
                    minWidth: "0",
                    padding: "8.682px 14.883px 8.682px 14.883px",
                    flexDirection: "column",
                    gap: "6.201px",
                    alignItems: "center",
                    flexGrow: "1",
                    flexShrink: "0",
                    flexBasis: "0",
                    flexWrap: "nowrap",
                    backgroundColor: "#ffffff",
                    borderRadius: "26.046px",
                    border: "0.62px solid #e5e5f3",
                    position: "relative",
                    zIndex: "123",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      height: "13px",
                      flexShrink: "0",
                      flexBasis: "auto",
                      fontFamily: "Proxima Nova, var(--default-font-family)",
                      fontSize: "8.681943893432617px",
                      fontWeight: "400",
                      lineHeight: "12.403px",
                      color: "#0d0f52",
                      letterSpacing: "0.09px",
                      position: "relative",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                      zIndex: "124",
                    }}
                  >
                    Withdraw
                  </span>
                </button>
              </div>
              <div
                style={{
                  width: "64.51%",
                  height: "20.64%",
                  position: "absolute",
                  top: "67.44%",
                  left: "17.83%",
                  zIndex: "117",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <g opacity="0.2">
                    <circle
                      cx="6.89029"
                      cy="6.31388"
                      r="5.58125"
                      stroke="#0D0F52"
                      strokeWidth="1.24028"
                    />
                    <rect
                      x="6.27045"
                      y="2.59348"
                      width="1.24028"
                      height="4.96111"
                      rx="0.620139"
                      fill="#0D0F52"
                    />
                    <rect
                      x="6.27045"
                      y="8.17465"
                      width="1.24028"
                      height="1.24028"
                      rx="0.620139"
                      fill="#0D0F52"
                    />
                  </g>
                </svg>
                <div
                  style={{
                    height: "44.03px",
                    fontFamily: "Proxima Nova, var(--default-font-family)",
                    fontSize: "8.681943893432617px",
                    fontWeight: "400",
                    opacity: "0.5",
                    lineHeight: "12.403px",
                    letterSpacing: "0.09px",
                    position: "absolute",
                    top: "0",
                    left: "19.844px",
                    right: "0px",
                    textAlign: "left",
                    zIndex: "118",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Proxima Nova, var(--default-font-family)",
                      fontSize: "8.681943893432617px",
                      fontWeight: "400",
                      lineHeight: "12.403px",
                      color: "#0d0f52",
                      letterSpacing: "0.09px",
                      position: "relative",
                      textAlign: "left",
                    }}
                  >
                    To withdraw more than
                  </span>
                  <span
                    style={{
                      fontFamily: "Proxima Nova, var(--default-font-family)",
                      fontSize: "8.681943893432617px",
                      fontWeight: "600",
                      lineHeight: "12.403px",
                      color: "#0d0f52",
                      letterSpacing: "0.09px",
                      position: "relative",
                      textAlign: "left",
                    }}
                  >
                    10,000 SAR
                  </span>
                  <span
                    style={{
                      fontFamily: "Proxima Nova, var(--default-font-family)",
                      fontSize: "8.681943893432617px",
                      fontWeight: "400",
                      lineHeight: "12.403px",
                      color: "#0d0f52",
                      letterSpacing: "0.09px",
                      position: "relative",
                      textAlign: "left",
                    }}
                  >
                    you need to
                  </span>
                  <span
                    style={{
                      fontFamily: "Proxima Nova, var(--default-font-family)",
                      fontSize: "8.681943893432617px",
                      fontWeight: "600",
                      lineHeight: "12.403px",
                      color: "#0d0f52",
                      letterSpacing: "0.09px",
                      position: "relative",
                      textAlign: "left",
                    }}
                  >
                    verify
                  </span>
                  <span
                    style={{
                      fontFamily: "Proxima Nova, var(--default-font-family)",
                      fontSize: "8.681943893432617px",
                      fontWeight: "400",
                      lineHeight: "12.403px",
                      color: "#0d0f52",
                      letterSpacing: "0.09px",
                      position: "relative",
                      textAlign: "left",
                    }}
                  >
                    your banking account.
                  </span>
                </div>
              </div>
              <div style={{
                marginLeft: "24px",
                marginRight: "24px",
                borderBottom: "1px solid #E5E5F3",
                color: "#E5E5F3",
              }} ></div>
            </div>
          </div>
        </div>

        {/* nav bar */}
        
        <Navbar/>

        {/* outLet section  */}
        <Outlet/>
      </div>
    </div>
  );
}
