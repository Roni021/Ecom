import mongoose, { Schema, model, models } from 'mongoose';

interface ICloudFile {
  url: string;
  public_id: string;
  fileType: 'image' | 'pdf' | string;
  fileName?: string;
  uploadedBy?: mongoose.Schema.Types.ObjectId;
  createdAt?: Date;
}

const CloudFileSchema = new Schema<ICloudFile>({
  url: { type: String, required: true },
  public_id: { type: String, required: true },
  fileType: { type: String, required: true },
  fileName: { type: String },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
  createdAt: { type: Date, default: Date.now },
});

const CloudFile = models.CloudFile || model<ICloudFile>('CloudFile', CloudFileSchema);

export default CloudFile;
