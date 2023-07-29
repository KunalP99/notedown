import mongoose, { Schema, Document } from 'mongoose'

interface INote {
  user_id: string
  title: string
  note: string
  tag: string
}

export interface NoteDocument extends INote, Document {
  createdAt: Date
  updatedAt: Date
}

const NoteSchema = new Schema(
  {
    user_id: String,
    title: String,
    note: String,
    tag: String,
  },
  { timestamps: true }
)

const NoteModel =
  mongoose.models.NoteModel ||
  mongoose.model<NoteDocument>('NoteModel', NoteSchema)

export default NoteModel
