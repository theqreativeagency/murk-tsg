import { useState } from 'react';

interface FormData {
  name: string;
  number: string;
  email: string;
  subject: string;
  message: string;
}

const BookMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects: string[] = [
    'Event Videography',
    'Event Photography',
    'Full Event Coverage',
    'Video Editing',
    'Photo Editing',
    'Music Videos',
    'General Inquiry',
    'Other',
  ]; // Add your list of subjects here

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const number = formData.get('number') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const mailtoLink = `mailto:murktsg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nNumber: ${number}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setIsSubmitted(true);
    form.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black pb-2">
      <div className="w-full sm:w-4/5 p-7 md:w-3/5 lg:w-1/2 xl:w-1/3 text-white rounded-lg shadow-2xl">
        <h1 className="text-3xl text-center">
          <img
            className="w-5/6 -m-32 mx-auto"
            src="/7.png"
            alt="Book MurkTSG"
          />
        </h1>
        <form className="m" id="contactForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block mb-2 font-semibold">Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
            >
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {isSubmitted && (
            <p className="mt-4 text-green-500 text-center">
              Thank you for your message!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookMe;
