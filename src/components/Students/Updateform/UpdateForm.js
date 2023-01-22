import React, { useState } from "react";
import axios from "axios";
export default function UpdateForm({ item, currentData, setInterneeData }) {
  const [formData, setFormData] = useState(item);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:8002/students",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    const items = await axios.get("http://localhost:8002/students");
    setInterneeData(items.data);
  };
  return (
    <>
      <tr key={item._id}>
        <td>
          <input
            type="number"
            name="interneeNo"
            className="form-control"
            onChange={handleChange}
            value={formData.interneeNo}
            id="internee"
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            id="name"
            required
          />
        </td>
        <td>
          <input
            type="file"
            name="image"
            accept="image/jpeg/Png"
            className="form-control"
            onChange={handleChange}
            value=""
            id="validationServerUsername"
            required
          />
        </td>
        <td>
          <select
            className="form-select"
            onChange={handleChange}
            value={formData.duration}
            name="duration"
            id="validationServer05"
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
            type="date"
            name="joinDate"
            className="form-control"
            onChange={handleChange}
            value={formData.joinDate}
            id="date"
            required
          />
        </td>
        <td>
          <select
            className="form-select"
            name="technology"
            onChange={handleChange}
            value={formData.technology}
            id="validationServer04"
            required>
            <option defaultValue disabled value=""></option>

            <option value="HTML/CSS">HTML/CSS</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="VIDEO EDITING">VIDEO EDITING</option>
            <option value="ANIMATIONS">ANIMATIONS</option>
            <option value="WORDPRESS">WORDPRESS</option>
            <option value="PHP">PHP</option>
            <option value="ASP.NET / MVC">ASP.NET / MVC</option>
            <option value="LARAVEL">LARAVEL</option>
            <option value="CODIGNITOR">CODIGNITOR</option>
            <option value="Android Development">Android Development</option>
            <option value="React Native">React Native</option>
            <option value="JAVA EE/SE">JAVA EE/SE</option>
            <option value="NODE JS">NODE JS</option>
            <option value="REACT JS">REACT JS</option>
            <option value="PYTHON">PYTHON</option>
            <option value="C#">C#</option>
            <option value="Flutter">Flutter</option>
            <option value="SEO">SEO</option>
            <option value="SQA">SQA</option>
            <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
            <option value="UNITY">UNITY</option>
            <option value="BLOCKCHAIN">BLOCKCHAIN</option>
            <option value="ARTIFICAL INTELLIGENCE">
              ARTIFICAL INTELLIGENCE
            </option>
            <option value="PROJECT MANAGEMENT">PROJECT MANAGEMENT</option>
            <option value="ADMINISTRATION">ADMINISTRATION</option>
            <option value="NETWORKING">NETWORKING</option>
            <option value="ACCOUNTING">ACCOUNTING</option>
            <option value="OTHERS">OTHERS</option>
          </select>
        </td>
        <td>
          <input
            type="number"
            name="attendance"
            className="form-control"
            onChange={handleChange}
            value={formData.attendance}
            id="validationServerUsername"
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="project"
            className="form-control"
            onChange={handleChange}
            value={formData.project}
            id="validationServer03"
            required
          />
        </td>
        <td>
          <select
            className="form-select"
            onChange={handleChange}
            value={formData.status}
            name="status"
            id="validationServer05"
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
