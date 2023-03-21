import * as React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import EastIcon from "@mui/icons-material/East";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

const SearchSectionDiv = styled.div`
  width: 100%;
  margin-top: 40px;

  .src-inpt-container {
    border-radius: 20px;
    padding: 20px;
    background-color: var(--input-bg-color);
    border: 2px solid var(--border-color);

    .src-inpt-container-cld {
      position: relative;

      input {
        font-size: 1.2rem;
        outline: none;
        padding: 16px 16px 16px 44px;
        width: 660px;
        background-color: var(--input-bg-color);
        border: none;
        color: var(--ans-tags-color);
      }

      .srch,
      button {
        position: absolute;
        top: 0;
        right: 0;
      }

      .srch {
        margin: 20px 16px;
        top: 0;
        left: 0;
      }
    }
  }

  button {
    margin: 8px;
    padding: 12px 30px;
    border-radius: 20px;
    border: none;

    background-color: var(--button-bg-color);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    svg {
      fill: var(--button-color) !important;
    }

    color: var(--button-color) !important;
    font-size: 1.2rem;
  }

  .ans-title {
    font-size: 1.35rem;
    color: var(--ans-title-color);
    padding-left: 16px;
  }

  .middle-explain {
    margin: 10px 0;
    padding-left: 16px;

    color: var(--middle-explain-color-deep);
  }

  .middle-explain-light {
    margin: 10px 0 20px 0;
    padding-left: 16px;

    color: var(--middle-explain-color-light);

    .hilight-explain-light {
      color: var(--middle-title-color);
      font-size: 1.15rem;
    }
  }

  .ans-title-container {
    margin-top: 40px;
  }

  .ans-tags {
    cursor: pointer;

    background-color: var(--ans-tags-bg-color);
    border: 1px solid var(--border-color);
    padding: 8px 26px;
    margin: 10px 10px 10px 0;
    border-radius: 30px;

    color: var(--ans-tags-color);
  }

  .extra-radius {
    padding: 8px 40px;
    border-radius: 30px;
    border: 1px solid var(--border-color);

    color: var(--p-color);
  }
`;

