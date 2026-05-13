import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login(){
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
    policies: false,
  });
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
    ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
      navigate("/home");
  };
  return (
  <div className="flex justify-center mt-10">
    <form
      onSubmit={handleSubmit}
      className="border p-5 rounded w-[300px]"
    >
    <h1 className="text-2xl font-bold mb-4">
          Login Form
    </h1>
      <input
  type="email"
  name="email"
  placeholder="Enter Email"
  className="border w-full p-2 mb-3"
  onChange={handleChange}
/>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
        />

        <div className="mb-2">
          <input
            type="checkbox"
            name="remember"
            onChange={handleChange}
          />

          <label className="ml-2">
            Remember Me
          </label>
        </div>

        <div className="mb-3">
          <input
            type="checkbox"
            name="policies"
            onChange={handleChange}
          />

          <label className="ml-2">
            Accept Our Policies
          </label>
        </div>

        <button className="bg-black text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;