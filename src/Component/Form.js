import React, { useState } from "react";

function Form() {
  const [validationMessages, setValidationMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const handleChange = ({ target }) => {
    console.log(target);
    setFormData({ ...formData, [target.name]: target.value });
    
  };
  const handleClick = (e) => {
    validateForm();
    e.preventDefault();
    console.log(formData);
  };

  const detail = () => {
    if(validationMessages.length<=0) {
      return(
        <ul>
        {Object.values(formData).map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
      )
        
    }
  }

  const validateForm = () => {
    const { firstName, lastName, DOB, gender, address,subject, phone, hobbies, userfile } = formData;
    setValidationMessages([]);
    let messages = [];
    if (!firstName) {
      messages.push("First Name is required");
    }
    if (!lastName) {
      messages.push("Last Name is required");
    }
    if (!gender) {
      messages.push("Please select a Gender");
    }
    if (!DOB) {
      messages.push("Date of Birth is required");
    }
    if (!address) {
      messages.push("address is required");
    }
    if (!subject) {
      messages.push("subject is required");
    }

    if (!phone) {
      messages.push("phone.no is required");
    }
    if (!hobbies) {
      messages.push("hobbies is required");
    }
    if (!userfile) {
      messages.push("userfile is required");
    }
    setValidationMessages(messages);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center",  }}>
      <form style={{ display: "flex", flexDirection: "column", border: "2px solid black", padding: "15px", marginTop:"5px"}}>
        <label>First Name</label>
        <input
          value={formData.firstName || ""}
          onChange={handleChange}
          type="text"
          name="firstName"
        />
        <label>Last Name</label>
        <input
          value={formData.lastName || ""}
          onChange={handleChange}
          type="text"
          name="lastName"
        />
        <label>Date of Birth</label>
        <input
          value={formData.DOB || ""}
          onChange={handleChange}
          type="datetime-local"
          name="DOB"
        />
        <label>Gender</label>
        <div>
          <input
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
            type="radio"
            name="gender"
          />
          Male
        </div>
        <div>
          <input
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            type="radio"
            name="gender"
          />
          Female
        </div>
        <div>
          <input
            value="None"
            checked={formData.gender === "None"}
            onChange={handleChange}
            type="radio"
            name="gender"
          />
          Prefer not to say
        </div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={formData.address || ""}
        />
        <br />
        <label>Phone No:</label>
        <input
          type="number"
          name="phone"
          onChange={handleChange}
          value={formData.phone || ""}
        />
        <br />
        <label>Subject:</label>
        <select name="subject" value={formData.subject} onChange={handleChange} required>
          <option value=""  name="subject">None</option>
          <option value="Maths"  name="subject">Maths</option>
          <option value="English"   name="subject">English</option>
          <option value="Science"  name="subject">Science</option>
        </select><br/>
        <div>
          <label>Hobbies: </label>
          <br />
          <input
            value="Cricket"
            checked={formData.hobbies === "Cricket"}
            onChange={handleChange}
            type="checkbox"
            name="hobbies"
          />
          Cricket
        </div>
        <div>
          <input
            value="Reading"
            checked={formData.hobbies === "Reading"}
            onChange={handleChange}
            type="checkbox"
            name="hobbies"
          />
          Reading
        </div>
        <div>
          <input
            value="Music"
            checked={formData.hobbies === "Music"}
            onChange={handleChange}
            type="checkbox"
            name="hobbies"
          />
          Music
        </div>
        <br />
        <input
          type="file"
          name="userfile"
          value={formData.userfile || ""}
          onChange={handleChange}
        /><br/>
        <button onClick={handleClick}>Submit</button>
        <br />
      </form>
      <div>
        {validationMessages.length > 0 && <span>Validation Summary</span>}
        <ul>
          {validationMessages.map((vm) => (
            <li key={vm}>{vm}</li>
          ))}
        </ul>
      </div>
        
      {detail()}
    </div>
  );
}

export default Form;
