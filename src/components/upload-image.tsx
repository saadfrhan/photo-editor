import { useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface UploadImageI {
    preview: string;
    setPreview: React.Dispatch<React.SetStateAction<string>>;
    selectedFile: File | undefined;
    setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const UploadImage = ({
  preview,
  setPreview,
  selectedFile,
  setSelectedFile,
}: UploadImageI) => {
  console.log(setSelectedFile);
  console.log(preview);

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, setPreview]);

  const onSelectFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="grid w-full items-center gap-1.5 max-md:p-4">
      <Label htmlFor="file-upload">
        Picture
      </Label>
      <Input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={onSelectFile}
      />
    </div>
  );
};

export default UploadImage;