import React, { useEffect, useState } from "react";
import {
  BadgeCheck,
  Clock3,
  FileUp,
  Layers3,
  MapPin,
  Printer,
  Sparkles,
 
} from "lucide-react";
import Client from "./components/Client";
import FloatingContact from "./components/FloatingContact";
import TrustSection from "./components/TrustSection";
import {
  BenefitsSection,
  GallerySection,
  HeroSection,
  QuickContact,
  QuoteSection,
  ServiceAreaSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  WorkShowcaseSection,
} from "./components/Sections";

const phoneNumber = "+919844027757";
const whatsappLink = `https://wa.me/${phoneNumber}`;
const address =
  "113, Ramachandrapura Main Rd, Beside Halli Thota, Vidyaranyapura, Bengaluru, Karnataka 560097";

const services = [
  {
    name: "ID cards",
    description: "Professional staff, student, visitor and event ID cards.",
    image: "/services/ID%20Cards.png",
    imageAlt: "Printed identity cards for staff, students and visitors",
    icon: BadgeCheck,
  },
  {
    name: "Packaging boxes",
    description: "Make every delivery memorable with custom printed product boxes.",
    image: "/services/Packing%20Boxes.png",
    imageAlt: "Custom printed packaging boxes for retail products",
    icon: Layers3,
  },
  {
    name: "Journals",
    description: "Custom notebooks and journals with covers that represent your brand.",
    image: "/services/Journals.png",
    imageAlt: "Custom printed journals and notebooks",
    icon: Layers3,
  },
  {
    name: "Visiting cards",
    description: "Make a memorable first impression with custom business cards and finishes.",
    image: "/services/Visiting%20Cards.png",
    imageAlt: "Premium printed visiting cards for a range of businesses",
    icon: Sparkles,
  },
  {
    name: "Leaflets",
    description: "Full-color leaflets to promote products, offers and local events.",
    image: "/services/Leaflets.png",
    imageAlt: "Printed promotional leaflets for businesses",
    icon: FileUp,
  },
  {
    name: "Brochures",
    description: "Tell your brand story with polished folded or multi-page brochures.",
    image: "/services/Brochures.png",
    imageAlt: "Custom company brochures in a premium printed finish",
    icon: Sparkles,
  },
  {
    name: "Lanyards",
    description: "Branded lanyards for teams, conferences and campus events.",
    image: "/services/Lanyards.png",
    imageAlt: "Custom printed lanyards with ID card holders",
    icon: BadgeCheck,
  },
  {
    name: "Dangler",
    description: "Custom printed danglers for retail displays and promotional use.",
    image: "/services/Dangler.png",
    imageAlt: "Custom printed product labels and promotional stickers",
    icon: Sparkles,
  },
  {
    name: "Invitations",
    description: "Personalized invitations for weddings, celebrations and special events.",
    image: "/services/Invitations.png",
    imageAlt: "Printed invitations for weddings and celebrations",
    icon: Sparkles,
  },
  {
    name: "Offset printing",
    description: "High-quality offset printing for a range of products and materials.",
    image: "/services/offset%20Printing.png",
    imageAlt: "Custom printed product labels and promotional stickers",
    icon: Printer,
  },
  // {
  //   name: "Bill books",
  //   description: "Custom invoice, receipt and order books printed with your business details.",
  //   image: "/services/Bill%20Books.png",
  //   imageAlt: "Personalized invoice, receipt and order books",
  //   icon: Printer,
  // },
  // {
  //   name: "Doctor files",
  //   description: "Branded patient files and folders designed for clinics and healthcare teams.",
  //   image: "/services/Doctor%20Files.png",
  //   imageAlt: "Printed patient files and clinic folders",
  //   icon: FileUp,
  // },
  // {
  //   name: "Letterheads",
  //   description: "Add a consistent branded finish to your everyday business communication.",
  //   image: "/services/Letterheads.png",
  //   imageAlt: "Custom branded company letterheads",
  //   icon: Printer,
  // },
  // {
  //   name: "Mug printing",
  //   description: "Personalized mugs for gifts, teams and brand merchandise.",
  //   image: "/services/Mug%20Printing.png",
  //   imageAlt: "Personalized printed mugs with colorful designs",
  //   icon: Sparkles,
  // },
  // {
  //   name: "Pamphlets",
  //   description: "Share key information with easy-to-distribute, high-quality pamphlets.",
  //   image: "/services/Pamphlets.png",
  //   imageAlt: "Printed pamphlets for promotions and business information",
  //   icon: FileUp,
  // },
  // {
  //   name: "Stickers",
  //   description: "Custom-cut labels and stickers for packaging, products and promotions.",
  //   image: "/services/Stickers.png",
  //   imageAlt: "Custom printed product labels and promotional stickers",
  //   icon: Sparkles,
  // }, 
];

