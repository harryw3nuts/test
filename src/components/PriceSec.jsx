import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from 'next/link';
import Image from 'next/image';
import thumb1 from '@/asset/images/thumb1.png';
import thumb2 from '@/asset/images/thumb2.png';
import thumb3 from '@/asset/images/thumb3.png';
import thumb4 from '@/asset/images/thumb4.png';
import thumbfull1 from '@/asset/images/thumbfull1.png';
import flag from '@/asset/images/flag.svg';
import correct from '@/asset/images/correct.svg';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const PriceSec = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>

            <div className='priceImg'>
                <div className='container'>
                    <div className='priceWrapper'>
                        <div className='row'>
                            <div className='col-lg-1'>
                                <div className='priceSwiper'>
                                    <Swiper
                                        style={{
                                            '--swiper-navigation-color': '#fff',
                                            '--swiper-pagination-color': '#fff',
                                        }}
                                        loop={true}
                                        spaceBetween={10}
                                        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper2"
                                    >
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumb1} alt='thumb1'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumb2} alt='thumb2'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumb3} alt='thumb3'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumb4} alt='thumb4'></Image>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper >
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='pricefullImg'>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        slidesPerView={1}
                                        freeMode={true}
                                        navigation={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='thumbfullBox'>
                                                <Image src={thumbfull1} alt='thumbfull1'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbfullBox'>
                                                <Image src={thumbfull1} alt='thumbfull1'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbfullBox'>
                                                <Image src={thumbfull1} alt='thumbfull1'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbfullBox'>
                                                <Image src={thumbfull1} alt='thumbfull1'></Image>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='priceList'>
                                    <div className='headSec'>
                                        <h4>Elcom Power Strip</h4>
                                        <span>₹ 1099/-</span>
                                    </div>
                                    <div className='colorQun'>
                                        <div className='colorSec'>
                                            <span className='textBlog'>colour</span>
                                            <span className='difColor'></span>
                                        </div>
                                        <div className='qunSec'>
                                            <span className='textBlog'>quantity</span>
                                            <div className='qunBtn'>
                                                <button className='btn minus' type='button'>
                                                    <i className='solidMinus'></i>
                                                </button>
                                                <input type="number" min={0} id='qtyIn' />
                                                <button className='btn plus' type='button'>
                                                    <i className='solidPlus'></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='buyNow'>
                                        <button className='buybtn'>Buy Now</button>
                                    </div>
                                    <div className='warrantySec'>
                                        <div className='flagSec'>
                                            <ul>
                                                <li><i><Image src={flag} alt='flag'></Image></i></li>
                                                <li className='mii'>Made In India</li>
                                            </ul>
                                        </div>
                                        <div className='warGrp'>
                                            <ul>
                                                <li><i><Image src={correct} alt='correct'></Image></i></li>
                                                <li className='corr'>2 Years Warranty</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='productContent'>
                                        <p>Our Power strip is crafted with premium materials like PC FR V2 Grade Plastic, Conductive Integral Brass Components, Heavy-duty Copper Wire, and Molded Plug with Copper Alloy. <Link href={'#'}>Read more</Link></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='productDetail'>
                        <ul>
                            <li>
                                <span className='title'>Input Voltage</span>
                                <span className='value'>100-240V AC</span>
                            </li>
                            <li>
                                <span className='title'>Output Voltage</span>
                                <span className='value'>5V DC (USB), <br /> 120V AC (Outlets)</span>
                            </li>
                            <li>
                                <span className='title'>Power Rating</span>
                                <span className='value'>6A, 240V</span>
                            </li>
                            <li>
                                <span className='title'>Cord Length</span>
                                <span className='value'>6ft (1.8m)</span>
                            </li>
                            <li>
                                <span className='title'>Dimensions</span>
                                <span className='value'>11.5" x 2.5" x 1.2"</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    );
}

export default PriceSec;