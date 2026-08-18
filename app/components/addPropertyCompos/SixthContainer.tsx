import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { UploadIcon } from "lucide-react";
import { IoClose } from "react-icons/io5";
import { CiImageOn } from 'react-icons/ci';
import { ImageFile } from '@/app/(Pages)/addProperty/page';

interface SixthContainerProps {
  images: ImageFile[];
  setImages: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  youtubeVideo: string
  setYoutubeVideo: React.Dispatch<React.SetStateAction<string>>;
}

const YTContainer = ({images, setImages, youtubeVideo, setYoutubeVideo}:SixthContainerProps) => {


  interface ImageFile {
  id: string;
  url: string;
  file: File;
}
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [images, setImages] = useState<ImageFile[]>([]);


  const handleContainerClick = () => {
    // Only open file picker if limit not reached
    if (images.length < 5) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const availableSlots = 5 - images.length;
    if (availableSlots <= 0) return;

    const newFiles = Array.from(files).slice(0, availableSlots);

    const newImageEntries: ImageFile[] = newFiles.map((file) => ({
      id: `${file.name}-${Date.now()}-${Math.random()}`,
      url: URL.createObjectURL(file),
      file: file,
    }));

    setImages((prev) => [...prev, ...newImageEntries]);

    // Reset input value so re-uploading the same file triggers onChange
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveImage = (idToRemove: string) => {
    setImages((prev) => {
      const target = prev.find((img) => img.id === idToRemove);
      if (target) {
        URL.revokeObjectURL(target.url); // Clean up memory
      }
      return prev.filter((img) => img.id !== idToRemove);
    });
  };


 


  return (
    <div className='border border-black/10 p-6 rounded-2xl' >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="hidden"
              />
              <div className="flex flex-col gap-6 pb-8 border-b border-black/5">
      {/* Section Title */}
      <div className="flex gap-3">
        <span className="h-10 w-10 shrink-0 bg-[#F84F75] text-white flex items-center justify-center rounded-full font-semibold">
          6
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg">Photos & Videos</h3>
          <p className="text-gray-600 text-sm">
            High-quality photos attract more tenants. The first image becomes the cover photo.
          </p>
        </div>
      </div>
               {/* Subheader & Counter */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-1 font-semibold">
            Property Images <span className="text-red-500">*</span>
          </p>
          <span className="text-gray-600 text-sm font-medium">
            {images.length}/5
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          Upload high-quality images to attract more tenants. First image will be the cover photo.
        </p>
      </div>

      {/* <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/webp"
        multiple
        className="hidden"
      /> */}

               <div
        onClick={handleContainerClick}
        className={`border-2 border-dashed p-6 flex items-center justify-center bg-[#F6F7F8] rounded-2xl transition-colors ${
          images.length >= 5
            ? "opacity-50 cursor-not-allowed border-gray-300"
            : "cursor-pointer border-gray-300 hover:border-gray-400 hover:bg-gray-100/80"
        }`}
      >
        <div className="flex flex-col gap-3 items-center text-center">
          <span className="h-12 w-12 rounded-full bg-white text-red-500 shrink-0 flex items-center justify-center shadow-sm">
            <UploadIcon size={25} />
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-[16px] text-gray-800">
              {images.length >= 5
                ? "Maximum 5 images reached"
                : "Click to upload property images"}
            </h3>
            <span className="text-gray-600 text-[12px]">
              {images.length >= 5
                ? "Remove an image to upload another"
                : "or drag and drop your images here"}
            </span>
          </div>
        </div>
      </div>


{images.length > 0 && (
        <div className="flex flex-col gap-2 " onClick={handleContainerClick}>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Uploaded Photos
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {images.map((img, index) => (
              <div
                key={img.id}
                className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 group bg-gray-50 shadow-sm"
              >
                <Image
                  src={img.url}
                  fill
                  alt={`Property preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Cover Badge for First Image */}
                {index === 0 && (
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
                    Cover
                  </span>
                )}

                {/* Delete Button (Top Right) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage(img.id);
                  }}
                  className="absolute top-2 right-2 bg-black/60 hover:bg-red-600 text-white p-1 rounded-full transition-colors shadow-md focus:outline-none"
                  title="Remove image"
                >
                  <IoClose size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

                {/* Image Guideliens  */}
                <div className='border-dotted p-6 bg-[#EFF4FF] rounded-2xl  '>
                  <div className='flex flex-col gap-3 text-blue-500'>
                    <div className='flex items-center gap-2'>
                      <CiImageOn size={18} />
                      <p className='font-semibold text-[15px]'>Image Guidelines</p>
                    </div>
                    {/* Points  */}
                    <div className='flex flex-col gap-1 ml-6'>

                      <div className='flex items-center gap-1 text-[12px]'>
                        <span className='h-2 w-2 shrink-0 rounded-full border'></span>
                        <p>Formats: JPG, PNG, WebP</p>
                      </div>

                      <div className='flex items-center gap-1 text-[12px]'>
                        <span className='h-2 w-2 shrink-0 rounded-full border'></span>
                        <p>Max size: 5MB per image</p>
                      </div>

                      <div className='flex items-center gap-1 text-[12px]'>
                        <span className='h-2 w-2 shrink-0 rounded-full border'></span>
                        <p>Upload: 1-5 images</p>
                      </div>

                      <div className='flex items-center gap-1 text-[12px]'>
                        <span className='h-2 w-2 shrink-0 rounded-full border'></span>
                        <p>First image = Cover photo</p>
                      </div>
                    </div>


                  </div>
                </div>


                {/* Yt Link COntainer  */}
                 <div className='flex flex-col gap-2'>
                  <h3 className='font-semibold text-semibold'>YouTube Video Link <span className='text-gray-600 font-normal'>(optional)</span></h3>
                  <input type="text"  value={youtubeVideo} onChange={(e) => setYoutubeVideo(e.target.value)} placeholder='Enter your link here...' className='outline-none text-gray-600 py-1.5 px-4 border border-black/10 rounded-xl w-full' />
                  <p className='text-gray-500 text-[12px]'>Add a video walkthrough to build trust. Paste a YouTube link (e.g. https://youtu.be/XXXXXXXXXXX) or just the video ID.</p>
                </div>
              </div>
            </div>
  )
}

export default YTContainer