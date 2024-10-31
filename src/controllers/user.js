import { getUsers, addUser, updateUser, deleteUser } from '../db.js'

async function GetUsers(req, res) {
  res.send(await getUsers())
}

async function AddUser(req, res) {
  // const user = req.body
  // await addUser(user.nev, user.email)
  const { email, nev } = req.body // email, nev
  await addUser(nev, email)
  res.send('Megerkezett valasz')
}

async function UpdateUser(req, res) {
  const id = req.params.hozzaszolasid
  const { email, nev } = req.body // email, nev
  res.send(await updateUser(id, nev, email))
}

async function DeleteUser(req, res) {
  const { id } = req.params
  res.send(await deleteUser(id))
}

export const userController = {
  GetUsers,
  AddUser,
  UpdateUser,
  DeleteUser
}
