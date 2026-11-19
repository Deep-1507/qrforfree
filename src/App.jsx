
import { useState } from "react";
import QRCode from "qrcode";
import { Helmet } from "react-helmet";
import "./App.css";

import {
  FaGithub,
  FaQrcode,
  FaWifi,
  FaLink,
  FaMobileAlt,
  FaShieldAlt,
  FaDownload,
} from "react-icons/fa";

const faqs = [
  {
    question: "What is a QR code?",
    answer:
      "A QR code (Quick Response code) is a two-dimensional barcode that stores information in a pattern of black and white squares. A smartphone camera or QR scanning application can read this pattern and display the encoded information.",
  },
  {
    question: "How do I create a QR code using QRforFree?",
    answer:
      "Enter a website address, a short message, or other text into the generator. Select Generate QR, wait for the preview, and select Download QR to save the image as a PNG file.",
  },
  {
    question: "Are the QR codes generated here free?",
    answer:
      "Yes. QRforFree provides this QR generation tool without requiring registration or payment. You can generate and download QR code images without a subscription.",
  },
  {
    question: "What information can I put inside a QR code?",
    answer:
      "The current generator accepts URLs and plain text. You can encode website addresses, short messages, instructions, contact information written as text, or other text-based information.",
  },
  {
    question: "Do QR codes created with QRforFree expire?",
    answer:
      "The QR codes generated here are static QR codes. The information is encoded directly into the image, so the QR image itself does not expire. If it contains a website link, that link will work only while the destination website remains available.",
  },
  {
    question: "Can I use my generated QR code for business?",
    answer:
      "You can use the generated QR image for personal or business purposes. Before printing it on packaging, menus, posters, or business cards, test it with multiple phones and ensure that the encoded information is correct.",
  },
  {
    question: "Can I change the destination after downloading a QR code?",
    answer:
      "No. This tool generates static QR codes. The encoded information cannot be edited after generation. If you need to change a destination, generate and distribute a new QR code.",
  },
  {
    question: "Is my QR code information uploaded to a server?",
    answer:
      "The QR image in this generator is created in your browser using JavaScript. The generation code does not send the entered text to a QR-generation server. Your browser and website hosting provider may still process ordinary technical connection information.",
  },
  {
    question: "Why is my QR code not scanning?",
    answer:
      "Check that the image is not blurred, distorted, or too small. Make sure there is sufficient contrast and a clear border around the QR code. Also verify that the original text or URL was entered correctly.",
  },
  {
    question: "What is the difference between static and dynamic QR codes?",
    answer:
      "A static QR code stores its information directly in the image. A dynamic QR code generally points to a managed redirect address, allowing its destination to be changed and scan activity to be measured through a separate service. QRforFree currently generates static QR codes.",
  },
];

