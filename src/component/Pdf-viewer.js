import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { PDF_WORKER_URL } from '../constants/const';
import RESUME_PATH from "../assets/Atul Jadhav Resume.pdf";


function PdfViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        // <iframe src={resume} width="100%" height="100%" title="resume" />
        <Worker workerUrl={PDF_WORKER_URL}>
            <Viewer fileUrl={RESUME_PATH}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </Worker>
    );
}

export default PdfViewer;
