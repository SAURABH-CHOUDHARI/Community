// lib/uploadthing.ts
import { createUploadthing } from "uploadthing/next";
import { UploadButton, UploadDropzone } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

// Export the components directly instead of generating them
export { UploadButton, UploadDropzone };