import SeoData from '@/components/SeoData';
import { GET_DEFAULT_PAGE, THEME_SETTINGS } from '@/queries/graphql_queries';
import { sendGraphQLQuery } from '@/utils/utils';
import React from 'react'

const Page = ({ pageData, error }) => {

    if(error == '' && pageData?.page != null ){
        const data = pageData?.page;
        const seoData = data?.seoData;
        return (
            <>
                <SeoData pageTitle={data?.title || ''} seodata={seoData}/>
                <div className="legalWrap">
                    <div className="container">
                        <div className="legalText">
                            <div className="legalTitle">
                                <h1>{data.title} </h1>
                            </div>
                            {data.content && <div class="legalNotice" dangerouslySetInnerHTML={{__html:data.content}}></div>}
                        </div>
                    </div>
                </div>
            </>
        )
    }else if(error != ''){
        return (
            <>
                 <div className="legalWrap">
                    <div className="container">
                        <div className="legalText">
                            <div className="legalTitle">
                                <h2 style={{textAlign:'center'}}>Error while fetching data, Please try again.</h2>
                                <p>{JSON.stringify(error)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        return (
            <>
                 <div className="legalWrap">
                    <div className="container">
                        <div className="legalText">
                            <div className="legalTitle">
                                <h2 style={{textAlign:'center'}}>404: Page Not Found</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Page

export async function getServerSideProps(context) {
    const { params } = context;

    const variables = {
        id: params.page,
    };

    try {
        const data = await sendGraphQLQuery(THEME_SETTINGS);
        const pagedata = await sendGraphQLQuery(GET_DEFAULT_PAGE, variables);
        return {
            props: {
                pageData: pagedata?.data,
                data:data,
                error: ''
            }
        }
    } catch (error) {
        return {
            props: {
                error: error,
                pageData: ''
            }
        }
    }
}