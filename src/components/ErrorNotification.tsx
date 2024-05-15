import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ErrorNotification({
  errors,
  onClose,
}: {
  errors: string[];
  onClose: () => void;
}) {
  return (
    <Collapse className="absolute w-80 top-7 right-7" in={errors.length > 0}>
      <Alert
        severity="error"
        className="bg-black text-red-300"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2, fontSize: "1rem" }}
      >
        {errors[0]}
      </Alert>
    </Collapse>
  );
}
