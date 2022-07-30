const ContactModel = require ("../models/Contact.js")
const mongoose = require('mongoose')

const createContact = async (req, res) => {
    const newContact = new ContactModel(req.body)
  
    try {
      await newContact.save();
      res.status(200).json("Menssagem criada com sucesso!")
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const getAllContacts = async (req, res) => {
    const id = req.params.id
  
    try {
      const page = await ContactModel.find(id)
      res.status(200).json(page)
    } catch (error) {
      res.status(500).json(error)
    }
  }


  const deleteContact = async (req, res) => {
    const id = req.params.id
    const { userId } = req.body
  
    try {
      const page = await ContactModel.findById(id)
      if (page.userId === userId) {
        await page.deleteOne()
        res.status(200).json("Menssagem deletada com sucesso")
      } else {
        res.status(403).json("Acesso negado")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

  module.exports = { 
    createContact,
    getAllContacts,
    deleteContact
  }