const SearchSection = () => {
  return (
    <SearchSectionDiv>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="src-inpt-container">
                <div className="src-inpt-container-cld">
                  <svg
                    className="srch"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1496 21.083L12.6163 14.5497C12.0329 15.0163 11.3621 15.3858 10.6038 15.658C9.84544 15.9302 9.0385 16.0663 8.18294 16.0663C6.0635 16.0663 4.26994 15.3325 2.80228 13.8648C1.33383 12.3964 0.599609 10.6024 0.599609 8.48299C0.599609 6.36355 1.33383 4.5696 2.80228 3.10116C4.26994 1.63349 6.0635 0.899658 8.18294 0.899658C10.3024 0.899658 12.0963 1.63349 13.5648 3.10116C15.0324 4.5696 15.7663 6.36355 15.7663 8.48299C15.7663 9.33855 15.6302 10.1455 15.3579 10.9038C15.0857 11.6622 14.7163 12.333 14.2496 12.9163L20.8121 19.4788C21.026 19.6927 21.1329 19.9552 21.1329 20.2663C21.1329 20.5774 21.0163 20.8497 20.7829 21.083C20.5691 21.2969 20.2968 21.4038 19.9663 21.4038C19.6357 21.4038 19.3635 21.2969 19.1496 21.083ZM8.18294 13.733C9.64128 13.733 10.8811 13.2228 11.9023 12.2023C12.9227 11.1811 13.4329 9.94132 13.4329 8.48299C13.4329 7.02466 12.9227 5.78488 11.9023 4.76366C10.8811 3.74321 9.64128 3.23299 8.18294 3.23299C6.72461 3.23299 5.48483 3.74321 4.46361 4.76366C3.44316 5.78488 2.93294 7.02466 2.93294 8.48299C2.93294 9.94132 3.44316 11.1811 4.46361 12.2023C5.48483 13.2228 6.72461 13.733 8.18294 13.733Z"
                      fill="#7B7B7B"
                    />
                  </svg>

                  <input type="text" />

                  <button>
                    <EastIcon />
                  </button>
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth="md">
              <div className="ans-title-container">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 9.6L11 2C11 1.71667 11.0957 1.47933 11.287 1.288C11.479 1.096 11.7167 1 12 1C12.2833 1 12.521 1.096 12.713 1.288C12.9043 1.47933 13 1.71667 13 2L13 12C13 12.2833 12.9043 12.521 12.713 12.713C12.521 12.9043 12.2833 13 12 13L2 13C1.71667 13 1.47933 12.9043 1.288 12.713C1.096 12.521 1 12.2833 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.47933 11.0957 1.71667 11 2 11L9.6 11L0.700001 2.1C0.516667 1.91667 0.424999 1.68333 0.424999 1.4C0.424999 1.11667 0.516667 0.883334 0.700001 0.700001C0.883334 0.516667 1.11667 0.424999 1.4 0.424999C1.68333 0.424999 1.91667 0.516667 2.1 0.700001L11 9.6Z"
                    fill="var(--ans-title-color)"
                  />
                </svg>

                <p className="ans-title">SEC - GPT</p>
                <p className="middle-explain">
                  A Registered Investment Advisor {`(RIA)`} is an individual
                  financial advisor or advisory firm that provides investment
                  advice to clients {`[1]`} An RIA is registered with the
                  Securities and Exchange Commission {`(SEC)`} or state
                  securities regulators{`[4]`}. They advise clients on
                  securities investments and may manage their investment
                  portfolios{`[1]`}. RIAs are different from other firms that
                  may sell investment products, such as broker-dealers, because
                  they have a fiduciary duty to act in their clients' best
                  interests{`[5]`}.
                </p>
              </div>
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth="md">
              <div className="ans-title-container">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 9.6L11 2C11 1.71667 11.0957 1.47933 11.287 1.288C11.479 1.096 11.7167 1 12 1C12.2833 1 12.521 1.096 12.713 1.288C12.9043 1.47933 13 1.71667 13 2L13 12C13 12.2833 12.9043 12.521 12.713 12.713C12.521 12.9043 12.2833 13 12 13L2 13C1.71667 13 1.47933 12.9043 1.288 12.713C1.096 12.521 1 12.2833 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.47933 11.0957 1.71667 11 2 11L9.6 11L0.700001 2.1C0.516667 1.91667 0.424999 1.68333 0.424999 1.4C0.424999 1.11667 0.516667 0.883334 0.700001 0.700001C0.883334 0.516667 1.11667 0.424999 1.4 0.424999C1.68333 0.424999 1.91667 0.516667 2.1 0.700001L11 9.6Z"
                    fill="var(--ans-title-color)"
                  />
                </svg>

                <p className="ans-title">CITATIONS</p>
                <p className="middle-explain-light">
                  <span className="hilight-explain-light">
                    {`[1]`} Investment Advisers Act of 1940 {`-`}
                  </span>
                  The Investment Advisers Act regulates investment advisers.
                  With certain exceptions, the Investment Advisers Act requires
                  that firms compensated for advising others about securities
                  investments register with the SEC and comply with regulations
                  designed to protect investors. In addition, certain provisions
                  of the Investment Advisers Act, such as anti-fraud
                  prohibitions, also apply to investment advisers that are not
                  registered with the SEC.
                </p>
                <p className="middle-explain-light">
                  <span className="hilight-explain-light">
                    {`[2]`} General Solicitation {`-`}
                  </span>
                  A solicitation that conditions the market for an offering of
                  securities is generally viewed as a general solicitation that
                  is marketing the securities. Some exempt offerings prohibit
                  the use of general solicitation to market the securities.
                </p>
              </div>
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth="md">
              <div className="ans-title-container">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 9.6L11 2C11 1.71667 11.0957 1.47933 11.287 1.288C11.479 1.096 11.7167 1 12 1C12.2833 1 12.521 1.096 12.713 1.288C12.9043 1.47933 13 1.71667 13 2L13 12C13 12.2833 12.9043 12.521 12.713 12.713C12.521 12.9043 12.2833 13 12 13L2 13C1.71667 13 1.47933 12.9043 1.288 12.713C1.096 12.521 1 12.2833 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.47933 11.0957 1.71667 11 2 11L9.6 11L0.700001 2.1C0.516667 1.91667 0.424999 1.68333 0.424999 1.4C0.424999 1.11667 0.516667 0.883334 0.700001 0.700001C0.883334 0.516667 1.11667 0.424999 1.4 0.424999C1.68333 0.424999 1.91667 0.516667 2.1 0.700001L11 9.6Z"
                    fill="var(--ans-title-color)"
                  />
                </svg>

                <p className="ans-title">SAMPLE QUESTIONS</p>
              </div>
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth="md">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  paddingLeft: "16px",
                }}
              >
                <p className="ans-tags">Who are some famous RIAs{`?`}</p>
                <p className="ans-tags">
                  What{`’`}s the difference between RIA and EAR{`?`}
                </p>
                <p className="ans-tags">
                  Do I need to be an RIA to start a fund{`?`}
                </p>
                <p className="ans-tags">
                  What exam do I take to be an RIA{`?`}
                </p>
              </div>
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "40px 0",
              }}
            >
              <button className="extra-radius">Save my searches</button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SearchSectionDiv>
  );
};

export default SearchSection;
