import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/mongoose/dbConnect'
import mongoose from 'mongoose'
import NoteModel from '@/mongoose/models/Note'

export async function POST(req: NextRequest) {
  if (!mongoose.connection.readyState) {
    try {
      await dbConnect()
      console.log('Connected to database')
    } catch (err) {
      NextResponse.json(
        { error: 'Error connecting to databases' },
        { status: 200 }
      )
      console.log('Error connecting to database')
    }
  }

  const body = await req.json()
  const {
    user_id,
    title,
    note,
    tag,
  }: { user_id: string; title: string; note: string; tag: string } = body

  try {
    const newNote = new NoteModel({
      user_id,
      title,
      note,
      tag,
    })
    const createdNote = await newNote.save()
    NextResponse.json({ createdNote }, { status: 200 })
  } catch (err) {
    NextResponse.json(
      { message: 'Error: note could not be created' },
      { status: 500 }
    )
  }

  return new Response(JSON.stringify({ body }))
}
