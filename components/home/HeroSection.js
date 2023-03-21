import * as React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const HeroSectionDiv = styled.div`
  width: 100%;
  text-align: center;

  img {
    max-width: 160px;
    height: auto;
  }

  .no-affiliation-tx {
    color: var(--top-no-affiliation-color);
  }

  .affiliation-div {
    text-align: left;
  }

  h1 {
    font-size: 10rem;
    font-weight: 500;
    line-height: 100%;
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 100%;
    color: var(--top-gpt-color);
  }

  p {
    font-weight: 500;
    color: var(--p-color);
    font-size: 1.2rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionDiv>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopMiddle />
          </Grid>

          <Grid item xs={12}>
            <MiddleMiddle />
          </Grid>

          <Grid item xs={12}>
            <BottomMiddle />
          </Grid>
        </Grid>
      </Container>
    </HeroSectionDiv>
  );
};

function TopMiddle() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Image src="/img/flag.png" alt="img" width={500} height={500} />
      </div>

      <div>
        <h1 className="top-sec-light">SEC</h1>
        <h4>GPT</h4>
      </div>

      <div className="affiliation-div">
        <p>
          U.S SECURITIES AND <br /> EXCHANGE COMMISSION
        </p>
        <p className="no-affiliation-tx">{`(NO AFFILIATION)`}</p>
      </div>
    </Box>
  );
}

function MiddleMiddle() {
  return (
    <div>
      <p>
        {`“`}What if you could ask the SEC about everything compliance{`?”`}
      </p>
    </div>
  );
}

function BottomMiddle() {
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <p>
        Describe your situation or ask a question{`!`}
        <br />
        Cites specific rules and exemptions from the{" "}
        <span className="fixed-sec-glossary">SEC Glossary</span>
      </p>
    </div>
  );
}

export default HeroSection;
