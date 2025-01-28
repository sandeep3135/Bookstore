import React, { useState } from "react";
import toast from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    toast.success("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 mt-10 dark:bg-slate-900 dark:text-white">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row w-full overflow-hidden">
        {/* Left Section */}
        <div className="bg-pink-400 text-white p-8 flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8">
            Reach out to us for any inquiries, feedback, or assistance. We'd love
            to hear from you!
          </p>
          <p className="text-sm">
            <span className="font-bold">Email:</span> sandeep@gmail.com
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Phone:</span> +91-78088.....?
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Address:</span> Rajkot, Gujarat
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8 border dark:bg-slate-700 dark:text-white">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-white">Let’s Talk</h2>

          {success && <p className="text-green-500 mb-4">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300 dark:bg-slate-700 dark:text-white"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300 dark:bg-slate-700 dark:text-white"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.subject ? "border-red-500" : "border-gray-300 dark:bg-slate-700 dark:text-white"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Type your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.message ? "border-red-500" : "border-gray-300 dark:bg-slate-700 dark:text-white"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-pink-400 text-white px-6 py-2 rounded-md hover:bg-pink-500 transition duration-300 w-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
