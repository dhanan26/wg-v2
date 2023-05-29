import { TabsPDFViewer } from "../common/PdfViewer/PdfViewer";
export const Team = ({url, fileName}) => {
  return (
    <>
      <TabsPDFViewer url={url} fileName={fileName} />
    </>
  );
};
