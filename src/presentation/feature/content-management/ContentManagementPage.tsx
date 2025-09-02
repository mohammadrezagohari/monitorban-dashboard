import Row from "src/presentation/components/common/row/Row";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import Messages from "./components/messages/Messages";
import MessagesSettings from "./components/messages-setting/MessagesSettings";
import SensorsSettings from "./components/sensors-settings/SensorsSettings";
import { StyledContentManagement } from "./ContentManagementPage.styles";
import TutorialsManagement from "./components/tutorials-management/TutorialsManagement";
import FAQManagement from "./components/faq-management/FAQManagement";

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
