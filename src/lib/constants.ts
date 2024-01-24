import {Sun, Contrast, Blend, Image} from 'lucide-react';

export const DEFAULT_OPTIONS = [
    {
      name: "Brightness",
      property: "brightness",
      icon: Sun,
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Contrast",
      property: "contrast",
      icon: Contrast,
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Saturation",
      property: "saturate",
      icon: Blend,
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Grayscale",
      property: "grayscale",
      icon: Image,
      className: "text-muted-foreground",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Sepia",
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Hue Rotate",
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360,
      },
      unit: "deg",
    },
    {
      name: "Blur",
      property: "blur",
      value: 0,
      range: {
        min: 0,
        max: 20,
      },
      unit: "px",
    },
  ];
  