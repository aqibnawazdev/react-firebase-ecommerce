
import { toast } from "react-toastify";
export const dismissToast = () => toast.dismiss();
export const showToastMessage = (toastDetails) => {

    if (toastDetails.type === "success") {
        toast.success(toastDetails.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        });
    }
    else if (toastDetails.type === "loading") {
        toast.loading(toastDetails.message, {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        })
    }
    else if (toastDetails.type === "warn") {
        toast.warn(toastDetails.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        })
    }
    else {
        toast.error(toastDetails.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        });
    }
};