import { useState, useRef } from "react";
import { DEFAULT_OPTIONS } from "./lib/constants";
import SLider from "./components/slider";
import SidebarItem from "./components/sidebar-item";
import UploadImage from "./components/upload-image";
import { Button } from "./components/ui/button";

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [preview, setPreview] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  }

  console.log(getImageStyle());

  const canvasToImg = () => {
    try {
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = preview!;
        canvas.width = 400;
        canvas.height = 400;

        if (context) {
          context.filter = getImageStyle().filter;
          img.addEventListener("load", function () {
            context.drawImage(img, 0, 0, 400, 400);
            const tagA = document.createElement("a");
            document.body.appendChild(tagA);
            tagA.href = canvas.toDataURL();
            tagA.download = "canvas-image.png";
            tagA.click();
            document.body.removeChild(tagA);
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleSliderChange([value]: number[], property: string) {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        if (option.property !== property) return option;
        return { ...option, value };
      });
    });
  }

  return (
    <div className="flex py-8 gap-4 w-full max-md:flex-col justify-center min-h-screen items-center">
       <div className="flex flex-col">
       {!selectedFile && <UploadImage
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          preview={preview}
          setPreview={setPreview}
        />}
        <div className="flex flex-col">
          <img
            alt="profile"
            src={preview}
            className="md:rounded-md w-full max-w-[400px] h-auto"
            style={getImageStyle()}
          />
        </div>
       </div>
        <div className="flex flex-col w-full max-md:p-4 md:w-[50%] gap-2">
          {selectedFile && (
            <div className="flex gap-2">
              <Button onClick={canvasToImg} className="w-full flex">
              Download
            </Button>
            <Button onClick={() => setSelectedFile(undefined)} className="w-full flex">
              New
            </Button>
            </div>
          )}

          {selectedFile && (
            <div className="justify-center items-center flex flex-col">
              <div className="flex w-full flex-col">
                {options.map((option, index) => {
                  return (
                    <div key={index} className="flex flex-col">
                      {option.name + " " + option.value}
                      <SLider
                        min={option.range.min}
                        max={option.range.max}
                        value={[option.value]}
                        handleChange={(value) => handleSliderChange(value, option.property)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="hidden">
          <canvas ref={canvasRef} />
        </div>
    </div>
  );
}

export default App;
