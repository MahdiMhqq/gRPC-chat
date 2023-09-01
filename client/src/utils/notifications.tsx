import { CloseCircle, Danger, InfoCircle, TickCircle } from "iconsax-react";
import { ToastOptions } from "react-toastify";
import { toast } from "react-toastify";

export const notificationSettings = {
  success: {
    type: "success",
    autoClose: 5000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    progressClassName: "h-[.325rem] bg-success",
    icon() {
      return (
        <TickCircle size="1.5rem" variant="Bold" className="text-success" />
      );
    },
    closeButton() {
      return (
        <CloseCircle
          size="1.5rem"
          variant="Linear"
          className="text-tDisabled hover:text-warning transition shrink-0"
        />
      );
    },
    bodyClassName: "text-tPrimary !items-start",
  },
  warning: {
    type: "warning",
    autoClose: 5000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    progressClassName: "h-[.325rem] bg-warning",
    icon() {
      return <Danger size="1.5rem" variant="Bold" className="text-warning" />;
    },
    closeButton() {
      return (
        <CloseCircle
          size="1.5rem"
          variant="Linear"
          className="text-tDisabled hover:text-warning transition shrink-0"
        />
      );
    },
    bodyClassName: "text-tPrimary !items-start",
  },
  error: {
    type: "error",
    autoClose: 5000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    progressClassName: "h-[.325rem] bg-error",
    icon() {
      return <InfoCircle size="1.5rem" variant="Bold" className="text-error" />;
    },
    closeButton() {
      return (
        <CloseCircle
          size="1.5rem"
          variant="Linear"
          className="text-tDisabled hover:text-warning transition shrink-0"
        />
      );
    },
    bodyClassName: "text-tPrimary !items-start",
  },
  info: {
    type: "info",
    autoClose: 5000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    progressClassName: "h-[.325rem] bg-linkPrimary",
    icon() {
      return (
        <InfoCircle size="1.5rem" variant="Bold" className="text-linkPrimary" />
      );
    },
    closeButton() {
      return (
        <CloseCircle
          size="1.5rem"
          variant="Linear"
          className="text-tDisabled hover:text-warning transition shrink-0"
        />
      );
    },
    bodyClassName: "text-tPrimary !items-start",
  },
} satisfies { [key: string]: ToastOptions };

export const addNotification = (
  type: keyof typeof notificationSettings,
  title: React.ReactNode,
  uniqueId?: string,
  otherOptions?: Omit<ToastOptions<{}>, "toastId">
) => {
  toast(title, {
    ...notificationSettings[type],
    toastId: uniqueId,
    ...otherOptions,
  });
};
