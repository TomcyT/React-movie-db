import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.5s;
  object-fit: cover;
  border-radius: 22px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.5;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
