import { Eye } from "src/presentation/components/common/icons/Eye";
import React from "react";
import ButtonPrimaryLgFilled from "../buttons/ButtonPrimaryLgFilled";
import ButtonPrimaryMdFilled from "../buttons/ButtonPrimaryMdFilled";
import ButtonPrimarySmFilled from "../buttons/ButtonPrimarySmFilled";
import ButtonPrimaryXsFilled from "../buttons/ButtonPrimaryXsFilled";
import ButtonPrimaryXxsFilled from "../buttons/ButtonPrimaryXxsFilled";
import ButtonPrimaryLgOutlined from "../buttons/ButtonPrimaryLgOutlined";
import ButtonPrimaryMdOutlined from "../buttons/ButtonPrimaryMdOutlined";
import ButtonPrimarySmOutlined from "../buttons/ButtonPrimarySmOutlined";
import ButtonPrimaryXsOutlined from "../buttons/ButtonPrimaryXsOutlined";
import ButtonPrimaryXxsOutlined from "../buttons/ButtonPrimaryXxsOutlined";
import ButtonPrimaryLgText from "../buttons/ButtonPrimaryLgText";
import ButtonPrimaryMdText from "../buttons/ButtonPrimaryMdText";
import ButtonPrimarySmText from "../buttons/ButtonPrimarySmText";
import ButtonPrimaryXsText from "../buttons/ButtonPrimaryXsText";
import ButtonPrimaryXxsText from "../buttons/ButtonPrimaryXxsText";
import ButtonSecondaryLgFilled from "../buttons/ButtonSecondaryLgFilled";
import ButtonSecondaryMdFilled from "../buttons/ButtonSecondaryMdFilled";
import ButtonSecondarySmFilled from "../buttons/ButtonSecondarySmFilled";
import ButtonSecondaryXsFilled from "../buttons/ButtonSecondaryXsFilled";
import ButtonSecondaryXxsFilled from "../buttons/ButtonSecondaryXxsFilled";
import ButtonSecondaryLgOutlined from "../buttons/ButtonSecondaryLgOutlined";
import ButtonSecondaryMdOutlined from "../buttons/ButtonSecondaryMdOutlined";
import ButtonSecondarySmOutlined from "../buttons/ButtonSecondarySmOutlined";
import ButtonSecondaryXsOutlined from "../buttons/ButtonSecondaryXsOutlined";
import ButtonSecondaryXxsOutlined from "../buttons/ButtonSecondaryXxsOutlined";
import ButtonSecondaryLgText from "../buttons/ButtonSecondaryLgText";
import ButtonSecondaryMdText from "../buttons/ButtonSecondaryMdText";
import ButtonSecondarySmText from "../buttons/ButtonSecondarySmText";
import ButtonSecondaryXsText from "../buttons/ButtonSecondaryXsText";
import ButtonSecondaryXxsText from "../buttons/ButtonSecondaryXxsText";
import ButtonErrorLgFilled from "../buttons/ButtonErrorLgFilled";
import ButtonErrorMdFilled from "../buttons/ButtonErrorMdFilled";
import ButtonErrorSmFilled from "../buttons/ButtonErrorSmFilled";
import ButtonErrorXsFilled from "../buttons/ButtonErrorXsFilled";
import ButtonErrorXxsFilled from "../buttons/ButtonErrorXxsFilled";
import ButtonErrorLgOutlined from "../buttons/ButtonErrorLgOutlined";
import ButtonErrorMdOutlined from "../buttons/ButtonErrorMdOutlined";
import ButtonErrorSmOutlined from "../buttons/ButtonErrorSmOutlined";
import ButtonErrorXsOutlined from "../buttons/ButtonErrorXsOutlined";
import ButtonErrorXxsOutlined from "../buttons/ButtonErrorXxsOutlined";
import ButtonErrorLgText from "../buttons/ButtonErrorLgText";
import ButtonErrorMdText from "../buttons/ButtonErrorMdText";
import ButtonErrorSmText from "../buttons/ButtonErrorSmText";
import ButtonErrorXsText from "../buttons/ButtonErrorXsText";
import ButtonErrorXxsText from "../buttons/ButtonErrorXxsText";
import ButtonSuccessLgFilled from "../buttons/ButtonSuccessLgFilled";
import ButtonSuccessMdFilled from "../buttons/ButtonSuccessMdFilled";
import ButtonSuccessSmFilled from "../buttons/ButtonSuccessSmFilled";
import ButtonSuccessXsFilled from "../buttons/ButtonSuccessXsFilled";
import ButtonSuccessXxsFilled from "../buttons/ButtonSuccessXxsFilled";
import ButtonSuccessLgOutlined from "../buttons/ButtonSuccessLgOutlined";
import ButtonSuccessMdOutlined from "../buttons/ButtonSuccessMdOutlined";
import ButtonSuccessSmOutlined from "../buttons/ButtonSuccessSmOutlined";
import ButtonSuccessXsOutlined from "../buttons/ButtonSuccessXsOutlined";
import ButtonSuccessXxsOutlined from "../buttons/ButtonSuccessXxsOutlined";
import ButtonSuccessLgText from "../buttons/ButtonSuccessLgText";
import ButtonSuccessMdText from "../buttons/ButtonSuccessMdText";
import ButtonSuccessSmText from "../buttons/ButtonSuccessSmText";
import ButtonSuccessXsText from "../buttons/ButtonSuccessXsText";
import ButtonSuccessXxsText from "../buttons/ButtonSuccessXxsText";

