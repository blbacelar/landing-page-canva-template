import React, { useState } from 'react';
import Modal from './Modal';

const Templates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const templates = [
    { name: 'Minimalist', image: 'https://source.unsplash.com/random/800x800?minimalist' },
    { name: 'Colorful', image: 'https://source.unsplash.com/random/800x800?colorful' },
    { name: 'Elegant', image: 'https://source.unsplash.com/random/800x800?elegant' },
    { name: 'Modern', image: 'https://source.unsplash.com/random/800x800?modern' },
    { name: 'Vintage', image: 'https://source.unsplash.com/random/800x800?vintage' },
    { name: 'Bold', image: 'https://source.unsplash.com/random/800x800?bold' },
    { name: 'Artistic', image: 'https://source.unsplash.com/random/800x800?artistic' },
    { name: 'Geometric', image: 'https://source.unsplash.com/random/800x800?geometric' },
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="templates" className="py-20 bg-sage">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cream mb-12 font-dreaming">Featured Instagram Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-cream rounded-lg shadow-md overflow-hidden">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(template.image)}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-coffee">{template.name}</h3>
                <a href="#" className="text-caramel hover:text-coffee">View Template</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <img src={selectedImage} alt="Enlarged template" className="max-w-full max-h-[80vh] object-contain" />
        )}
      </Modal>
    </section>
  );
};

export default Templates;