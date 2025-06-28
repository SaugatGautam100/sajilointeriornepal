import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import image1 from "../components/image/2.jpg"
import image2 from "../components/image/4.jpg"
import image3 from "../components/image/16.jpg"
import image4  from "../components/image/image1.jpg"
import image5 from "../components/image/image2.jpg"
import image6 from "../components/image/image3.jpg"
import image7 from "../components/image/image4.jpg"
import image8 from "../components/image/image5.jpg"
import image9 from "../components/image/image6.jpg"
import image10 from "../components/image/image7.jpg"
import image11 from "../components/image/image8.jpg"
import image12 from "../components/image/image9.jpg"
import image13 from "../components/image/image10.jpg"



export default function Component() {
 
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed  top-0 left-0 w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <span className="text-xl font-bold text-gray-800">Sajilo Interior Nepal</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">
              About
            </a>
            <a href="#achievements" className="text-gray-600 hover:text-blue-500">
              Achievements
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-500">
              Services
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <Image
          src={image1}
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
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Sajilo Interior Nepal</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Image
              src={image2}
              alt="Modern bedroom interior"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src={image3}
              alt="Luxury bathroom interior"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16" id="achievements">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Achievements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are proud to share our recent achievements and successful projects that showcase our expertise in
              interior design and construction. Our dedicated team has been working tirelessly to deliver exceptional
              results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Image
                key={i}
                src="/placeholder.svg?height=200&width=250"
                alt={`Achievement ${i}`}
                width={250}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Service */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src={image4}
              alt="Interior design service"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <span className="text-blue-500 font-semibold">What we do</span>
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
                  src={image5}
                  alt="image5"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image6}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image7}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image8}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image9}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image10}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image11}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image5}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image6}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image7}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
                <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image8}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
                <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image9}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
                <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image10}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
                <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image11}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
                <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image12}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
                <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image13}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
                <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image1}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
                <Card className="relative overflow-hidden group cursor-pointer">
                <Image
                  src={image7}
                  alt="image1"
                  width={350}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold"></h3>
                </CardContent>
              </Card>
               
           
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50" id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-semibold">Recent Projects</span>
            <h2 className="text-3xl font-bold text-gray-800">Our Latest Work</h2>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white mx-auto block">View All</Button>
        </div>
      </section>

      {/* Elegant Design Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src={image5}
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
      <section className="py-16 bg-gray-50"  id="contact">
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
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">Send Message</Button>
              </form>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p>Interactive Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Talk About Your Project</h2>
          <p className="text-gray-300 mb-8">Ready to transform your space? Get in touch with our expert team today.</p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">Start Your Project</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <span className="text-xl font-bold">Sajilo Interior Nepal</span>
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
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#project" className="hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Team
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
                  <span>Kathmandu, Bhaktapur, Lalitpur, Kirtīpur, Banepa</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/modelfurnituresnepal/">
                <Facebook  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
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
  )
}
