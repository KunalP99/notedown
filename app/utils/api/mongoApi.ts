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
  title: string,
  note: string,
  tag: string,
  favourite: boolean
) => {
  return fetch('/api/note', {
    method: 'POST',
    body: JSON.stringify({
      user_id,
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

export const deleteNote = (_id: string) => {
  return fetch('/api/note', {
    method: 'DELETE',
    body: JSON.stringify({
      _id,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: Error deleting note`)
    }
    return res.json()
  })
}

export const getOneNote = (_id: string) => {
  return fetch(`/api/note/${_id}`, {
    method: 'GET',
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: Error finding note`)
    }
    return res.json()
  })
}

export const updateFavourite = (_id: string, favourite: boolean) => {
  return fetch(`/api/note/${_id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      _id,
      favourite,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}: Error creating note`)
    }
    return res.json()
  })
}
