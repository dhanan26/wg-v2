import { TabsPDFViewer } from "../common/PdfViewer/PdfViewer";
export const Team = () => {
  const url = import.meta.env.VITE_APP_TEAM_PDF
  const fileName = "Team";
  return (
    <>
      <TabsPDFViewer url={url} fileName={fileName} />
    </>
  );
};
