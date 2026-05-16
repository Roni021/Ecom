import mongoose, { Schema, model, models } from 'mongoose';

interface ICloudFile {
  url: string;
  public_id: string;
  fileType: 'image' | 'pdf' | string;
  createdAt?: Date;
}

const CloudFileSchema = new Schema<ICloudFile>({
  url: { type: String, required: true },
  public_id: { type: String, required: true },
  fileType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const CloudFile = models.CloudFile || model<ICloudFile>('CloudFile', CloudFileSchema);

export default CloudFile;
