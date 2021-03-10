import { Portal } from "reakit/Portal";
import {
  useDialogState,
  Dialog,
  DialogDisclosure,
  DialogBackdrop,
} from "reakit/Dialog";

const Dialog = ()=> {
  const dialog = useDialogState();
  return (
    <>
      <DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
      <DialogBackdrop {...dialog}>
        <Dialog {...dialog} aria-label="Welcome">
          Welcome to Reakit!
        </Dialog>
      </DialogBackdrop>
    </>
  );
}

export default Dialog;