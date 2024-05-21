import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import PriceSec from "@/components/PriceSec";
import StripBox from "@/components/StripBox";
import InsightSec from "@/components/InsightSec";
import QuestionSec from "@/components/QuestionSec";
import BenefitSec from "@/components/BenefitSec";
import ReviewSec from "@/components/ReviewSec";
import { useEffect } from "react";
import { sendGraphQLQuery } from "@/utils/utils";
import { HOME_PAGE, THEME_SETTINGS } from "@/queries/graphql_queries";
import VideoSec from "@/components/VideoSec";
import SucessSec from "@/components/SucessPage";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, error }) {
  console.log("data : ",data?.data?.pageBy?.template?.homePageFields)
  const { 
    bannerHeading, bannerSubHeading, bannerLeftSideImage, bannerRightSideImage, bannerButtonInfo,
    otherHeading,otherProductInfo,
    reviewsHeading,reviewsInfo,
    insightsHeading,insightsReadMoreLinkText,insightsAllInsightsLink,insightsInfo,
    benefitsHeading,benefitsInfo,
    faqHeading,faqInfo,selectProduct
  } = data?.data?.pageBy?.template?.homePageFields;

  const latest3Posts = data?.data?.posts?.nodes;

  const BannerData = { bannerHeading, bannerSubHeading, bannerLeftSideImage, bannerRightSideImage, bannerButtonInfo }
  const otherInfoData = {otherHeading,otherProductInfo}
  const reviewsData = {reviewsHeading,reviewsInfo}
  const insightsData = {insightsHeading,insightsReadMoreLinkText,insightsAllInsightsLink,latest3Posts,insightsInfo
  }
  const benefitsData = {benefitsHeading,benefitsInfo}
  const faqData = {faqHeading,faqInfo}
  if (error) {
    return (
      <h2>Error : {JSON.stringify(error)}</h2>
    )
  }

  return (
    <>
      <Head>
        <title>Elcom | Power Strip</title>
      </Head>
      <Banner {...BannerData} />
      <PriceSec productData={selectProduct}/>
      <VideoSec />
      <StripBox {...otherInfoData}/>
      <ReviewSec {...reviewsData}/>
      <InsightSec {...insightsData}/>
      <BenefitSec {...benefitsData}/>
      <QuestionSec {...faqData}/>
      {/* <SucessSec/> */}
    </>
  )

}

export async function getServerSideProps() {
  try {
    const data = await sendGraphQLQuery(HOME_PAGE);
    return {
      props: {
        data
      }
    }
  } catch (error) {
    return {
      props: {
        error
      }
    }
  }


}

