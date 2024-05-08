import { toast } from 'react-toastify';

interface IToast {
  message: string;
}

const loadingToastId = 'loadingToast';

const errorToast = ({ message }: IToast) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
  });
};

const successToast = ({ message }: IToast) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
  });
};

const infoToast = ({ message }: IToast) => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
  });
};

const loadingToast = ({ message }: Partial<IToast>) => {
  toast.info(message || 'Loading...', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: 'light',
    isLoading: true,
    toastId: loadingToastId,
    type: 'info',
  });
};

const reEnableLoadingToast = ({ message }: IToast) => {
  toast.update(loadingToastId, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: 'light',
    isLoading: true,
    toastId: loadingToastId,
    type: 'info',
    render: message,
  });
};

const updateLoadingToastToError = ({ message }: IToast) => {
  toast.update(loadingToastId, {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: 'light',
    toastId: loadingToastId,
    type: 'error',
    isLoading: false,
    autoClose: 4000,
    render: message,
  });
};

const updateLoadingToastToSuccess = ({ message }: IToast) => {
  toast.update(loadingToastId, {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: 'light',
    toastId: loadingToastId,
    type: 'success',
    isLoading: false,
    autoClose: 4000,
    render: message,
  });
};

export {
  errorToast,
  successToast,
  infoToast,
  loadingToast,
  reEnableLoadingToast,
  updateLoadingToastToError,
  updateLoadingToastToSuccess,
};
