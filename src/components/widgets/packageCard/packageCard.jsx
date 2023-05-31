import { Box, Button, Card, IconButton, styled } from "@mui/material";

import verified from "../../../assets/icons/verified.svg";
import thumbsUp from "../../../assets/icons/ThumbsUp.svg";
import heart from "../../../assets/icons/Heart.svg";
import { useState } from "react";
import {
  ButtonContainer,
  LikeContainer,
  DetailsContainer,
  Container,
  HeroContainerPackage,
  BodyContainer,
  CostContainer,
  HeroContainerIndividual,
} from "./packageCard.styles";
export const PackageCard = ({ isIndividual, individualData, packageData, type, cost, details }) => {
  const [open, setOpen] = useState(false);
  // callback for heart click
  const handleHeartClick = () => {
    console.log("heart clicked");
  };
  const handleEnquiryClick = () => {
    setOpen((current) => !current);
  };

  return (
    <Container>
      <div className="package-card-top">
        {isIndividual ? (
          <IndividualCardHero individualData={individualData} />
        ) : (
          <PackageCardHero packageData={packageData} />
        )}
        <span className="package-card-type">{type}</span>
        {isIndividual ? (
          <IndividualCardBody individualData={individualData} />
        ) : (
          <PackageCardBody packageData={packageData} />
        )}
        <CostSection cost={cost} />
        <DetailsContainer>
          {details.days} Days / {details.sessions} Sessions
        </DetailsContainer>
      </div>
      <div>
        <LikeContainer>
          <div>
            <img src={thumbsUp} />
            12 interested
          </div>
          <IconButton onClick={handleHeartClick}>
            <img src={heart} />
          </IconButton>
        </LikeContainer>
        <ButtonContainer>
          <Button disableRipple>Details</Button>
          <Button disableRipple onClick={handleEnquiryClick}>
            +Enquiry
          </Button>
        </ButtonContainer>
      </div>
    </Container>
  );
};

const PackageCardHero = ({ packageData }) => {
  return (
    <HeroContainerPackage imageUrl={packageData?.imgUrl}>
      <div>
        {packageData?.awards?.map((award, index) => {
          return <img key={index} src={award} height="45px" width="45px" />;
        })}
      </div>
      <img src={packageData?.logoUrl}></img>
    </HeroContainerPackage>
  );
};

const IndividualCardHero = ({ individualData }) => {
  return (
    <HeroContainerIndividual>
      <div>
        <img src={individualData?.imgUrl} height={108} width={108}></img>
        {individualData?.isVerified && (
          <span>
            <img src={verified} /> <p>Verified</p>
          </span>
        )}
      </div>
    </HeroContainerIndividual>
  );
};

const PackageCardBody = ({ packageData }) => {
  return (
    <BodyContainer>
      <h3>{packageData?.name}</h3>
      <p>{packageData?.description}</p>
    </BodyContainer>
  );
};

const IndividualCardBody = ({ individualData }) => {
  return (
    <BodyContainer>
      <h3>
        {individualData?.name} {individualData?.exp && <p>{`${individualData?.exp} yr. of exp`}</p>}
      </h3>
      <p>{individualData?.description}</p>
    </BodyContainer>
  );
};

const CostSection = ({ cost }) => {
  return (
    <CostContainer>
      {cost?.discount ? (
        <>
          <span>₹{cost?.price}</span> <span className="greyed-out-text">₹{cost?.basePrice}</span>
        </>
      ) : (
        <span>₹{cost?.basePrice}</span>
      )}
      {cost?.discount && (
        <div>
          {cost?.discount}% OFF <sup>*</sup>
        </div>
      )}
    </CostContainer>
  );
};
