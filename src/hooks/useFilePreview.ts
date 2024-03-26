import { useEffect, useState } from 'react';

export default function useFilePreview(fileList: FileList | null) {
  const [imgSrc, setImgSrc] = useState<string>();

  useEffect(() => {
    if (fileList && fileList[0]) {
      const newUrl = URL.createObjectURL(fileList[0]);

      if (newUrl !== imgSrc) {
        setImgSrc(newUrl);
      }
    }
  }, [fileList]);

  return { previewSrc: imgSrc, setPreviewSrc: setImgSrc };
}
