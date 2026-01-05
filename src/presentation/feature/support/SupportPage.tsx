import { useState } from "react";

import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import TicketForm from "./components/TicketForm";
import { StyledSupportPage } from "./SupportPage.styles";

function SupportPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleChange = (panel: string) => {
    setExpanded((currentPanel) => (currentPanel !== panel ? panel : null));
  };

  return (
    <>
      <PageTitle title="پشتیبانی" />

      <StyledSupportPage>
        <FAQ expanded={expanded} onChange={handleChange} />

        <TicketForm />

        <Footer />
      </StyledSupportPage>
    </>
  );
}

export default SupportPage;
