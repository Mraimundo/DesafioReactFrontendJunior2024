import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { FooterTabs } from "../../components/FooterTabs";
import { FooterLinks } from "../../components/FooterLinks";

import { Container } from "./styles";

export function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Tasks />
        <FooterTabs />
      </Container>

      <FooterLinks />
    </div>
  );
}