export const Test = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        backgroundColor: "#222",
      }}
    >
      {/* Prime */}
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonPrimaryLgFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonPrimaryLgFilled>
        <ButtonPrimaryMdFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryMdFilled>
        <ButtonPrimarySmFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimarySmFilled>
        <ButtonPrimaryXsFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXsFilled>
        <ButtonPrimaryXxsFilled
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXxsFilled>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonPrimaryLgOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonPrimaryLgOutlined>
        <ButtonPrimaryMdOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryMdOutlined>
        <ButtonPrimarySmOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimarySmOutlined>
        <ButtonPrimaryXsOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXsOutlined>
        <ButtonPrimaryXxsOutlined
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXxsOutlined>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonPrimaryLgText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonPrimaryLgText>
        <ButtonPrimaryMdText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryMdText>
        <ButtonPrimarySmText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimarySmText>
        <ButtonPrimaryXsText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXsText>
        <ButtonPrimaryXxsText
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonPrimaryXxsText>
      </span>
      {/* Second */}
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSecondaryLgFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSecondaryLgFilled>
        <ButtonSecondaryMdFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryMdFilled>
        <ButtonSecondarySmFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondarySmFilled>
        <ButtonSecondaryXsFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXsFilled>
        <ButtonSecondaryXxsFilled
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXxsFilled>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSecondaryLgOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSecondaryLgOutlined>
        <ButtonSecondaryMdOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryMdOutlined>
        <ButtonSecondarySmOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondarySmOutlined>
        <ButtonSecondaryXsOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXsOutlined>
        <ButtonSecondaryXxsOutlined
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXxsOutlined>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSecondaryLgText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSecondaryLgText>
        <ButtonSecondaryMdText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryMdText>
        <ButtonSecondarySmText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondarySmText>
        <ButtonSecondaryXsText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXsText>
        <ButtonSecondaryXxsText
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSecondaryXxsText>
      </span>
      {/* Error */}
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonErrorLgFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonErrorLgFilled>
        <ButtonErrorMdFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorMdFilled>
        <ButtonErrorSmFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorSmFilled>
        <ButtonErrorXsFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXsFilled>
        <ButtonErrorXxsFilled
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXxsFilled>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonErrorLgOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonErrorLgOutlined>
        <ButtonErrorMdOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorMdOutlined>
        <ButtonErrorSmOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorSmOutlined>
        <ButtonErrorXsOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXsOutlined>
        <ButtonErrorXxsOutlined
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXxsOutlined>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonErrorLgText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonErrorLgText>
        <ButtonErrorMdText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorMdText>
        <ButtonErrorSmText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorSmText>
        <ButtonErrorXsText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXsText>
        <ButtonErrorXxsText
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonErrorXxsText>
      </span>
      {/* Success */}
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSuccessLgFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSuccessLgFilled>
        <ButtonSuccessMdFilled
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessMdFilled>
        <ButtonSuccessSmFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessSmFilled>
        <ButtonSuccessXsFilled
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXsFilled>
        <ButtonSuccessXxsFilled
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXxsFilled>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSuccessLgOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSuccessLgOutlined>
        <ButtonSuccessMdOutlined
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessMdOutlined>
        <ButtonSuccessSmOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessSmOutlined>
        <ButtonSuccessXsOutlined
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXsOutlined>
        <ButtonSuccessXxsOutlined
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXxsOutlined>
      </span>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#222",
        }}
      >
        <ButtonSuccessLgText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled
        >
          عنوان دکمه
        </ButtonSuccessLgText>
        <ButtonSuccessMdText
          leftIcon={<Eye size="24" />}
          rightIcon={<Eye size="24" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessMdText>
        <ButtonSuccessSmText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessSmText>
        <ButtonSuccessXsText
          leftIcon={<Eye size="20" />}
          rightIcon={<Eye size="20" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXsText>
        <ButtonSuccessXxsText
          leftIcon={<Eye size="16" />}
          rightIcon={<Eye size="16" />}
          disabled={false}
        >
          عنوان دکمه
        </ButtonSuccessXxsText>
      </span>
    </div>
  );
};
