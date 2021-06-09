import Contact from "../models/contactModel.js";
import asyncHandler from "express-async-handler";





//@desc  contact send
//@route POST /api/users/
//@ccess PUBLIC

const contact = asyncHandler(async (req, res) => {
    const { name, email, mobileNumber, message } = req.body;
  
    
  
    
  
    const contact_person = await Contact.create({
      name,
      email,
      mobileNumber,
      message
    });
  
    if (contact_person) {
      res.status(201).json({
        _id: contact_person._id,
        name: contact_person.name,
        email: contact_person.email,
        mobileNumber: contact_person.mobileNumber,
        message: contact_person.message,
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  });

  export{
      contact

  }
  