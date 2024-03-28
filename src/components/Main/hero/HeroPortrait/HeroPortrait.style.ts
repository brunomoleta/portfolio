"use client";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export const Portrait = styled(Image)`
  width: 500px;
  height: auto;

  opacity: 0.9;

  border-radius: var(--s-1);
`;
export const ImageWrapper = styled(motion.div)`
  position: sticky;
  top: 0;
  padding-block-start: var(--s0);

  overflow: auto;
`;
