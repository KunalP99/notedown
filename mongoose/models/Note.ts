import mongoose, { Schema, Document } from 'mongoose'

interface INote {
  user_id: string
  note_id: string
  title: string
  note: string
  tag: string
  favourite: boolean
}

export interface NoteDocument extends INote, Document {
  createdAt: Date
  updatedAt: Date
}

const NoteSchema = new Schema(
  {
    user_id: String,
    note_id: String,
    title: String,
    note: String,
    tag: String,
    favourite: Boolean
  },
  { timestamps: true }
)

const NoteModel =
  mongoose.models.NoteModel ||
  mongoose.model<NoteDocument>('NoteModel', NoteSchema)

export default NoteModel
