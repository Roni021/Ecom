import mongoose, { Schema, Document } from 'mongoose';

export interface CustomField {
  fieldName: string;
  value: string;
  x?: number;
  y?: number;
  fontSize?: number;
}

export interface IMediaFile extends Document {
  userId: mongoose.Types.ObjectId;
  fileName: string;
  cloudinaryUrl: string;
  cloudinaryPublicId: string;
  fileType: 'image' | 'pdf';
  fileSize: number;
  customFields?: CustomField[];
  originalFileName: string;
  uploadedAt: Date;
  updatedAt: Date;
}

const MediaFileSchema = new Schema<IMediaFile>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    originalFileName: {
      type: String,
      required: true,
    },
    cloudinaryUrl: {
      type: String,
      required: true,
    },
    cloudinaryPublicId: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      enum: ['image', 'pdf'],
      required: true,
    },
    fileSize: {
      type: Number,
      required: true,
    },
    customFields: [
      {
        fieldName: String,
        value: String,
        x: { type: Number, default: 50 },
        y: { type: Number, default: 50 },
        fontSize: { type: Number, default: 12 },
      },
    ],
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const MediaFile =
  mongoose.models.MediaFile ||
  mongoose.model<IMediaFile>('MediaFile', MediaFileSchema);
