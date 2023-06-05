import { Box, Dialog, useMediaQuery } from "@mui/material";
import { TabsComponent } from "../../components/common/tabs";
import { PhotoTab } from "./photoTab";
import { Team } from "./teamTab";
import { TermsAndCondition } from "./termsAndConditionTab";
import { AboutUS } from "./aboutUsTab";
import { PackageInfo } from "./packageInfo";
import { useState } from "react";
import { PackageDetailsMainBox } from "./packageDetails.styles";
const teamUrl = import.meta.env.VITE_APP_TEAM_PDF;
const teamFileName = "Team";

const images = [
  "https://picsum.photos/id/15/800/700",
  "https://picsum.photos/id/25/400/100",
  "https://picsum.photos/id/40/200/200",
  "https://picsum.photos/id/58/200/200",
  "https://picsum.photos/id/41/800/200",
  "https://picsum.photos/id/61/500/200",
  "https://picsum.photos/id/77/200/200",
  "https://picsum.photos/id/91/500/500",
  "https://picsum.photos/id/90/500/500",
  "https://picsum.photos/id/100/500/500",
  "https://picsum.photos/id/190/500/500",
];

const individualData = {
  name: "Dr. Ramya",
  link: "www.dr.ramya.com",
  experience: "12 Yr. of exp",
  phone: "0123456789",
  address: "Yeshwantpura, Bangalore",
  image: "https://picsum.photos/id/100/200/200",
  designation: "BDS MDS - Naturopathy and Ayurveda",
  photos: [
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
    "https://picsum.photos/5000/3333",
  ],
  awards: ["https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300"],
  description:
    "Discover nature's way of healing with harmony at the Jiva Spa. The wisdom gathered from centuries of studies on wellness. The skilled hands of our trained therapists. This internationally renowned centre for wellness soothes yet invigorates your mind, body and soul.",
  Specialties: [
    { name: "Ayurveda", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Unani", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
  ],
  Amenities: [
    { name: "Ayurveda", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Unani", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Ayurveda", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Unani", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Ayurveda", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Unani", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Ayurveda", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Unani", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Ayurveda", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Unani", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Ayurveda", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
    { name: "Unani", src: "https://picsum.photos/300/300" },
    { name: "Meditation", src: "https://picsum.photos/300/300" },
  ],
};

const headerData = {
  logo: "https://picsum.photos/300/300",
  info: {
    name: "Hatha Yoga Package",
    type: "Back Pain",
    sessionDuration: 45,
    duration: 5,
    session: 3,
    validFor: 1,
    specialties: ["Ayurveda", "Yoga", "Meditation"],
    person: 1,
  },
  awards: ["https://picsum.photos/300/300", "https://picsum.photos/300/300", "https://picsum.photos/300/300"],
};

const descriptionData =
  "Lorem ipsum dolor sit amet consectetur. In risus pellentesque egestas elementum tellus. Tristique tellus augue a maecenas si t. Vitae gravida eu leo enim mattis vel pellentesque lorem in.Lorem ipsum dolor sit amet consectetur. In risus pellentesque egestas elementum tellus. Tristique tellus augue a maecenas sit. Vitae gravida eu leo enim ";

const packageInfoData = {
  address: "Bangalore, Indra Nagar 100ft road",
  serviceType: [
    { imgSrc: "https://picsum.photos/300/300", text: "Online" },
    { imgSrc: "https://picsum.photos/300/300", text: "Offline" },
    { imgSrc: "https://picsum.photos/300/300", text: "At your door step" },
  ],
  genders: ["For All", "Women Only", "Men Only", "Kids friendly"],
  freeCancellation: true,
};

// some long description for the program
const programListData = [
  "Eat well. Fresh foods are preferable.",
  "Get quality sleep.",
  "Use good body mechanics",
  "Use good ergonomics when sitting at your  computer at home or work",
  "Warm up or stretch before exercising or other physical activities",
];

const bestPracticesData = [
  "Eat well. Fresh foods are preferable.",
  "Get quality sleep.",
  "Use good body mechanics",
  "Use good ergonomics when sitting at your  computer at home or work",
  "Warm up or stretch before exercising or other physical activities",
];

const specialtiesData = [
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Yoga", imgSrc: "https://picsum.photos/300/300" },
  { name: "Meditation", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Meditation", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Meditation", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
];

const amenitiesData = [
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Yoga", imgSrc: "https://picsum.photos/300/300" },
  { name: "Meditation", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Yoga", imgSrc: "https://picsum.photos/300/300" },
  { name: "Meditation", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Yoga", imgSrc: "https://picsum.photos/300/300" },
  { name: "Meditation", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
  { name: "Ayurveda", imgSrc: "https://picsum.photos/300/300" },
];

const termsAndConditionUrl = import.meta.env.VITE_APP_TERM_AND_CONDITION_PDF;
const termsAndConditionFileName = "Terms and Condition";

export const PackageDetails = () => {
  const [modalOpen, setModal] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [value, setValue] = useState(0);
  const tab = [
    {
      label: "Package Details",
      content: (
        <PackageInfo
          header={headerData}
          description={descriptionData}
          packageInfo={packageInfoData}
          programList={programListData}
          bestPractices={bestPracticesData}
          specialties={specialtiesData}
          amenities={amenitiesData}
        />
      ),
    },
    {
      label: "About Us",
      content: <AboutUS setValue={setValue} individualData={individualData} />,
    },
    { label: "Team", content: <Team url={teamUrl} fileName={teamFileName} /> },
    { label: "Photos", content: <PhotoTab images={images} /> },
    {
      label: "Terms & Conditions",
      content: <TermsAndCondition url={termsAndConditionUrl} fileName={termsAndConditionFileName} />,
    },
  ];
  return (
    <>
      {!isSmallScreen ? (
        <PackageDetailsMainBox>
          <TabsComponent tabs={tab} setValue={setValue} value={value} />
        </PackageDetailsMainBox>
      ) : (
        <Dialog fullScreen open={modalOpen} onClose={() => setModal((prev) => !prev)}>
          <TabsComponent tabs={tab} setValue={setValue} value={value} />
        </Dialog>
      )}
    </>
  );
};
