export const getNotes = async () => {
  return fetch('/api/note').then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: Error finding notes`)
    }
    return res.json()
  })
}

export const createNote = (
  user_id: string,
  note_id: string,
  title: string,
  note: string,
  tag: string,
  favourite: boolean
) => {
  return fetch('/api/note', {
    method: 'POST',
    body: JSON.stringify({
      user_id,
      note_id,
      title,
      note,
      tag,
      favourite,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: Error creating note`)
    }
    return res.json()
  })
}
