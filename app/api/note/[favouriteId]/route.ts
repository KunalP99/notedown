import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/mongoose/dbConnect'
import mongoose from 'mongoose'
import NoteModel from '@/mongoose/models/Note'

export async function PATCH(req: NextRequest) {
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

  const body = await req.json()
  const { _id }: { _id: string } = body

  try {
    const noteToUpdate = await NoteModel.findOneAndUpdate(
      { _id },
      { $set: body }
    )
    NextResponse.json({ noteToUpdate }, { status: 200 })
  } catch (err) {
    NextResponse.json(
      { message: 'Error: note could not be updated ' },
      { status: 500 }
    )
  }

  return new Response(JSON.stringify({ body }))
}
