import { useEffect } from "react";
import ViewSDKClient from "../../../ViewSDKClient";
import { Box } from "@mui/material";
import { TextCenterBox } from "../containers/containers";
import styled from "@emotion/styled";

const PdfViewerBox = styled(TextCenterBox)(({ theme }) => ({
  height: "590px",
}));

export const TabsPDFViewer = ({ url, fileName }) => {
  const loadPDF = () => {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile(
        "pdf-div",
        {
          showAnnotationTools: false,
          showLeftHandPanel: false,
          showPageControls: true,
          showDownloadPDF: false,
          showPrintPDF: false,
        },
        url,
        fileName
      );
    });
  };
  useEffect(() => {
    loadPDF();
  }, []);
  useEffect(() => {
    loadPDF();
  }, [url]);
  return (
    <Box className="office-viewer">
      <PdfViewerBox id="pdf-div" className="full-window-div"></PdfViewerBox>
    </Box>
  );
};
