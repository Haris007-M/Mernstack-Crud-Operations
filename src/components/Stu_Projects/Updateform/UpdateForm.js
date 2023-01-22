import React, { useState } from "react";
import axios from "axios";
export default function UpdateForm({ item, currentData, setData }) {
  const [formData, setFormData] = useState(item);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:8001/stuProjects",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    const items = await axios.get("http://localhost:8001/stuProjects");
    setData(items.data);
  };
  return (
    <>
      <tr key={item._id}>
        <td>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="type your name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="title"
            value={formData.title}
            onChange={handleChange}
            id="validationServerUsername"
            required
          />
        </td>
        <td>
          <input
            type="date"
            name="startDate"
            className="form-control"
            id="name"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <select
            className="form-select"
            name="duration"
            id="validationServer05"
            value={formData.duration}
            onChange={handleChange}
            required>
            <option defaultValue disabled value=""></option>
            <option value="1_Month">1_MONTH</option>
            <option value="2_Month">2_MONTH</option>
            <option value="3_Month">3_MONTH</option>
            <option value="4_Month">4_MONTH</option>
            <option value="5_Month">5_MONTH</option>
            <option value="6_Month">6_MONTH</option>
          </select>
        </td>
        <td>
          <input
            type="number"
            name="day"
            className="form-control"
            id="day"
            value={formData.day}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <select
            className="form-select"
            name="status"
            id="validationServer05"
            value={item.status}
            onChange={handleChange}
            required>
            <option defaultValue disabled value=""></option>
            <option>On going</option>
            <option>Pending</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            onClick={handleUpdate}
            className="btn btn-secondary">
            Update
          </button>
        </td>
      </tr>
    </>
  );
}