const usps = [
  {
    title: "Quality You Can See",
    description:
      "Get crisp prints, clear details, and professional finishes that help your business materials stand out.",
    icon: BadgeCheck,
    subtitle: "QUALITY PRINTING",
  },
  {
    title: "Express Delivery for Your Prints",
    description:
      "Plan your printing projects with clear timelines and delivery coordination based on your requirements.",
    icon: Clock3,
    subtitle: "DEPENDABLE SERVICE",

  },
  {
    title: "Customized for Your Brand",
    description:
      "Choose suitable sizes, materials, colors, and finishes for stationery, packaging, promotional products, and more.",
    icon: Layers3,
    subtitle: "FLEXIBLE PRINT SOLUTIONS",

  },
  {
    title: "Local Support in Bengaluru",
    description:
      "Get assistance with your printing requirements from a local team serving businesses in and around Bengaluru.",
    icon: MapPin,
    subtitle: "LOCAL PRINTING SUPPORT",

  },
];

const gallery = [
  {
    image: "https://images.pexels.com/photos/5706020/pexels-photo-5706020.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Printed business cards arranged as a branded stationery set",
  },
  {
    image: "https://images.pexels.com/photos/36682054/pexels-photo-36682054/free-photo-of-sigma-lens-brochures-on-wooden-table-display.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Printed brochures displayed on a wooden table",
  },
  {
    image: "https://images.pexels.com/photos/31447457/pexels-photo-31447457/free-photo-of-elegant-laverne-packaging-with-leopard-design.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Custom-designed retail packaging with a printed brand pattern",
  },
  {
    image: "https://images.pexels.com/photos/6620972/pexels-photo-6620972.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Business card design printed on quality card stock",
  },
  {
    image: "https://images.pexels.com/photos/39903985/pexels-photo-39903985/free-photo-of-elegant-wedding-invitation-with-floral-design.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Printed wedding invitation with an elegant floral design",
  },
  {
    image: "https://images.pexels.com/photos/3525384/pexels-photo-3525384.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Printed book covers arranged for a publishing project",
  },
  {
    image: "https://images.pexels.com/photos/33714876/pexels-photo-33714876/free-photo-of-pile-of-pexels-stickers-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Printed stickers ready for packaging and promotional use",
  },
  {
    image: "https://images.pexels.com/photos/7653090/pexels-photo-7653090.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Printed flyers prepared for a promotional campaign",
  },
  {
    image: "https://images.pexels.com/photos/8425210/pexels-photo-8425210.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Printed restaurant menu design ready for customers",
  },
  {
    image: "https://images.pexels.com/photos/3493047/pexels-photo-3493047.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Custom printed mug made for branded merchandise",
  },
  {
    image: "https://images.pexels.com/photos/36792536/pexels-photo-36792536/free-photo-of-variety-of-jam-jars-on-wooden-shelf.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Packaged products with printed labels displayed on a shelf",
  },
  {
    image: "https://images.pexels.com/photos/18132766/pexels-photo-18132766/free-photo-of-hand-holding-small-book.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Printed booklet held open to show its finished pages",
  },
  {
    image: "https://images.pexels.com/photos/9219057/pexels-photo-9219057.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Print shop production setup for a customer print project",
  },
  {
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    alt: "Printed notebook and illustrated stationery",
  },
  {
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
    alt: "Printed event graphics and display materials for a celebration",
  },
  {
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=900&q=85",
    alt: "Printed stationery and branded paper goods",
  },
];

