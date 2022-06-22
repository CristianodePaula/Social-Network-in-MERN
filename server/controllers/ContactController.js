const ContactModel = require ("../models/Contact")
const mongoose = require('mongoose')

const createContact = async (req, res) => {
  const newContact = new ContactModel(req.body)

  try {
    await newContact.save()
    res.status(200).json("Menssagem enviada com sucesso!")
  } catch (error) {
    res.status(500).json(error)
  }
}

const getContact = async (req, res) => {
  const id = req.params.id

  try {
    const contact = await ContactModel.findById(id)
    res.status(200).json(contact)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteContact = async (req, res) => {
 
  try {
    await Contact.findByIdAndDelete(req.params.id)
      res.status(200).json("Menssagem deletada com sucesso")
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { 
  createContact,
  getContact,
  deleteContact,
}