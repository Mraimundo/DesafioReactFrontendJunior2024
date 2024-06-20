import styled from "styled-components";

export const FooterLinksContainer = styled.footer`
  margin: 65px auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  p {
    color: var(--gray-100);
    font-size: 0.875rem;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }
`;
