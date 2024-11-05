"use client";
import StyledButton from "@/components/StyledButton";
import StyledMiniNewsCard from "@/components/StyledCards/StyledMiniNewsCard";
import StyledNewsCard from "@/components/StyledCards/StyledNewsCard";
import StyledOldNewsCard from "@/components/StyledCards/StyledOldNewsCard";
import StyledTopStoryCard from "@/components/StyledCards/StyledTopStoryCard";
import StyledGradientIcon from "@/components/StyledGradientIcon";
import StyledHeroTitleContainer from "@/components/StyledHeroTitleContainer";
import StyledHorizontalScroll from "@/components/StyledHorizontalScroll";
import StyledSection from "@/components/StyledSection";
import {
  LATEST_NEWSLETTER_LIST,
  LIVE_NEWS_LIST,
  NEWSLATTER_CATEGORY_LIST,
  TODAY_NEWS_LIST,
  TOP_NEWS_LIST,
  YESTERDAY_NEWS_LIST,
} from "@/utils/DUMMY_DATA";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import { Box, Chip, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import * as dateFns from "date-fns";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <StyledSection
        disableMarginGutter
        disabledPaddingGutter
        id="hero-subscribe-section"
      >
        <StyledHeroTitleContainer />
      </StyledSection>
      <StyledSection disabledPaddingGutter id="live-news-section">
        <StyledHorizontalScroll
          data={LIVE_NEWS_LIST}
          ListItemComponent={StyledMiniNewsCard}
        />
      </StyledSection>
      <StyledSection id="today-edition-section">
        <Typography variant="h4" textAlign="center">
          Today's Edition
        </Typography>
        <Box
          component="section"
          sx={(theme) => ({
            display: "flex",
            gap: theme.spacing(3),
            flexDirection: "column",
            marginTop: theme.spacing(5),
          })}
        >
          {TODAY_NEWS_LIST.map((newsItem, newsItemIndex) => {
            return <StyledNewsCard key={newsItemIndex} {...newsItem} />;
          })}
        </Box>
      </StyledSection>
      <StyledSection id="yesterday-news-section">
        <Box
          display="flex"
          justifyContent="center"
          sx={(theme) => ({ gap: theme.spacing(3) })}
        >
          <StyledGradientIcon
            id="bookmark-icon"
            Icon={BookmarkSharpIcon}
            colorList={[
              { color: "#55C79A", coverPercentage: "9.08%" },
              { color: "#907CFF", coverPercentage: "58.44%" },
              { color: "#FC876D", coverPercentage: "103.84%" },
            ]}
            rotateAngle={17.24}
          />
          <Typography
            variant="button"
            sx={(theme) => ({
              letterSpacing: theme.spacing(0.25),
              marginLeft: theme.spacing(-2),
            })}
          >
            yesterday
          </Typography>
          <Typography
            variant="button"
            sx={(theme) => ({
              marginLeft: "auto",
              letterSpacing: theme.spacing(0.1),
              color: theme.palette.grey[700],
            })}
          >
            {dateFns.format(dateFns.subDays(new Date(), 1), "MMMM dd, yyyy")}
          </Typography>
        </Box>
        <Box
          component="section"
          sx={(theme) => ({
            display: "flex",
            gap: theme.spacing(3),
            flexDirection: "column",
            marginTop: theme.spacing(2),
          })}
        >
          {YESTERDAY_NEWS_LIST.map((newsItem, newsItemIndex) => (
            <StyledOldNewsCard key={newsItemIndex} {...newsItem} />
          ))}
        </Box>
      </StyledSection>
      <Box
        id="section-wrapper"
        sx={(theme) => ({
          marginTop: theme.spacing(5),
          background: theme.palette.background.paper,
          paddingY: theme.spacing(5),
        })}
      >
        <StyledSection id="top-stories-section" disabledPaddingGutter>
          <Typography variant="h4" textAlign="center">
            Top Stories
          </Typography>
          <Box sx={(theme) => ({ marginTop: theme.spacing(5) })}>
            <StyledHorizontalScroll
              data={TOP_NEWS_LIST}
              ListItemComponent={StyledTopStoryCard}
            />
          </Box>
        </StyledSection>
        <StyledSection id="today-news-section">
          <Typography variant="h4" textAlign="center">
            Latest Newsletters
          </Typography>
          <Typography
            sx={(theme) => ({
              marginTop: theme.spacing(4),
              letterSpacing: theme.spacing(0.1),
            })}
            variant="body2"
            textAlign="center"
          >
            A wealth of knowledge from India's top writers curated for you by
            The Morning Context.
          </Typography>
          <Box
            component="section"
            sx={(theme) => ({
              display: "flex",
              gap: theme.spacing(3),
              flexDirection: "column",
              marginTop: theme.spacing(2),
            })}
          >
            {LATEST_NEWSLETTER_LIST.map((newsItem, newsItemIndex) => {
              return (
                <StyledNewsCard
                  {...newsItem}
                  key={newsItemIndex}
                  isShort={newsItemIndex !== 0}
                />
              );
            })}
          </Box>
        </StyledSection>
        <Box sx={(theme) => ({ paddingTop: theme.spacing(5) })}>
          <StyledSection id="explore-newsletter-section">
            <Typography variant="h4" textAlign="center">
              Explore newsletters on
            </Typography>
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              sx={(theme) => ({
                gap: theme.spacing(3),
                marginTop: theme.spacing(4),
              })}
            >
              {NEWSLATTER_CATEGORY_LIST.map((newsletterCategory) => (
                <Chip
                  variant="outlined"
                  key={newsletterCategory}
                  label={newsletterCategory}
                  sx={(theme) => ({
                    cursor: "pointer",
                    color: purple[600],
                    borderColor: purple[600],
                    height: theme.spacing(4.5),
                    textTransform: "capitalize",
                    padding: theme.spacing(1, 2),
                  })}
                />
              ))}
            </Box>
            <Box
              sx={(theme) => ({
                width: "100%",
                display: "flex",
                marginTop: theme.spacing(5),
              })}
            >
              <StyledButton fullWidth title="sign up to subscribe" />
            </Box>
          </StyledSection>
        </Box>
      </Box>
    </React.Fragment>
  );
}
