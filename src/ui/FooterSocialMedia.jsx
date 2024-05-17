import styled from "styled-components";

import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const FlexItemRow = styled.div`
  display: flex;
  gap: 1rem;
`;
export default function FooterSocialMedia() {
  return (
    <>
      <h3>Follow us </h3>
      <FlexItemRow>
        <SlSocialFacebook />
        <span>Facebook</span>
      </FlexItemRow>
      <FlexItemRow>
        <FaInstagram />
        <span>Instagram</span>
      </FlexItemRow>
      <FlexItemRow>
        <RiTwitterXFill />
        <span>X</span>
      </FlexItemRow>
      <FlexItemRow>
        <FaLinkedin />
        <span>LinkedIn</span>
      </FlexItemRow>
      <FlexItemRow>
        <FaYoutube />
        <span>Youtube</span>
      </FlexItemRow>
    </>
  );
}
