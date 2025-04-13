import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded shadow-md">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">Name</label>
                                <input type="text" placeholder="Your name" className="w-full border p-2 rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Email</label>
                                <input type="email" placeholder="Your email" className="w-full border p-2 rounded" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Message</label>
                                <textarea rows="5" placeholder="Your message" className="w-full border p-2 rounded"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-blue-100 p-6 rounded shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <p className="mb-2"><strong>Email:</strong> support@move37capital.com</p>
                        <p className="mb-2"><strong>Phone:</strong> +1 (212) 555-1234</p>
                        <p className="mb-2"><strong>Address:</strong><br />GR145 WeWork, Salapuria<br />Bengaluru, IN 560076</p>
                        <p className="mt-6">We typically respond within 1-2 business days. For urgent inquiries, please call.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact