import axios from 'axios';
import { saveAs } from 'file-saver';
import {
  loadingToast,
  updateLoadingToastToError,
  updateLoadingToastToSuccess,
} from 'src/handlers/toast';

// eslint-disable-next-line no-undef
interface IDownloadFile {
  file_url: string; // eslint-disable-line no-undef
  file_name: string; // eslint-disable-line no-undef
}

const downloadFile = async ({
  file_url,
  file_name,
}: IDownloadFile): Promise<void> => {
  try {
    loadingToast({ message: 'Downloading...' });
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
