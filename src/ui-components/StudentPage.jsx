/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function StudentPage(props) {
  const { overrides, ...rest } = props;
  const [welcomeCommaStudentNameChildren, setWelcomeCommaStudentNameChildren] =
    useStateMutationAction("Welcome, Student Name");
  const vectorOnClick = () => {
    setWelcomeCommaStudentNameChildren("Dasu");
  };
  return (
    <View
      width="290px"
      height="1008px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "StudentPage")}
    >
      <Icon
        width="1507px"
        height="1022px"
        viewBox={{ minX: 0, minY: 0, width: 1507, height: 1022 }}
        paths={[
          {
            d: "M0 0L1507 0L1507 1022L0 1022L0 0Z",
            fill: "rgba(251,247,244,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="13px"
        left="318px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></Icon>
      <Icon
        width="808px"
        height="245px"
        viewBox={{ minX: 0, minY: 0, width: 808, height: 245 }}
        paths={[
          {
            d: "M0 14.0097C0 6.27237 6.27237 0 14.0097 0L793.99 0C801.728 0 808 6.27237 808 14.0097L808 230.99C808 238.728 801.728 245 793.99 245L14.0097 245C6.27236 245 0 238.728 0 230.99L0 14.0097Z",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="201px"
        left="556px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Rectangle 1915")}
      ></Icon>
      <Text
        fontFamily="Poppins"
        fontSize="50px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="75px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="532px"
        height="121px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="293px"
        left="678px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="10 Points"
        {...getOverrideProps(overrides, "10 Points")}
      ></Text>
      <Icon
        width="235px"
        height="58px"
        viewBox={{ minX: 0, minY: 0, width: 235, height: 58 }}
        paths={[
          {
            d: "M0 29C0 12.9837 12.9837 0 29 0L206 0C222.016 0 235 12.9837 235 29L235 29C235 45.0163 222.016 58 206 58L29 58C12.9837 58 0 45.0163 0 29L0 29Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="529px"
        left="872px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Rectangle 1917")}
      ></Icon>
      <Text
        fontFamily="Poppins"
        fontSize="30px"
        fontWeight="600"
        color="rgba(56,128,135,1)"
        lineHeight="45px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1167px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="533px"
        left="197px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add Event:"
        {...getOverrideProps(overrides, "Add Event:")}
      ></Text>
      <View
        width="41px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="538px"
        left="1117px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PlusIcon")}
      >
        <Icon
          width="23.92px"
          height="23.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 23.916748046875,
            height: 23.333343505859375,
          }}
          paths={[
            {
              d: "M23.9167 13.3333L13.6667 13.3333L13.6667 23.3333L10.25 23.3333L10.25 13.3333L0 13.3333L0 10L10.25 10L10.25 0L13.6667 0L13.6667 10L23.9167 10L23.9167 13.3333Z",
              fill: "rgba(56,128,135,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20.82%"
          bottom="20.84%"
          left="20.83%"
          right="20.83%"
          onClick={() => {
            vectorOnClick();
          }}
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Poppins"
        fontSize="30px"
        fontWeight="700"
        color="rgba(56,128,135,1)"
        lineHeight="45px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1350px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="58px"
        left="376px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={welcomeCommaStudentNameChildren}
        {...getOverrideProps(overrides, "Welcome, Student Name")}
      ></Text>
    </View>
  );
}
