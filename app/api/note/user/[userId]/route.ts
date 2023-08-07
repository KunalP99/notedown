import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/mongoose/dbConnect'
import mongoose from 'mongoose'
import NoteModel from '@/mongoose/models/Note'

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  // Check if application is already connect to database, if not, then connect to the database
  if (!mongoose.connection.readyState) {
    try {
      await dbConnect()
      console.log('Connected to database')
    } catch (err) {
      NextResponse.json(
        { error: 'Error connecting to databases' },
        { status: 500 }
      )
      console.log('Error connecting to database')
    }
  }

  const user_id = params.userId

  try {
    const notes = await NoteModel.find({ user_id: user_id })
    NextResponse.json({ notes }, { status: 200 })
    return new Response(JSON.stringify({ notes }))
  } catch (err) {
    NextResponse.json({ error: 'Error getting note' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  // Check if application is already connect to database, if not, then connect to the database
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
    favourite,
  }: {
    user_id: string
    title: string
    note: string
    tag: string
    favourite: boolean
  } = body

  try {
    const newNote = new NoteModel({
      user_id,
      title,
      note,
      tag,
      favourite,
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

export async function DELETE(req: NextRequest) {
  // Check if application is already connect to database, if not, then connect to the database
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
  const { _id }: { _id: string } = body

  try {
    const noteToDelete = await NoteModel.findOneAndDelete({ _id })
    NextResponse.json({ noteToDelete }, { status: 200 })
  } catch (err) {
    NextResponse.json(
      { message: 'Error: note could not be deleted ' },
      { status: 500 }
    )
  }

  return new Response(JSON.stringify({ body }))
}
