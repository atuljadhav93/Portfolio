import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { PDF_WORKER_URL } from "../constants/const";
import RESUME_PATH from "../assets/Atul Jadhav Resume.pdf";

function PdfViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl={PDF_WORKER_URL}>
      <Viewer
        fileUrl={RESUME_PATH}
        plugins={[defaultLayoutPluginInstance]}
        defaultScale={1.5}
      />
    </Worker>
  );
}

export default PdfViewer;
