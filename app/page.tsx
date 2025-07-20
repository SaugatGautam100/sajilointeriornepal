import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

// Assuming these image imports are correctly configured for Next.js Image component
import image1 from "../components/image/1.jpg";
import image2 from "../components/image/2.jpg";
import image3 from "../components/image/3.jpg";
import image6 from "../components/image/image3.jpg";
import image7 from "../components/image/image4.jpg";
import image8 from "../components/image/image5.jpg";
import image9 from "../components/image/image6.jpg";
import image10 from "../components/image/image7.jpg";
import image11 from "../components/image/image8.jpg";
import image12 from "../components/image/image9.jpg";
import image13 from "../components/image/image10.jpg";
import image13o from "../components/image/image13.jpg";
import image2o from "../components/image/2.jpg";
import image15 from "../components/image/15.jpg";
import image24 from "../components/image/24.jpg";
import image21 from "../components/image/21.jpg";
import image26 from "../components/image/26.jpg";
import logo from "../components/image/logo.jpg";
import location from "../components/image/location.png";

export default function App() { // Changed to App for default export
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/">

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded">
              <Image src={logo || "/placeholder.svg"} alt="logo" />
            </div>
            <span className="text-xl font-bold text-gray-800">Hamro Sajilo Interior</span>
          </div>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">
              About Us
            </a>
            <a href="#achievements" className="text-gray-600 hover:text-blue-500">
              Recent Projects
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-500">
              Our Services
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500">
              All Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <Image
          src={image2o || "/placeholder.svg"}
          alt="Architectural blueprints background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-4">We Help You Make It Happen</h1>
            <p className="text-xl mb-8 opacity-90">
              Transform your space with our expert interior design and construction services
            </p>
            <a href="https://www.facebook.com/modelfurnituresnepal" target="_blank" rel="noreferrer">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">Get Started</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Hamro Sajilo Interior</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 1: Ensure path is correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video1.mp4 is in public/videos/ */}
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>


            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                 height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video3.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16" id="achievements">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are proud to share our recent projects or achievements and successful projects that showcase our
              expertise in interior design and construction. Our dedicated team has been working tirelessly to deliver
              exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">



            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video3.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>


            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video4.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>


            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video5.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>


            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video6.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>


            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video7.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>


            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video8.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>


            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video9.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>


            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video 2: Ensure paths are correct and playsInline is set */}
              <video
                width="100%"
                height="100%"

                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Assuming video2.mp4 and video2.webm are in public/videos/ */}
                <source src="/videos/video10.mp4" type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>





            {[image15, image2, image3, image24, image21, image6, image7, image26].map((img, idx) => (
              <div key={idx} className="aspect-square w-full flex items-center justify-center">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Achievement`}
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Service */}
      <section className="py-8 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src={image13 || "/placeholder.svg"}
              alt="Interior design service"
              width={700}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
            <div>
              <span className="text-blue-500 font-semibold block mb-2">What we do</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Integrated Service</h2>
              <p className="text-gray-600 leading-relaxed">
                We provide comprehensive interior design and construction services that integrate seamlessly to deliver
                exceptional results. Our team of experts works closely with clients to understand their vision and bring
                it to life through innovative design solutions and quality craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Elements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-semibold">Our Services</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Design Element</h2>
            <p className="text-gray-600">
              Explore our diverse range of design services tailored to meet your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image7 || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold">Interior Designing</h3>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image8 || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold"> Hotel and Resort Construction </h3>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image9 || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold"> Office & Commercial Building </h3>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image10 || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold"> Restaurant / Cafe Design </h3>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image11 || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold"> House and Residence Design </h3>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image12 || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold"> Events </h3>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image13 || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold"> Architecture Exterior Design </h3>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image1 || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold"> Trunkey Projects </h3>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group cursor-pointer">
              <Image
                src={image2o || "/placeholder.svg"}
                alt="image1"
                width={350}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="font-semibold"> Banquet Design </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50" id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-semibold">All Projects</span>
            <h2 className="text-3xl font-bold text-gray-800">Our All Works</h2>
          </div>
          <a href="https://www.facebook.com/modelfurnituresnepal" target="_blank" rel="noreferrer">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white mx-auto block">View All Projects</Button>
          </a>
        </div>
      </section>

      {/* Elegant Design Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src={image13o || "/placeholder.svg"}
              alt="Elegant interior design"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Elegant design converts and changes according to your need
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Interior Design Services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Architectural Design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Construction Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-semibold">Contact Us</span>
            <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Subject" className="w-full" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} className="w-full" />
                </div>
                <a href="https://www.facebook.com/modelfurnituresnepal">

                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">Send Message</Button>
                </a>
              </form>
            </div>
            <a href="https://www.google.com/maps/dir/27.6756757,85.4114925/27.6743524,85.3516307/@27.6740751,85.3502781,18z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D">

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <Image
                title="Sajilo Interior Nepal Location"
                src={location}
                alt="location"
                width={"600"}
                height={"480"}
                style={{ border: "1px solid black", borderRadius: "0.5rem", objectFit: "cover", width: "100%", height: "100%" }}
                
              />
            </div>
                </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Talk About Your Project</h2>
          <p className="text-gray-300 mb-8">Ready to transform your space? Get in touch with our expert team today.</p>
          <a href="https://www.facebook.com/modelfurnituresnepal" target="_blank" rel="noreferrer">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white mx-auto block">Start Your Project</Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded">
                  <Image src={logo || "/placeholder.svg"} alt="logo" />
                </div>
                <span className="text-xl font-bold">Hamro Sajilo Interior</span>
              </div>
              <p className="text-gray-400">
                We are dedicated to providing exceptional interior design and construction services that exceed our
                clients' expectations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://www.facebook.com/share/15Zt6LPBZe/" className="hover:text-white">
                    Jay Chandragiri Interior
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/16oJ8bxtcA/" className="hover:text-white">
                    Hamro Sajilo Trust Home
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/19Q8uc2HJ8/" className="hover:text-white">
                    Jay Chandragiri Construction
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/1ADJtvJTSD/" className="hover:text-white">
                    Jay Chandragiri Trust Home
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://www.facebook.com/modelfurnituresnepal/" className="hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/modelfurnituresnepal/" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/modelfurnituresnepal/" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/modelfurnituresnepal/" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+977 985-1413590</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>sajilointerior@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lokanthali, Ram mandir , Bhaktapur, Nepal</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/modelfurnituresnepal/">
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/modelfurnituresnepal/">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/sajilo_interior_pvt_ltd/">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sajilo Interior Nepal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
