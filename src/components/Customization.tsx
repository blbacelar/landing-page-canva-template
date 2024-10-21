import { Edit, Type, Palette, Move, Image, XCircle } from "lucide-react";

const Customization = () => {
  const customizationOptions = [
    { icon: <Type className="h-6 w-6 text-caramel" />, text: "Change Fonts" },
    {
      icon: <Edit className="h-6 w-6 text-caramel" />,
      text: "Add Your Own Quotes / Text",
    },
    {
      icon: <Palette className="h-6 w-6 text-caramel" />,
      text: "Change Colors",
    },
    {
      icon: <Move className="h-6 w-6 text-caramel" />,
      text: "Move & Remove Any Element",
    },
    {
      icon: <Image className="h-6 w-6 text-caramel" />,
      text: "Add Your Own Photos",
    },
  ];

  const restrictions = [
    {
      icon: <XCircle className="h-6 w-6 text-forest" />,
      text: "Resell with PLR Rights",
    },
    {
      icon: <XCircle className="h-6 w-6 text-forest" />,
      text: "Use Original Branding or Logo",
    },
    {
      icon: <XCircle className="h-6 w-6 text-forest" />,
      text: "Use Content Without Modifications",
    },
    {
      icon: <XCircle className="h-6 w-6 text-forest" />,
      text: "Distribute Unmodified Templates",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-cream to-mustard">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-coffee mb-12 font-dreaming">
          Customizable
        </h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-coffee mb-6 text-center">
            What You Can Do:
          </h3>
          <ul className="space-y-4 mb-12">
            {customizationOptions.map((option, index) => (
              <li
                key={index}
                className="flex items-center bg-cream p-4 rounded-lg shadow-md"
              >
                <div className="mr-4">{option.icon}</div>
                <span className="text-lg text-coffee">{option.text}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-coffee mb-6 text-center">
            What You Can't Do:
          </h3>
          <ul className="space-y-4 mb-12">
            {restrictions.map((restriction, index) => (
              <li
                key={index}
                className="flex items-center bg-cream p-4 rounded-lg shadow-md"
              >
                <div className="mr-4">{restriction.icon}</div>
                <span className="text-lg text-coffee">{restriction.text}</span>
              </li>
            ))}
          </ul>

          <div className="bg-sage p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cream mb-4 text-center">
              Important
            </h3>
            <p className="text-cream text-center mb-4">
              The photos used in the examples are for display only and not
              included in the templates.
            </p>
            <p className="text-cream text-center">
              Please note that while you can customize and use these templates
              for your own projects, there are certain restrictions on their
              usage and distribution. Always refer to the full license terms for
              complete details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
