import Row from "src/presentation/components/common/row/Row";
import Messages from "./components/messages/Messages";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import FAQManagement from "./components/faq-management/FAQManagement";
import SensorsSettings from "./components/sensors-settings/SensorsSettings";
import MessagesSettings from "./components/messages-setting/MessagesSettings";
import TutorialsManagement from "./components/tutorials-management/TutorialsManagement";
import { StyledContentManagement } from "./ContentManagementPage.styles";

function ContentManagementPage() {
  return (
    <>
      <PageTitle title="مدیریت محتوا" />

      <StyledContentManagement>
        <Row type="flex">
          <Messages />

          <MessagesSettings />
        </Row>

        <Row>
          <SensorsSettings />
        </Row>

        <Row>
          <TutorialsManagement />
        </Row>

        <Row>
          <FAQManagement />
        </Row>
      </StyledContentManagement>
    </>
  );
}

export default ContentManagementPage;
