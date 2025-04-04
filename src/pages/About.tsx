
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileCheck, Image } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import AdPlacement from '@/components/AdPlacement';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Image2PDF - Our Story and Mission</title>
        <meta name="description" content="Learn about Image2PDF - our mission, values, and how our free online tool helps users convert images to PDF files without registration or watermarks." />
        <link rel="canonical" href="https://image2pdf.site/about" />
      </Helmet>
      
      <BackgroundAnimation />
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10">
        <div className="mb-4">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-1 mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
        
        <section className="glass-card rounded-xl p-8 mb-10 animate-fade-in">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">About Image2PDF</h1>
          
          <div className="space-y-4 text-foreground">
            <p>
              Welcome to Image2PDF - the easiest and most elegant way to convert your images to PDF files online.
            </p>
            
            <p>
              Our mission is simple: to provide a beautiful, intuitive, and fast tool that helps you convert images to PDF
              without the hassle of downloading software or creating accounts.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Our Story</h2>
            <p>
              Image2PDF was created out of frustration with existing conversion tools that were either cluttered with ads,
              difficult to use, or required payment. We believe that simple digital tools should be accessible to everyone,
              regardless of technical expertise or budget.
            </p>
            
            <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-medium mb-2">Privacy Protected</h3>
                <p className="text-sm text-muted-foreground">Your files never leave your device - all processing happens locally in your browser</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <FileCheck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-medium mb-2">Quality Preserved</h3>
                <p className="text-sm text-muted-foreground">We maintain the original quality and dimensions of your images in the PDF output</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Image className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-medium mb-2">Multi-Format Support</h3>
                <p className="text-sm text-muted-foreground">Convert JPG, PNG, GIF, BMP, WEBP and other image formats to PDF</p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Simplicity:</span> We focus on doing one thing exceptionally well.</li>
              <li><span className="font-medium">Privacy:</span> We don't store your images or require personal information.</li>
              <li><span className="font-medium">Accessibility:</span> Our tool is free and works on any device with a web browser.</li>
              <li><span className="font-medium">Beauty:</span> We believe functional tools can also be aesthetically pleasing.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How It Works</h2>
            <p>
              Image2PDF uses client-side JavaScript to convert your images to PDF files. This means your images never leave your device -
              the conversion happens right in your browser, ensuring your data remains private and secure.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Content Quality & AdSense Compliance</h2>
            <p>
              At Image2PDF, we are committed to providing high-quality, valuable content to our users. Our pages are designed to offer useful 
              information and functionality, not just to host advertisements. We strictly adhere to Google AdSense Program Policies, ensuring 
              that advertisements appear only alongside substantial, relevant content that provides real value to our users.
            </p>
            
            <p className="mt-6">
              Thank you for choosing Image2PDF for your conversion needs. We're constantly working to improve our service,
              so if you have any feedback or suggestions, please don't hesitate to <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </div>
        </section>
        
        {/* AdSense placement with proper surrounding content */}
        <AdPlacement format="rectangle" />
        
        <section className="glass-card rounded-xl p-8 mt-10 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Is Image2PDF really free?</h3>
              <p>Yes! Image2PDF is completely free to use with no hidden costs. We don't require registration or payment information.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Is there a limit to how many images I can convert?</h3>
              <p>There's no set limit, but very large batches of high-resolution images may take longer to process since all conversion happens in your browser.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">Are my images safe?</h3>
              <p>Absolutely. Your images never leave your device - all processing happens locally in your browser. We never see, store, or have access to your files.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">What image formats are supported?</h3>
              <p>We support all common image formats including JPG/JPEG, PNG, GIF, BMP, WEBP, and more.</p>
            </div>
            
            <div className="pb-4">
              <h3 className="text-lg font-medium mb-2">Can I use Image2PDF on my mobile device?</h3>
              <p>Yes! Image2PDF is fully responsive and works on smartphones and tablets as well as desktop computers.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
