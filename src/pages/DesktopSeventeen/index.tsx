import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DesktopSeventeenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-roboto h-[8533px] mx-auto relative w-full">
        <div className="absolute sm:h-[8521px] h-[8533px] md:h-[9560px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="bg-blue-100 flex flex-col h-full items-center justify-start m-auto pb-[535px] w-full">
            <div className="h-[954px] relative w-full">
              <Img
                className="h-[954px] m-auto object-cover w-full"
                src="images/img_felicswebpage.png"
                alt="felicswebpage"
              />
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[6%] w-[42%]">
                <div className="bg-white-A700_0c flex flex-col font-roboto items-center justify-end p-1.5 rounded-[30px] w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-900 uppercase w-full"
                    size="txtRobotoRomanBold50"
                  >
                    Looking for a reliable and efficient maid service?{" "}
                  </Text>
                </div>
                <Text
                  className="mt-[88px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900 w-[97%] sm:w-full"
                  size="txtDidactGothicRegular35"
                >
                  I will work closely with you to provide a customized cleaning
                  experience, leaving your home sparkling clean every time.
                </Text>
                <Button className="bg-orange-50 cursor-pointer font-roboto h-20 leading-[normal] mt-[37px] py-[22px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center uppercase w-[400px]">
                  go to filter
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start p-[65px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[5px] mt-[11px] w-[96%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start md:mt-0 mt-[89px]">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900 uppercase w-full"
                    size="txtRobotoRomanBold50"
                  >
                    Let me help you keep your home spotless
                  </Text>
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-full"
                    size="txtDidactGothicRegular35"
                  >
                    <>
                      Schedule cleaning services at your convenience, whether
                      it&#39;s a one-time deep clean or regular weekly visits.
                    </>
                  </Text>
                </div>
                <div className="md:gap-5 gap-[43px] grid md:grid-cols-1 grid-cols-2 min-h-[auto] w-[51%] md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-7 items-center justify-start p-[23px] sm:px-5 rounded-[50px] w-full">
                    <div className="flex flex-row font-roboto gap-[34px] items-center justify-start w-auto">
                      <Img
                        className="h-[126px] md:h-auto object-cover w-[109px]"
                        src="images/img_felicscuteiso.png"
                        alt="felicscuteiso"
                      />
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900"
                        size="txtRobotoRomanSemiBold35"
                      >
                        <>
                          Customizable
                          <br />
                          services
                        </>
                      </Text>
                    </div>
                    <Text
                      className="mb-[22px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-[86%] sm:w-full"
                      size="txtDidactGothicRegular30"
                    >
                      Customizable cleaning services to meet your specific
                      preferences
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start p-[18px] rounded-[50px] w-full">
                      <div className="flex flex-row font-roboto gap-[34px] items-center justify-start w-auto">
                        <Img
                          className="h-[138px] md:h-auto object-cover rounded-[38px] w-[131px]"
                          src="images/img_felicscuteiso_138x131.png"
                          alt="felicscuteiso"
                        />
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900"
                          size="txtRobotoRomanSemiBold35"
                        >
                          <>
                            Time-saving
                            <br />
                            solution
                          </>
                        </Text>
                      </div>
                      <Text
                        className="mb-[27px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-[83%] sm:w-full"
                        size="txtDidactGothicRegular30"
                      >
                        Save you time and effort by taking care of the cleaning
                        for you
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-[27px] items-center justify-start p-[21px] sm:px-5 rounded-[50px] w-full">
                      <div className="flex flex-row font-roboto gap-[33px] items-center justify-start w-auto">
                        <Img
                          className="h-[130px] md:h-auto object-cover rounded-[46px] w-[111px]"
                          src="images/img_felicscuteiso_130x111.png"
                          alt="felicscuteiso"
                        />
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900"
                          size="txtRobotoRomanSemiBold35"
                        >
                          <>
                            Thorough <br />
                            cleaning
                          </>
                        </Text>
                      </div>
                      <Text
                        className="mb-[62px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-[71%] sm:w-full"
                        size="txtDidactGothicRegular30"
                      >
                        Provide thorough cleaning services
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-[15px] items-center justify-start p-[27px] sm:px-5 rounded-[50px] w-full">
                      <div className="flex flex-row font-roboto gap-[47px] items-center justify-start w-auto">
                        <Img
                          className="h-[130px] md:h-auto object-cover rounded-[38px] w-[103px]"
                          src="images/img_felicscuteiso_130x103.png"
                          alt="felicscuteiso"
                        />
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900"
                          size="txtRobotoRomanSemiBold35"
                        >
                          <>
                            Consistent
                            <br />
                            results
                          </>
                        </Text>
                      </div>
                      <Text
                        className="mb-[62px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-[84%] sm:w-full"
                        size="txtDidactGothicRegular30"
                      >
                        Striving for consistent purity level results
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[5050px] p-[59px] md:px-10 sm:px-5 w-full">
              <Text
                className="md:ml-[0] ml-[89px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center uppercase"
                size="txtRobotoRomanBold50Black900"
              >
                questions
              </Text>
              <div className="bg-white-A700 flex flex-col gap-3 justify-end md:ml-[0] ml-[89px] mt-[125px] p-[23px] sm:px-5 rounded-[20px]">
                <Text
                  className="md:ml-[0] ml-[26px] mr-[792px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 uppercase"
                  size="txtRobotoRomanSemiBold35Black900"
                >
                  What does your maid service include?
                </Text>
                <Text
                  className="md:ml-[0] ml-[35px] mr-[337px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[77%] sm:w-full"
                  size="txtDidactGothicRegular30Black900"
                >
                  Service includes a range of cleaning and housekeeping tasks,
                  such as dusting, vacuuming, mopping, bathroom and kitchen
                  cleaning, laundry, and other tasks as requested by the client.
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[13px] justify-start md:ml-[0] ml-[89px] mt-5 p-6 sm:px-5 rounded-[20px]">
                <Text
                  className="md:ml-[0] ml-[13px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 uppercase"
                  size="txtRobotoRomanSemiBold35Black900"
                >
                  <span className="text-black-900 font-roboto text-left font-bold">
                    2.{" "}
                  </span>
                  <span className="text-black-900 font-roboto text-left font-semibold">
                    Are your cleaning products and equipment safe?
                  </span>
                </Text>
                <Text
                  className="mb-[5px] ml-8 md:ml-[0] mr-[281px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtDidactGothicRegular30Black900"
                >
                  Yes, i use high-quality cleaning products and equipment that
                  are safe for use in homes and offices.
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-3 justify-start md:ml-[0] ml-[89px] mt-5 p-[19px] rounded-[20px]">
                <Text
                  className="md:ml-[0] ml-[18px] mr-[104px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 uppercase"
                  size="txtRobotoRomanBold35"
                >
                  3. Can I schedule a one-time cleaning, or do you only offer
                  periodic services?
                </Text>
                <Text
                  className="mb-4 ml-10 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtDidactGothicRegular30Black900"
                >
                  There are both one-time and periodic cleaning services. You
                  can schedule services at any time convenient for you.
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[15px] justify-end md:ml-[0] ml-[91px] mt-5 p-6 sm:px-5 rounded-[20px]">
                <Text
                  className="md:ml-[0] ml-[11px] mr-[518px] mt-0.5 sm:text-[31px] md:text-[33px] text-[35px] text-black-900 uppercase"
                  size="txtRobotoRomanBold35"
                >
                  4. How do I schedule maid services with your company?
                </Text>
                <Text
                  className="ml-8 md:ml-[0] mr-[407px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtDidactGothicRegular30Black900"
                >
                  You can schedule maid services with us by emails, or through
                  our online booking system.{" "}
                </Text>
              </div>
              <Button className="bg-white-A700 border-[3px] border-gray-800 border-solid cursor-pointer h-20 leading-[normal] md:ml-[0] ml-[766px] mt-[60px] py-[22px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center uppercase w-[265px]">
                more
              </Button>
            </div>
          </div>
          <Img
            className="absolute h-[2260px] object-cover right-[0] top-[30%] w-[53%]"
            src="images/img_felicsillustra.png"
            alt="felicsillustra"
          />
        </div>
        <div className="absolute bottom-[20%] flex flex-col justify-start left-[0] overflow-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start md:ml-[0] ml-[545px] p-[51px] md:px-10 sm:px-5 w-[78%] md:w-full">
            <div className="flex flex-col font-didactgothic items-center justify-start w-[55%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[29px] sm:px-5 rounded-[34px] w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start mb-[15px] ml-10 md:ml-[0] w-[87%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start md:mt-0 mt-[237px]">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      07
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      08
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      09
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      10
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      11
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      12
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      13
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      14
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      15
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      16
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      17
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      18
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      19
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      20
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      21
                    </Text>
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtDidactGothicRegular35"
                    >
                      22
                    </Text>
                  </div>
                  <div className="flex flex-col font-roboto justify-start mb-[23px] w-[92%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[328px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                      size="txtRobotoRomanRegular35"
                    >
                      Febrary
                    </Text>
                    <div className="flex flex-row font-didactgothic items-center justify-between md:ml-[0] ml-[33px] mt-16 w-[94%] md:w-full">
                      <div className="flex flex-col gap-3 items-center justify-start">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtDidactGothicRegular30Black900"
                        >
                          mon
                        </Text>
                        <Text
                          className="bg-orange-50 flex h-[50px] items-center justify-center rounded-[50%] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900 w-[50px]"
                          size="txtDidactGothicRegular35"
                        >
                          30
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtDidactGothicRegular30Black900"
                        >
                          tue
                        </Text>
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                          size="txtDidactGothicRegular35"
                        >
                          31
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[17px] items-center justify-start">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtDidactGothicRegular30Black900"
                        >
                          wed
                        </Text>
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                          size="txtDidactGothicRegular35"
                        >
                          1
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[17px] items-center justify-start w-[6%]">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtDidactGothicRegular30Black900"
                        >
                          thu
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                            size="txtDidactGothicRegular35"
                          >
                            2
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[18px] items-center justify-start">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtDidactGothicRegular30Black900"
                        >
                          fri
                        </Text>
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                          size="txtDidactGothicRegular35"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtDidactGothicRegular30Black900"
                        >
                          sat
                        </Text>
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                          size="txtDidactGothicRegular35"
                        >
                          4
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3.5 items-center justify-start">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                          size="txtDidactGothicRegular30Black900"
                        >
                          sun
                        </Text>
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                          size="txtDidactGothicRegular35"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-12 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <Line className="bg-black-900 h-px mb-[62px] w-[16%]" />
                        <div className="bg-orange-50 h-[63px] rounded-[20px] w-[12%]"></div>
                        <Line className="bg-black-900 h-px mb-[62px] w-[68%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Line className="bg-black-900 h-px w-[16%]" />
                        <Line className="bg-black-900 h-px w-[68%]" />
                      </div>
                      <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mt-7 w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2 w-[74%] md:w-full">
                          <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                            <Line className="bg-black-900 h-px sm:mt-0 my-[29px] w-[43%]" />
                            <div className="bg-orange-50 flex flex-col items-center justify-start py-[29px] rounded-[20px]">
                              <Line className="bg-black-900_33 h-px w-full" />
                            </div>
                            <Line className="bg-black-900 h-px sm:mt-0 my-[29px] w-[37%]" />
                          </div>
                          <Line className="bg-black-900 h-px mt-[35px] w-full" />
                          <Line className="bg-black-900 h-px mt-[65px] w-full" />
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-[15px] grid grid-cols-2 w-1/4 md:w-full"
                          orientation="horizontal"
                        >
                          <div className="bg-orange-50 flex flex-col md:gap-10 gap-[65px] items-center justify-end sm:ml-[0] py-[34px] rounded-[20px] w-full">
                            <Line className="bg-black-900_33 h-px mt-[3px] w-full" />
                            <Line className="bg-black-900_33 h-px w-full" />
                            <Line className="bg-black-900_33 h-px w-full" />
                          </div>
                          <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start mb-[34px] sm:ml-[0] sm:mt-0 mt-[37px] w-full">
                            <Line className="bg-black-900 h-px w-full" />
                            <Line className="bg-black-900 h-px w-full" />
                            <Line className="bg-black-900 h-px w-full" />
                          </div>
                        </List>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly w-full">
                        <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                          <div className="flex flex-row gap-[15px] items-center justify-start w-[96%] md:w-full">
                            <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-[70%]">
                              <Line className="bg-black-900 h-px w-full" />
                              <Line className="bg-black-900 h-px w-full" />
                              <Line className="bg-black-900 h-px w-full" />
                            </div>
                            <div className="bg-orange-50 flex flex-col md:gap-10 gap-[65px] items-center justify-start py-[31px] rounded-[20px] w-[26%]">
                              <Line className="bg-black-900_33 h-px w-full" />
                              <Line className="bg-black-900_33 h-px w-full" />
                              <Line className="bg-black-900_33 h-px w-full" />
                            </div>
                          </div>
                          <Line className="bg-black-900 h-px mt-[34px] w-full" />
                          <Line className="bg-black-900 h-px mt-[65px] w-full" />
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[31px] w-[54%] md:w-full">
                          <Line className="bg-black-900 h-px w-full" />
                          <Line className="bg-black-900 h-px mt-[65px] w-full" />
                          <div className="flex flex-row gap-[18px] items-end justify-between mt-[30px] w-[97%] md:w-full">
                            <div className="bg-orange-50 flex flex-col md:gap-10 gap-[65px] items-center justify-start py-[35px] rounded-[20px] w-[23%]">
                              <Line className="bg-black-900_33 h-px w-full" />
                              <Line className="bg-black-900_33 h-px mb-[30px] w-full" />
                            </div>
                            <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start mt-[35px] w-[74%]">
                              <Line className="bg-black-900 h-px w-full" />
                              <Line className="bg-black-900 h-px w-full" />
                              <Line className="bg-black-900 h-px w-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[26px] w-full">
                        <Line className="bg-black-900 h-px md:mt-0 my-[38px] w-[5%]" />
                        <div className="bg-orange-50 flex flex-col items-center justify-end py-[37px] rounded-[20px]">
                          <Line className="bg-black-900_33 h-px mt-0.5 w-full" />
                        </div>
                        <Line className="bg-black-900 h-px md:mt-0 my-[38px] w-[81%]" />
                      </div>
                      <Line className="bg-black-900 h-px mt-7 w-full" />
                      <Line className="bg-black-900 h-px mt-[65px] w-full" />
                      <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[35px] w-full">
                        <div className="flex md:flex-1 flex-col md:gap-10 gap-[65px] items-center justify-start w-[61%] md:w-full">
                          <Line className="bg-black-900 h-px w-full" />
                          <Line className="bg-black-900 h-px w-full" />
                        </div>
                        <div className="bg-orange-50 flex md:flex-1 flex-col md:gap-10 gap-[65px] items-center justify-start py-[30px] rounded-[20px] w-[12%] md:w-full">
                          <Line className="bg-black-900_33 h-px w-full" />
                          <Line className="bg-black-900_33 h-px mb-[5px] w-full" />
                        </div>
                        <div className="flex md:flex-1 flex-col md:gap-10 gap-[65px] items-center justify-start w-1/4 md:w-full">
                          <Line className="bg-black-900 h-px w-full" />
                          <Line className="bg-black-900 h-px w-full" />
                        </div>
                      </div>
                      <Line className="bg-black-900 h-px mt-[30px] w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-orange-50_a2 cursor-pointer font-roboto h-20 leading-[normal] mb-[70px] py-[22px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center uppercase w-[265px]">
              order
            </Button>
          </div>
          <div className="flex flex-col md:gap-10 gap-[87px] justify-start py-[122px] w-full">
            <Text
              className="md:ml-[0] ml-[693px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center uppercase"
              size="txtRobotoRomanBold50Black900"
            >
              reviews
            </Text>
            <div className="flex flex-col font-didactgothic items-start justify-start mb-[23px] w-full">
              <div className="flex flex-col items-center justify-start w-[83%] md:w-full">
                <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-end p-[19px] rounded-[50px] w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start mt-4 w-[97%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                        size="txtDidactGothicRegular28"
                      >
                        <>
                          I recently used for a deep cleaning of my home and I
                          couldn&#39;t be happier with the results. The maid was
                          professional, efficient, and thorough in her work.
                        </>
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[96%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                            <Img
                              className="h-[103px] md:h-auto object-cover rounded-[51px]"
                              src="images/img_ellipse71.png"
                              alt="ellipseSeventyOne"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                                size="txtDidactGothicRegular28"
                              >
                                name last name
                              </Text>
                              <Text
                                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-400"
                                size="txtDidactGothicRegular25"
                              >
                                name last name
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[34px] sm:mt-0 mt-[58px]"
                          src="images/img_stars.svg"
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-end p-[13px] rounded-[50px] w-full">
                    <div className="flex flex-col gap-3.5 items-center justify-start mt-[22px] w-[93%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                        size="txtDidactGothicRegular28"
                      >
                        The customer service was excellent - she was quick to
                        respond to my questions and flexible in accommodating my
                        schedule. She paid attention to all the details and left
                        my home spotless.
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                            <Img
                              className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                              src="images/img_ellipse72.png"
                              alt="ellipseSeventyTwo"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                                size="txtDidactGothicRegular28"
                              >
                                name last name
                              </Text>
                              <Text
                                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-400"
                                size="txtDidactGothicRegular25"
                              >
                                name last name
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[33px] sm:mt-0 mt-[50px]"
                          src="images/img_stars.svg"
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-[50px] w-full">
                    <div className="flex flex-col items-center justify-start mt-3 w-[96%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                        size="txtDidactGothicRegular28"
                      >
                        <>
                          I&#39;ve been using maid services for a few months now
                          and I have to say, I&#39;m thoroughly impressed. The
                          booking process is simple and hassle-free, and the
                          customer service is top-notch.{" "}
                        </>
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-1 w-[98%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                            <Img
                              className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                              src="images/img_ellipse73.png"
                              alt="ellipseSeventyThree"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                                size="txtDidactGothicRegular28"
                              >
                                name last name
                              </Text>
                              <Text
                                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-400"
                                size="txtDidactGothicRegular25"
                              >
                                name last name
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[33px] sm:mt-0 mt-[50px]"
                          src="images/img_stars_orange_300.svg"
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-end p-[19px] rounded-[50px] w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start mt-4 w-[97%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                        size="txtDidactGothicRegular28"
                      >
                        <>
                          I recently used for a deep cleaning of my home and I
                          couldn&#39;t be happier with the results. The maid was
                          professional, efficient, and thorough in her work.
                        </>
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[96%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                            <Img
                              className="h-[103px] md:h-auto object-cover rounded-[51px]"
                              src="images/img_ellipse71.png"
                              alt="ellipseSeventyOne"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                                size="txtDidactGothicRegular28"
                              >
                                name last name
                              </Text>
                              <Text
                                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-400"
                                size="txtDidactGothicRegular25"
                              >
                                name last name
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[34px] sm:mt-0 mt-[58px]"
                          src="images/img_stars.svg"
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-[50px] w-full">
                    <div className="flex flex-col items-center justify-start mt-3 w-[96%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                        size="txtDidactGothicRegular28"
                      >
                        <>
                          I&#39;ve been using maid services for a few months now
                          and I have to say, I&#39;m thoroughly impressed. The
                          booking process is simple and hassle-free, and the
                          customer service is top-notch.{" "}
                        </>
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-1 w-[98%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                            <Img
                              className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                              src="images/img_ellipse73_100x100.png"
                              alt="ellipseSeventyThree"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                                size="txtDidactGothicRegular28"
                              >
                                name last name
                              </Text>
                              <Text
                                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-400"
                                size="txtDidactGothicRegular25"
                              >
                                name last name
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[33px] sm:mt-0 mt-[50px]"
                          src="images/img_stars.svg"
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 flex flex-1 flex-col items-center justify-end p-[19px] rounded-[50px] w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start mt-4 w-[97%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                        size="txtDidactGothicRegular28"
                      >
                        <>
                          I recently used for a deep cleaning of my home and I
                          couldn&#39;t be happier with the results. The maid was
                          professional, efficient, and thorough in her work.
                        </>
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[96%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                            <Img
                              className="h-[103px] md:h-auto object-cover rounded-[51px]"
                              src="images/img_ellipse71_103x100.png"
                              alt="ellipseSeventyOne"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                                size="txtDidactGothicRegular28"
                              >
                                name last name
                              </Text>
                              <Text
                                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-400"
                                size="txtDidactGothicRegular25"
                              >
                                name last name
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[34px] sm:mt-0 mt-[58px]"
                          src="images/img_stars.svg"
                          alt="stars"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-12 inset-x-[0] justify-end mx-auto pt-[69px] w-full">
          <Text
            className="md:ml-[0] ml-[149px] mr-[1514px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center uppercase"
            size="txtRobotoRomanBold50Black900"
          >
            contacts
          </Text>
          <div
            className="bg-cover bg-no-repeat flex flex-col font-didactgothic h-[358px] items-center justify-end p-[90px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group11.png')" }}
          >
            <div className="flex md:flex-col flex-row gap-10 items-center justify-center mt-[108px] w-[35%] md:w-full">
              <Button className="bg-orange-50 border-2 border-black-900 border-solid cursor-pointer h-[70px] leading-[normal] py-[15px] rounded-[23px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-[150px]">
                Viber
              </Button>
              <Button className="bg-orange-50 border-2 border-black-900 border-solid cursor-pointer h-[70px] leading-[normal] py-[15px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-48">
                WhatsApp
              </Button>
              <Button className="bg-orange-50 border-2 border-black-900 border-solid cursor-pointer h-[70px] leading-[normal] py-[15px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-[178px]">
                Telegram
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col inset-x-[0] justify-end mx-auto p-[41px] md:px-10 sm:px-5 top-[35%] w-full">
          <Text
            className="md:ml-[0] ml-[108px] mr-[1542px] mt-[163px] md:text-5xl text-6xl text-black-900 text-center uppercase"
            size="txtRobotoRomanBold60"
          >
            Filter{" "}
          </Text>
          <div className="bg-white-A700 flex flex-col items-start justify-end md:ml-[0] ml-[178px] mr-[553px] mt-[67px] p-[34px] md:px-5 rounded-[35px] w-[61%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[102px] items-start justify-start ml-5 md:ml-[0] mt-[23px] w-[92%] md:w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[170px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-start justify-start mb-[62px] sm:ml-[0] w-full">
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                    size="txtRobotoRomanSemiBold35"
                  >
                    Cleaning
                  </Text>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[27px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      One-time{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[19px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      Twice a week{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[19px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      Every week{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start mb-[62px] sm:ml-[0] w-full">
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                    size="txtRobotoRomanSemiBold35"
                  >
                    Allergy
                  </Text>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[27px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      None
                    </Text>
                  </div>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[19px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      Cat
                    </Text>
                  </div>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[19px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      Dog
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start sm:ml-[0] w-full">
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                    size="txtRobotoRomanSemiBold35"
                  >
                    Type of cleaning
                  </Text>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[30px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      Regular cleaning
                    </Text>
                  </div>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[19px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      Window cleaning
                    </Text>
                  </div>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[19px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      After repairing
                    </Text>
                  </div>
                  <div className="flex flex-row font-didactgothic gap-5 items-center justify-start mt-[19px] w-auto">
                    <div className="border-[3px] border-black-900 border-solid h-[30px] rounded-[50%] w-[30px]"></div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-auto"
                      size="txtDidactGothicRegular30Black900"
                    >
                      After relocation
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[30px] justify-start">
                <Text
                  className="md:ml-[0] ml-[19px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                  size="txtRobotoRomanSemiBold35"
                >
                  Address
                </Text>
                <Text
                  className="bg-orange-50 h-16 justify-center pb-[9px] pl-7 pr-[35px] pt-3.5 sm:px-5 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-400_01 w-[615px]"
                  size="txtDidactGothicRegular30Gray40001"
                >
                  street
                </Text>
              </div>
            </div>
          </div>
          <Button className="bg-orange-50 cursor-pointer h-20 leading-[normal] md:ml-[0] ml-[600px] mr-[971px] mt-[60px] py-[22px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center uppercase w-[265px]">
            search
          </Button>
        </div>
        <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto pt-[33px] top-[21%] w-full">
          <Text
            className="md:ml-[0] ml-[149px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center uppercase"
            size="txtRobotoRomanBold50Black900"
          >
            Types of cleaning
          </Text>
          <div className="flex-wrap gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-center max-w-[1210px] md:ml-[0] ml-[355px] mt-[88px] md:px-5 w-full">
            <Button className="bg-orange-50 border-[3px] border-gray-800 border-solid cursor-pointer flex-1 h-20 leading-[normal] py-[22px] rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-full">
              room
            </Button>
            <Button className="bg-orange-50 cursor-pointer flex-1 h-20 leading-[normal] py-[22px] rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-full">
              kitchen
            </Button>
            <Button className="bg-orange-50 cursor-pointer flex-1 h-20 leading-[normal] py-[22px] rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-full">
              bathroom
            </Button>
            <Button className="bg-orange-50 cursor-pointer flex-1 h-20 leading-[normal] py-[22px] rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-full">
              hallway
            </Button>
          </div>
          <div className="h-[816px] md:h-[914px] mt-[98px] md:px-5 relative w-full">
            <Img
              className="h-[816px] m-auto object-cover w-full"
              src="images/img_rectangle820.png"
              alt="rectangle820"
            />
            <div className="absolute h-[816px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[816px] m-auto object-cover w-full"
                src="images/img_image217.png"
                alt="image217"
              />
              <div className="absolute bg-gray-200_b2 flex flex-col md:gap-10 gap-[77px] h-full inset-y-[0] items-center justify-center my-auto p-[50px] md:px-10 sm:px-5 right-[0]">
                <Text
                  className="mt-[41px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
                  size="txtRobotoRomanSemiBold40"
                >
                  In room
                </Text>
                <Text
                  className="mb-[277px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtDidactGothicRegular30"
                >
                  <>
                    We fold clothes and arrange things
                    <br />
                    Making the bed or changing bed linen
                    <br />
                    We wipe all accessible surfaces, switches, doors and door
                    handles
                    <br />
                    We wipe household appliances
                    <br />
                    Cleaning mirrors and glass surfaces
                    <br />
                    We vacuum carpets, wash the floor and wipe baseboards
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSeventeenPage;
