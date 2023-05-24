import { TabsPDFViewer } from "../common/PdfViewer/PdfViewer";

export const TermsAndCondition = () => {
  const url = import.meta.env.VITE_APP_TERM_AND_CONDITION_PDF;
  const fileName = "Terms and Condition";
  return (
    <>
      <TabsPDFViewer url={url} fileName={fileName} />
    </>
  );
};
