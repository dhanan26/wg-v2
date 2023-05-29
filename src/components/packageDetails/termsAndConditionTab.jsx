import { TabsPDFViewer } from "../common/PdfViewer/PdfViewer";

export const TermsAndCondition = ({ url, fileName }) => {
  return (
    <>
      <TabsPDFViewer url={url} fileName={fileName} />
    </>
  );
};
