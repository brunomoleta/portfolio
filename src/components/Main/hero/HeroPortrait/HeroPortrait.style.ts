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
  display: flex;
  flex-flow: column;
  gap: var(--s-1);

  background-color: transparent;
  border-radius: var(--s-1);
  box-shadow: rgba(0, 0, 0, 0.45) 0 5px 15px 0;
  top: var(--s0);
  height: fit-content;
  overflow: auto;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;
