import React, { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''})
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    // This is client-only. Wire to an API or email service for production.
    setSent(true)
    setTimeout(()=>setSent(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-sm">Name</label>
        <input name="name" required value={form.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded"/>
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full mt-1 p-2 border rounded"/>
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input name="phone" required value={form.phone} onChange={handleChange} className="w-full mt-1 p-2 border rounded"/>
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea name="message" required value={form.message} onChange={handleChange} className="w-full mt-1 p-2 border rounded"></textarea>
      </div>
      <div>
        <button className="px-4 py-2 rounded bg-accent text-white">{sent ? 'Sent ✓' : 'Send Message'}</button>
      </div>
    </form>
  )
}