function App() {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateQRCode = async () => {
    const value = url.trim();

    if (!value) {
      setError("Please enter a website URL or some text.");
      setQrCodeUrl("");
      return;
    }

    if (value.length > 2500) {
      setError("Please enter text containing fewer than 2,500 characters.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setQrCodeUrl("");

      const qr = await QRCode.toDataURL(value, {
        width: 600,
        margin: 4,
        errorCorrectionLevel: "H",
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });

      setQrCodeUrl(qr);
    } catch (err) {
      console.error("QR generation error:", err);
      setError("Unable to generate your QR code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qrforfree-qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>
          Free QR Code Generator Online | Create and Download QRforFree
        </title>

        <meta
          name="description"
          content="Create free static QR codes for website links, messages and text. Generate and download high-resolution PNG QR codes directly in your browser with QRforFree."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://www.qrforfree.in/"
        />

        <meta
          property="og:title"
          content="QRforFree - Free Online QR Code Generator"
        />

        <meta
          property="og:description"
          content="Generate and download free QR codes for website links and text."
        />

        <meta
          property="og:url"
          content="https://www.qrforfree.in/"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 text-gray-800">

        {/* Navigation */}

        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-4">

            <a
              href="#home"
              className="text-2xl font-bold text-gray-900"
              aria-label="QRforFree home"
            >
              qrforfree<span className="text-red-500">.</span>
            </a>

            <nav
              className="flex flex-wrap gap-5 text-sm font-medium text-gray-600"
              aria-label="Main navigation"
            >
              <a href="#generator" className="hover:text-red-500">
                Generator
              </a>
              <a href="#how-it-works" className="hover:text-red-500">
                How It Works
              </a>
              <a href="#guides" className="hover:text-red-500">
                QR Guides
              </a>
              <a href="#faq" className="hover:text-red-500">
                FAQ
              </a>
              <a href="#about" className="hover:text-red-500">
                About
              </a>
            </nav>
          </div>
        </header>

        <main id="home">

          {/* Hero */}

          <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">

            <span className="inline-block bg-red-50 text-red-600 rounded-full px-4 py-2 text-sm font-semibold">
              Free Online QR Code Tool
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
              Free QR Code Generator
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
              Create and download QR codes for website links, messages
              and text. QRforFree makes it easy to turn information into
              a scannable QR code without creating an account or paying
              for a subscription.
            </p>

          </section>

          {/* Generator */}

          <section
            id="generator"
            className="max-w-4xl mx-auto px-6 py-8"
          >

            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-7 md:p-10">

              <div className="text-center mb-8">

                <FaQrcode className="text-5xl text-red-500 mx-auto mb-4" />

                <h2 className="text-2xl font-bold text-gray-900">
                  Create Your QR Code
                </h2>

                <p className="text-gray-600 mt-3">
                  Enter a URL or text to generate your QR code.
                </p>

              </div>

              <label
                htmlFor="qr-input"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Website URL or text
              </label>

              <textarea
                id="qr-input"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                  setQrCodeUrl("");
                }}
                placeholder="Example: https://www.example.com"
                rows={3}
                maxLength={2500}
                className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-400 focus:outline-none resize-y"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Enter a URL or any text.</span>
                <span>{url.length}/2500</span>
              </div>

              {error && (
                <p
                  role="alert"
                  className="text-red-600 text-sm mt-4"
                >
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={generateQRCode}
                disabled={loading}
                className="w-full mt-6 bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition"
              >
                {loading ? "Generating QR Code..." : "Generate QR Code"}
              </button>

              {qrCodeUrl && (
                <div className="mt-10 pt-8 border-t border-gray-200 text-center">

                  <h3 className="text-xl font-semibold mb-5">
                    Your QR Code Is Ready
                  </h3>

                  <img
                    src={qrCodeUrl}
                    alt="Your generated QR code"
                    className="mx-auto w-64 h-64 border border-gray-200 rounded-xl p-2"
                  />

                  <p className="text-sm text-gray-500 mt-4">
                    Scan the image with a phone camera to test its contents.
                  </p>

                  <button
                    type="button"
                    onClick={downloadQRCode}
                    className="mt-6 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                  >
                    <FaDownload />
                    Download QR Code (PNG)
                  </button>

                </div>
              )}

            </div>

            <p className="text-center text-sm text-gray-500 mt-5">
              This tool generates static QR codes directly in your browser.
              No account is required.
            </p>

          </section>

          {/* How it works */}

          <section
            id="how-it-works"
            className="max-w-7xl mx-auto px-6 py-20"
          >

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How to Create a QR Code
              </h2>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
                A QR code converts text or a web address into a visual
                pattern that compatible devices can scan. Follow these
                steps to create your own.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-2xl border p-7">
                <span className="text-red-500 text-3xl font-bold">01</span>
                <h3 className="text-xl font-semibold mt-4">
                  Enter Your Information
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  Enter the website address, message or other text
                  you want to encode. Check the information carefully
                  before generating the image.
                </p>
              </div>

              <div className="bg-white rounded-2xl border p-7">
                <span className="text-red-500 text-3xl font-bold">02</span>
                <h3 className="text-xl font-semibold mt-4">
                  Generate the QR Code
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  Select the Generate QR Code button. The browser
                  converts your entered information into a QR image
                  using the QR code library.
                </p>
              </div>

              <div className="bg-white rounded-2xl border p-7">
                <span className="text-red-500 text-3xl font-bold">03</span>
                <h3 className="text-xl font-semibold mt-4">
                  Download and Test
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  Download your QR code as a PNG image. Scan it with
                  a phone to confirm that it contains the intended
                  information before sharing or printing it.
                </p>
              </div>

            </div>

          </section>

          {/* Understanding QR codes */}

          <section
            id="guides"
            className="bg-white border-y border-gray-200"
          >

            <div className="max-w-7xl mx-auto px-6 py-20">

              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Understanding QR Codes
              </h2>

              <p className="text-gray-600 text-center max-w-3xl mx-auto mt-5 leading-8">
                Understanding how QR codes store information can help
                you choose the right format, test your designs and use
                them effectively in everyday situations.
              </p>

              <div className="grid md:grid-cols-2 gap-10 mt-14">

                <article>
                  <h3 className="text-2xl font-semibold">
                    What Is a QR Code?
                  </h3>

                  <p className="text-gray-600 mt-4 leading-8">
                    QR stands for Quick Response. A QR code is a
                    two-dimensional barcode that stores information
                    in a pattern of light and dark modules. Unlike
                    traditional linear barcodes, QR codes can store
                    information in both horizontal and vertical
                    directions.
                  </p>

                  <p className="text-gray-600 mt-4 leading-8">
                    Smartphones can read QR codes using their cameras
                    or compatible scanning applications. Depending
                    on the encoded data, scanning a code may display
                    text or offer to open a website.
                  </p>

                  <p className="text-gray-600 mt-4 leading-8">
                    QR codes are commonly used on product packaging,
                    posters, printed documents, restaurant menus,
                    event materials and business cards.
                  </p>
                </article>

                <article>
                  <h3 className="text-2xl font-semibold">
                    How Does a QR Code Work?
                  </h3>

                  <p className="text-gray-600 mt-4 leading-8">
                    When you enter information into this generator,
                    the QR code library converts that information
                    into a structured matrix of black and white
                    modules. This matrix includes the encoded data
                    and information that helps a scanner identify
                    and interpret the code.
                  </p>

                  <p className="text-gray-600 mt-4 leading-8">
                    A scanning device detects the position and
                    orientation of the code, reads its modules
                    and decodes the stored information.
                  </p>

                  <p className="text-gray-600 mt-4 leading-8">
                    Error correction allows a QR code to remain
                    readable even when a limited portion of its
                    pattern is damaged or obscured. This generator
                    uses a high error-correction setting to improve
                    readability.
                  </p>
                </article>

                <article>
                  <h3 className="text-2xl font-semibold">
                    Static vs Dynamic QR Codes
                  </h3>

                  <p className="text-gray-600 mt-4 leading-8">
                    A static QR code stores the original information
                    directly inside the QR image. Its encoded
                    information cannot be changed after the image
                    has been created.
                  </p>

                  <p className="text-gray-600 mt-4 leading-8">
                    A dynamic QR code usually stores a redirect
                    address. A separate service manages that
                    destination and may provide scan analytics.
                    This allows the destination to be changed
                    without replacing the printed QR image.
                  </p>

                  <p className="text-gray-600 mt-4 leading-8">
                    QRforFree currently generates static QR codes.
                    They are useful when you want to encode
                    information that does not need to be edited
                    later.
                  </p>
                </article>

                <article>
                  <h3 className="text-2xl font-semibold">
                    Where Are QR Codes Used?
                  </h3>

                  <p className="text-gray-600 mt-4 leading-8">
                    QR codes make it easier to move information
                    between printed materials and digital devices.
                    Businesses may place website QR codes on
                    advertisements, packaging and visiting cards.
                  </p>

                  <p className="text-gray-600 mt-4 leading-8">
                    Educational institutions can use them to
                    provide access to learning resources, while
                    event organizers can use them to share
                    schedules and information.
                  </p>

                  <p className="text-gray-600 mt-4 leading-8">
                    Individuals can also use QR codes to share
                    links, notes and other text without requiring
                    someone to type the information manually.
                  </p>
                </article>

              </div>

            </div>

          </section>

          {/* Practical uses */}

          <section className="max-w-7xl mx-auto px-6 py-20">

            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Practical Uses of QR Codes
            </h2>

            <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto leading-7">
              QR codes can connect printed information with digital
              resources in many different environments.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

              <article className="bg-white border rounded-2xl p-7">
                <FaLink className="text-3xl text-red-500 mb-5" />
                <h3 className="text-lg font-semibold">
                  Website Links
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  Place a QR code on a poster or business card to
                  give people a convenient way to open a website.
                </p>
              </article>

              <article className="bg-white border rounded-2xl p-7">
                <FaMobileAlt className="text-3xl text-red-500 mb-5" />
                <h3 className="text-lg font-semibold">
                  Printed Materials
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  Add QR codes to brochures, packaging and flyers
                  to share additional digital information.
                </p>
              </article>

              <article className="bg-white border rounded-2xl p-7">
                <FaWifi className="text-3xl text-red-500 mb-5" />
                <h3 className="text-lg font-semibold">
                  WiFi Information
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  A QR code can contain WiFi connection text
                  formatted according to the WiFi QR convention.
                  This generator encodes the text, but does not
                  provide a dedicated WiFi form.
                </p>
              </article>

              <article className="bg-white border rounded-2xl p-7">
                <FaQrcode className="text-3xl text-red-500 mb-5" />
                <h3 className="text-lg font-semibold">
                  Educational Resources
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  Teachers and students can use QR codes to
                  distribute links to reading material,
                  presentations and reference resources.
                </p>
              </article>

            </div>

          </section>

          {/* QR quality and safety */}

          <section className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-20">

              <h2 className="text-3xl font-bold text-center">
                Tips for Creating Scannable QR Codes
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                <article className="bg-white p-7 rounded-2xl">
                  <h3 className="text-xl font-semibold">
                    Maintain Image Quality
                  </h3>

                  <p className="text-gray-600 leading-8 mt-4">
                    Use a clear, high-resolution image when printing
                    QR codes. Avoid stretching or compressing the
                    image in a way that changes the proportions
                    of its modules.
                  </p>
                </article>

                <article className="bg-white p-7 rounded-2xl">
                  <h3 className="text-xl font-semibold">
                    Keep Sufficient Contrast
                  </h3>

                  <p className="text-gray-600 leading-8 mt-4">
                    Dark modules on a light background are generally
                    easier for scanners to recognize. Avoid placing
                    patterns, text or decorative objects over
                    important QR code areas.
                  </p>
                </article>

                <article className="bg-white p-7 rounded-2xl">
                  <h3 className="text-xl font-semibold">
                    Test Before Printing
                  </h3>

                  <p className="text-gray-600 leading-8 mt-4">
                    Scan the generated image using more than one
                    device if possible. Check the actual destination
                    or decoded text before distributing printed
                    materials.
                  </p>
                </article>

                <article className="bg-white p-7 rounded-2xl">
                  <h3 className="text-xl font-semibold">
                    Protect Yourself from Unsafe Links
                  </h3>

                  <p className="text-gray-600 leading-8 mt-4">
                    Scanning a QR code does not automatically make
                    its destination trustworthy. Review the
                    displayed web address before opening unfamiliar
                    links or submitting personal information.
                  </p>
                </article>

              </div>

            </div>
          </section>

          {/* About */}

          <section
            id="about"
            className="max-w-6xl mx-auto px-6 py-20"
          >

            <h2 className="text-3xl font-bold">
              About QRforFree
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              QRforFree is a free online QR code generation tool
              designed to make basic QR code creation accessible
              to everyone. The goal is to provide a simple way
              to convert website links and text into downloadable
              QR code images.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              The generator runs in the visitor's browser using
              JavaScript. It creates a static QR code image from
              the information entered into the tool. Users can
              preview and download the resulting PNG image
              without creating an account.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              QRforFree is intended for individuals, students,
              creators and businesses who need a straightforward
              QR code generation tool.
            </p>

          </section>

          {/* FAQs */}

          <section
            id="faq"
            className="bg-white border-y border-gray-200"
          >

            <div className="max-w-4xl mx-auto px-6 py-20">

              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Frequently Asked Questions
              </h2>

              <p className="text-center text-gray-600 mt-4 mb-10">
                Answers to common questions about QR codes
                and this generator.
              </p>

              <div className="space-y-4">

                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 bg-gray-50"
                  >
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      {faq.question}
                    </summary>

                    <p className="text-gray-600 leading-8 mt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}

              </div>

            </div>

          </section>

          {/* Privacy */}

          <section
            id="privacy"
            className="max-w-6xl mx-auto px-6 py-16"
          >

            <h2 className="text-3xl font-bold">
              Privacy Information
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
              QRforFree is designed to generate QR code images
              directly in your browser. The QR generation
              implementation on this page processes the text
              you enter locally and does not send that text
              to a QR-generation API.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Like other websites, the hosting infrastructure
              may process technical information required to
              deliver website content, maintain security and
              diagnose technical issues. The information
              processed depends on the hosting and other
              services configured for the website.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              If advertising or analytics services are enabled,
              those services may use cookies or similar
              technologies subject to their own policies.
              Visitors should be informed about the actual
              services used on this website.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Do not enter passwords, confidential information
              or other sensitive data into a QR code unless
              you understand how that information will be
              shared with people who scan the code.
            </p>

            <p className="text-sm text-gray-500 mt-5">
              This section is a starting point, not a substitute
              for a complete privacy policy covering your actual
              hosting, analytics, advertising and data practices.
            </p>

          </section>

          {/* Terms */}

          <section
            id="terms"
            className="bg-white border-y border-gray-200"
          >

            <div className="max-w-6xl mx-auto px-6 py-16">

              <h2 className="text-3xl font-bold">
                Terms of Use
              </h2>

              <div className="space-y-5 text-gray-600 leading-8 mt-6">

                <p>
                  By using QRforFree, you agree to use the
                  website for lawful purposes and to provide
                  information that you have the right to encode
                  and distribute.
                </p>

                <p>
                  You are responsible for checking the accuracy
                  of the information entered into the generator
                  and verifying that your QR code works as
                  intended before publishing or printing it.
                </p>

                <p>
                  QRforFree provides static QR code generation.
                  It does not guarantee that external websites,
                  links or other encoded destinations will
                  remain available.
                </p>

                <p>
                  You must not use the service to distribute
                  malicious links, facilitate fraud, violate
                  intellectual property rights or engage in
                  unlawful activities.
                </p>

                <p>
                  The service is provided on an as-available
                  basis. We do not guarantee uninterrupted
                  operation or compatibility with every
                  device and scanning application.
                </p>

              </div>

            </div>

          </section>

          {/* Contact */}

          <section
            id="contact"
            className="max-w-6xl mx-auto px-6 py-16"
          >

            <div className="bg-gray-900 text-white rounded-3xl p-9 md:p-12 text-center">

              <h2 className="text-3xl font-bold">
                Contact QRforFree
              </h2>

              <p className="text-gray-300 mt-5 leading-8 max-w-2xl mx-auto">
                Have a suggestion, found an issue or want to
                share feedback about the QR generator? You
                can reach the project developer through
                GitHub.
              </p>

              <a
                href="https://github.com/Deep-1507"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-7 py-4 rounded-xl font-semibold mt-8 hover:bg-gray-200 transition"
              >
                <FaGithub className="text-xl" />
                Contact the Developer
              </a>

            </div>

          </section>

        </main>

        {/* Footer */}

        <footer className="bg-white border-t border-gray-200">

          <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="flex flex-col md:flex-row justify-between gap-8">

              <div className="max-w-md">

                <a
                  href="#home"
                  className="text-2xl font-bold text-gray-900"
                >
                  qrforfree<span className="text-red-500">.</span>
                </a>

                <p className="text-gray-600 leading-7 mt-4">
                  A free online tool for creating and downloading
                  static QR codes from website links and text.
                </p>

              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Explore
                </h3>

                <div className="flex flex-col gap-3 text-gray-600">
                  <a href="#generator" className="hover:text-red-500">
                    QR Generator
                  </a>
                  <a href="#how-it-works" className="hover:text-red-500">
                    How It Works
                  </a>
                  <a href="#guides" className="hover:text-red-500">
                    QR Guides
                  </a>
                  <a href="#faq" className="hover:text-red-500">
                    FAQ
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Information
                </h3>

                <div className="flex flex-col gap-3 text-gray-600">
                  <a href="#about" className="hover:text-red-500">
                    About Us
                  </a>
                  <a href="#privacy" className="hover:text-red-500">
                    Privacy Information
                  </a>
                  <a href="#terms" className="hover:text-red-500">
                    Terms of Use
                  </a>
                  <a href="#contact" className="hover:text-red-500">
                    Contact
                  </a>
                </div>
              </div>

            </div>

            <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

              <p>
                © {new Date().getFullYear()} QRforFree.
                All rights reserved.
              </p>

              <p>
                Developed by{" "}
                <a
                  href="https://github.com/Deep-1507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  Deependra Kumar
                </a>
              </p>

            </div>

          </div>

        </footer>

      </div>
    </>
  );
}

export default App;