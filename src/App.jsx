import { useState } from "react";
import QRCode from "qrcode";
import { Helmet } from "react-helmet";
import "./App.css";

import { FaGithub, FaQrcode, FaWifi } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdSecurity, MdOutlineSpeed } from "react-icons/md";

function App() {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQRCode = async () => {
    if (!url.trim()) {
      alert("Please enter a valid URL or text");
      return;
    }

    try {
      setLoading(true);

      const qr = await QRCode.toDataURL(url, {
        width: 500,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });

      setQrCodeUrl(qr);
    } catch (err) {
      console.error(err);
      alert("QR Code Generation Failed");
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qrforfree.png";
    link.click();
  };

  return (
    <>
      <Helmet>
        <title>qrforfree - Free QR Code Generator</title>

        <meta
          name="description"
          content="Generate high-quality QR codes instantly for websites, payments, WiFi, social links, and more using qrforfree."
        />

        <meta
          name="keywords"
          content="QR code generator, free QR code, QR maker, QR generator online"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar */}
        <header className="border-b border-gray-200 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">
              qrforfree.
            </div>

            <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
              <a href="#features" className="hover:text-red-500 transition">
                Features
              </a>

              <a href="#about" className="hover:text-red-500 transition">
                About
              </a>

              <a href="#faq" className="hover:text-red-500 transition">
                FAQ
              </a>

              <a href="#contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </nav>

            <a
              href="https://github.com/Deep-1507/qrforfree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-black transition"
            >
              <FaGithub />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow">
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-14">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Free QR Code Generator
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
                Generate high-quality QR codes instantly for
                websites, payments, social media, business cards, WiFi sharing,
                and much more.
              </p>
            </div>

            {/* Generator Card */}
            <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-center text-gray-800">
                Generate Your QR Code
              </h2>

              <p className="text-center text-gray-500 mt-3 mb-8">
                Paste your URL or text below and generate a QR code instantly.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter URL or text..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700"
                />

                <button
                  onClick={generateQRCode}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl transition duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <IoMdSettings className="text-xl" />

                  {loading ? "Generating..." : "Generate QR"}
                </button>
              </div>

              {qrCodeUrl && (
                <div className="mt-12 text-center">
                  <img
                    src={qrCodeUrl}
                    alt="Generated QR Code"
                    className="mx-auto w-64 h-64 rounded-2xl shadow-md border border-gray-200"
                  />

                  <div className="mt-6">
                    <button
                      onClick={downloadQRCode}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl transition duration-300 inline-flex items-center gap-2 font-medium"
                    >
                      <IoIosCloudDownload className="text-2xl" />
                      Download QR
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <section id="features" className="mt-24">
              <h2 className="text-4xl font-bold text-center text-gray-900">
                Features
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-14">
                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
                  <FaQrcode className="text-4xl text-red-500 mb-5" />

                  <h3 className="text-xl font-semibold mb-3">
                    Instant QR Generation
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Generate QR codes instantly for websites, text, payment
                    links, contact details, and more.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
                  <MdOutlineSpeed className="text-4xl text-red-500 mb-5" />

                  <h3 className="text-xl font-semibold mb-3">
                    Fast & Responsive
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Optimized for desktop and mobile devices with lightning-fast
                    performance.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
                  <MdSecurity className="text-4xl text-red-500 mb-5" />

                  <h3 className="text-xl font-semibold mb-3">
                    Secure & Private
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Your QR data is processed instantly and not stored on our
                    servers.
                  </p>
                </div>
              </div>
            </section>

            {/* About */}
            <section id="about" className="mt-28">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  What is a QR Code?
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 text-lg">
                  <p>
                    QR codes are machine-readable codes that store information
                    such as website URLs, payment details, contact information,
                    WiFi credentials, and much more.
                  </p>

                  <p>
                    Businesses, restaurants, payment systems, educational
                    platforms, and digital products widely use QR codes because
                    they are fast, secure, and easy to scan.
                  </p>

                  <p>
                    qrforfree allows users to generate professional QR codes
                    instantly without registration or hidden costs.
                  </p>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mt-28">
              <h2 className="text-4xl font-bold text-center text-gray-900">
                Common Uses of QR Codes
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                <div className="bg-white p-6 rounded-3xl shadow-md text-center">
                  <FaWifi className="mx-auto text-4xl text-red-500 mb-4" />

                  <h3 className="font-semibold text-lg">WiFi Sharing</h3>

                  <p className="text-gray-600 mt-3">
                    Instantly connect devices using QR-based WiFi access.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-md text-center">
                  <FaQrcode className="mx-auto text-4xl text-red-500 mb-4" />

                  <h3 className="font-semibold text-lg">Business Cards</h3>

                  <p className="text-gray-600 mt-3">
                    Share your contact details professionally.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-md text-center">
                  <FaQrcode className="mx-auto text-4xl text-red-500 mb-4" />

                  <h3 className="font-semibold text-lg">UPI Payments</h3>

                  <p className="text-gray-600 mt-3">
                    Accept secure digital payments easily.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-md text-center">
                  <FaQrcode className="mx-auto text-4xl text-red-500 mb-4" />

                  <h3 className="font-semibold text-lg">Website Sharing</h3>

                  <p className="text-gray-600 mt-3">
                    Direct users to websites instantly with a scan.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-28">
              <h2 className="text-4xl font-bold text-center text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-14 space-y-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-3xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Is this QR code generator free?
                  </h3>

                  <p className="text-gray-700 leading-7">
                    Yes, qrforfree is completely free to use without hidden
                    charges.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Do you store user data?
                  </h3>

                  <p className="text-gray-700 leading-7">
                    No. We do not store generated QR code data or user links.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Can I use generated QR codes commercially?
                  </h3>

                  <p className="text-gray-700 leading-7">
                    Yes. You can use generated QR codes for personal or business
                    purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mt-28">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Contact
                </h2>

                <p className="text-lg text-gray-700 leading-8">
                  Have feedback or suggestions? Reach out via GitHub or connect
                  with the developer.
                </p>

                <a
                  href="https://github.com/Deep-1507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-8 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-2xl transition"
                >
                  <FaGithub className="text-2xl" />
                  Visit GitHub
                </a>
              </div>
            </section>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} qrforfree. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-red-500">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-red-500">
                Terms
              </a>

              <a href="#" className="hover:text-red-500">
                Contact
              </a>
            </div>

            <p className="text-sm text-gray-600">
              Made by{" "}
              <a
                href="https://github.com/Deep-1507"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Deependra Kumar
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
