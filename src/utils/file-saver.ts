import axios from 'axios';
import { saveAs } from 'file-saver';
import {
  reEnableLoadingToast,
  updateLoadingToastToError,
  updateLoadingToastToSuccess,
} from 'src/handlers/toast';

interface IDownloadFile {
  file_url: string;
  file_name: string;
}

const downloadFile = async ({
  file_url,
  file_name,
}: IDownloadFile): Promise<void> => {
  try {
    reEnableLoadingToast({ message: 'Downloading...' });
    const response = await axios.get(file_url, {
      responseType: 'blob',
    });

    if (response && response.data) {
      saveAs(response.data, file_name);
      updateLoadingToastToSuccess({ message: 'File Downloaded!' });
    } else {
      updateLoadingToastToError({ message: 'Failed to download file' });
    }
  } catch (error) {
    let errorMessage = 'An error occurred while downloading the file';
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || errorMessage;
    }
    updateLoadingToastToError({ message: errorMessage });
  }
};

export { downloadFile };