const workProjects = [
  {
    title: "Everyday business bill books",
    category: "Business stationery",
    image: "/services/Bill%20Books.png",
    alt: "Custom invoice, receipt and order bill books for businesses",
  },
  {
    title: "Brand story brochures",
    category: "Marketing print",
    image: "/services/Brochures.png",
    alt: "A collection of branded brochures for business and marketing",
  },
  {
    title: "Patient files for clinics",
    category: "Healthcare print",
    image: "/services/Doctor%20Files.png",
    alt: "Custom patient files designed for healthcare clinics",
  },
  {
    title: "Staff and event ID cards",
    category: "Identity & events",
    image: "/services/ID%20Cards.png",
    alt: "Printed identity cards for staff and events",
  },
  {
    title: "Invitations for special days",
    category: "Invitations",
    image: "/services/Invitations.png",
    alt: "Printed wedding, birthday and celebration invitations",
  },
  {
    title: "Branded journals and notebooks",
    category: "Stationery",
    image: "/services/Journals.png",
    alt: "Custom hardcover and spiral journals",
  },
  {
    title: "Lanyards for teams and events",
    category: "Identity & events",
    image: "/services/Lanyards.png",
    alt: "Branded lanyards and badge holders for events",
  },
  {
    title: "Promotional leaflets",
    category: "Marketing print",
    image: "/services/Leaflets.png",
    alt: "Full-color promotional leaflets for local businesses",
  },
  {
    title: "Corporate letterheads",
    category: "Business stationery",
    image: "/services/Letterheads.png",
    alt: "Branded letterheads for professional business communication",
  },
  {
    title: "Custom printed mugs",
    category: "Brand merchandise",
    image: "/services/Mug%20Printing.png",
    alt: "Personalized printed mugs for gifting and branded merchandise",
  },
  {
    title: "Retail packaging boxes",
    category: "Packaging",
    image: "/services/Packing%20Boxes.png",
    alt: "Custom printed boxes for retail products and deliveries",
  },
  {
    title: "Campaign-ready pamphlets",
    category: "Marketing print",
    image: "/services/Pamphlets.png",
    alt: "Printed pamphlets for promotions and campaigns",
  },
  {
    title: "Product labels and stickers",
    category: "Labels & stickers",
    image: "/services/Stickers.png",
    alt: "Custom product labels and promotional stickers",
  },
  {
    title: "Premium visiting cards",
    category: "Business stationery",
    image: "/services/Visiting%20Cards.png",
    alt: "Premium business visiting cards with custom designs",
  },
  {
    title: "College event merchandise",
    category: "Identity & events",
    image: "/hero/College%20Printing%20Merchandise%20Showcase.png",
    alt: "College event merchandise with printed ID cards and lanyards",
  },
  {
    title: "Premium print studio set",
    category: "Editorial & print",
    image: "/hero/Luxury%20Print%20Studio%20Still%20Life.png",
    alt: "A premium printed collection of books, brochures and color samples",
  }
];

const neighbourhoods = [
  "Vidyaranyapura",
  "Yelahanka",
  "Hebbal",
  "Peenya",
  "Jakkur",
  "Sahakarnagar",
  "Mathikere",
];

const slides = [
  {
    eyebrow: "CUSTOM PRINTING & BRANDED MERCHANDISE | BENGALURU",
    title: "Make Your Brand Stand Out with Custom Printing.",
    caption:
      "From custom ID cards and lanyards to business cards and branded merchandise, bring your brand identity to life with quality printing solutions.",
    image: "/hero/College%20Printing%20Merchandise%20Showcase.png",
    alt: "Custom college ID cards, lanyards and printed merchandise",
    action: "Plan your merchandise",
  },
  {
    eyebrow: "OFFSET PRINTING IN BANGALORE",
    title: "Big Prints. Bold Colours.Made to Get Noticed.",
    caption:
      "Need banners, flex prints, or eye-catching displays? We print your ideas in vibrant colours that help your brand stand out.",
    image: "/hero/Vibrant%20Industrial%20Print%20Workshop.png",
    alt: "A print workshop producing vibrant large-format graphics",
    action: "Explore print services",
  },
  {
    eyebrow: "BOOK PRINTING SERVICES IN BANGALORE",
    title: "Your Words Deserve a Beautiful Print.",
    caption:
      "Printing books, catalogues, and premium publications? We bring every page to life with quality printing, beautiful finishes, and attention to detail.",
    image: "/hero/Luxury%20Print%20Studio%20Still%20Life.png",
    alt: "Premium printed books, brochures and color samples",
    action: "Create something special",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [files, setFiles] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleQuote = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Creative Prints, I'd like a quote.",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Service: ${form.get("service")}`,
      `Size: ${form.get("dimensions") || "Not specified"}`,
      `Quantity: ${form.get("quantity") || "Not specified"}`,
      `Need installation: ${form.get("installation")}`,
      `Details: ${form.get("details") || "None"}`,
      files.length
        ? `Artwork to share separately: ${files.map((file) => file.name).join(", ")}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${whatsappLink}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setNotice("Your enquiry is ready in WhatsApp. Attach any artwork there before sending.");
  };

  return (
    <>
      <SiteHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />
      <main id="top" className="relative bg-white">
        <HeroSection
          slides={slides}
          slide={slide}
          setSlide={setSlide}
        />
        <ServicesSection services={services} />
        <TrustSection />
        <WorkShowcaseSection projects={workProjects} />
        <BenefitsSection usps={usps} />
        {/* <GallerySection gallery={gallery} /> */}
        <Client />

        {/* <ServiceAreaSection neighbourhoods={neighbourhoods} address={address} /> */}
        <QuoteSection
          whatsappLink={whatsappLink}
          handleQuote={handleQuote}
          files={files}
          setFiles={setFiles}
          notice={notice}
        />
      </main>
      <SiteFooter whatsappLink={whatsappLink} />
      <QuickContact whatsappLink={whatsappLink} />
      <FloatingContact phoneNumber={phoneNumber} whatsappLink={whatsappLink} />
    </>
  );
}

export default App;
