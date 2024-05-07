import axios from 'axios';
import { saveAs } from 'file-saver';
import { errorToast, successToast } from 'src/handlers/toast';

interface IDownloadFile {
  file_url: string;
  file_name: string;
}

const downloadFile = async ({
  file_url,
  file_name,
}: IDownloadFile): Promise<void> => {
  try {
    await axios({
      url: file_url,
      method: 'GET',
      responseType: 'blob',
    })
      .then(async response => {
        await saveAs(response.data, file_name);
        successToast({ message: 'File Downloaded!' });
      })
      .catch((error: string) => {
        errorToast({ message: error });
      });
  } catch (err) {
    errorToast({ message: (err as any)?.message });
  }
};

export { downloadFile };
