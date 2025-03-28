// import all images from assets/images directory

import nissan from "../all-images/cars-img/nissan-offer.png";
import toyota from "../all-images/cars-img/offer-toyota.png";
import bmw from "../all-images/cars-img/bmw-offer.png";
import nissan1 from "../all-images/cars-img/nissan-offer.png";
import toyota1 from "../all-images/cars-img/offer-toyota.png";
import mercedes from "../all-images/cars-img/mercedes-offer.png";
import toyota2 from "../all-images/cars-img/toyota-offer-2.png";
import mercedes1 from "../all-images/cars-img/mercedes-offer.png";
import kia from "../all-images/cars-img/kia.png";
import celerio from "../all-images/cars-img/celerio.jpeg";
import WagonR from "../all-images/cars-img/WagonR.webp";
import renault from "../all-images/cars-img/renault.webp";
import aura from "../all-images/cars-img/aura.webp";
import i10 from "../all-images/cars-img/i10.png";
import Ciaz from "../all-images/cars-img/Ciaz.webp";
import marazzo from "../all-images/cars-img/marazzo.png";
import ertiga from "../all-images/cars-img/ertiga.webp";
import innova from "../all-images/cars-img/innova.webp";
import amaze from "../all-images/cars-img/amaze.webp";
import dezire from "../all-images/cars-img/dezire.webp";
import verna from "../all-images/cars-img/verna.webp";
import crysta from "../all-images/cars-img/crysta.webp";
import audi from "../all-images/cars-img/audi.webp";
import Jaguar from "../all-images/cars-img/Jaguar.webp";
import bolero from "../all-images/cars-img/bolero.webp";
import zest from "../all-images/cars-img/zest.webp";
import tuv from "../all-images/cars-img/tuv.webp";
import eeco from "../all-images/cars-img/eeco.webp";
import van from "../all-images/cars-img/van.webp";
import scorpio from "../all-images/cars-img/scorpio.webp";
import tiago from "../all-images/cars-img/tiago.webp";

const carData = [
  {
    id: 1,
    brand: "Kia",
    rating: 112,
    carName: "Kia Carens",
    imgUrl: kia,
    model: "Model 3",
    price: 50,
    speed: "180 km/h",
    gps: "GPS Navigation",
    seatType: "leather or fabric upholstery",
    automatic: "Manual ",
    description:
      "The Kia Carens is a stylish and spacious 7-seater MPV, perfect for family trips, corporate travel, and city commutes. With its modern technology, smart infotainment system, and advanced safety features, it ensures a smooth, comfortable, and fuel-efficient ride. Whether you're planning a short city drive or a long road trip, the Carens delivers a premium experience with ample legroom, powerful performance, and luxurious interiors.",
  },

  {
    id: 2,
    brand: "Maruti Suzuki Celerio",
    rating: 102,
    carName: "Maruti Suzuki Celerio",
    imgUrl: celerio,
    model: "Model-2022",
    price: 50,
    speed: "160 km/h",
    gps: "GPS Navigation",
    seatType: "Premium fabric upholstery",
    automatic: "Manual",
    description:
      "The Maruti Suzuki Celerio is a compact, fuel-efficient hatchback, perfect for city commutes and long drives. With its modern design, spacious interiors, and advanced safety features, it ensures a comfortable and hassle-free ride. The best-in-class mileage, smooth automatic transmission, and smart infotainment system make it a popular choice for daily commuters and budget-conscious travelers.",
  },

  {
    id: 3,
    brand: "Maruti Suzuki Wagon R",
    rating: 132,
    carName: "Maruti Suzuki Wagon R",
    imgUrl: WagonR,
    model: "Model-2022",
    price: 65,
    speed: "155 km/h",
    gps: "GPS Navigation",
    seatType: "Premium fabric upholstery",
    automatic: "Manual",
    description:
      " The Maruti Suzuki Wagon R is a spacious and fuel-efficient hatchback, designed for city drives and long journeys. With its tall-boy design, roomy interiors, and high seating position, it offers excellent visibility and a comfortable ride. The Wagon R is known for its fuel efficiency, low maintenance costs, and smooth handling, making it a favorite among families and urban commuters.",
  },

  {
    id: 4,
    brand: "Renault Triber",
    rating: 102,
    carName: "Renault Triber",
    imgUrl: renault,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      "The Renault Triber is a compact multi-purpose vehicle (MPV) designed for practicality, affordability, and flexibility. It is a seven-seater car that offers a spacious and modular interior, making it a great choice for families and budget-conscious buyers.",
  },

  {
    id: 5,
    brand: "Hyundai Aura",
    rating: 94,
    carName: "Hyundai Aura",
    imgUrl: aura,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Hyundai Aura is a compact sedan designed for style, comfort, and fuel efficiency. It is a feature-packed car that offers a premium feel at an affordable price, making it a strong contender in the sub-4-meter sedan segment.",
  },

  {
    id: 6,
    brand: "2025 Hyundai Grand i10 Nios",
    rating: 119,
    carName: "2025 Hyundai Grand i10 Nios",
    imgUrl: i10,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Hyundai Grand i10 Nios is a stylish and feature-packed hatchback designed for urban driving. It offers a comfortable ride, advanced features, and excellent fuel efficiency, making it a popular choice among hatchback buyers in India.",
  },

  {
    id: 7,
    brand: "Maruti Suzuki Ciaz",
    rating: 82,
    carName: "Maruti Suzuki Ciaz",
    imgUrl: Ciaz,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Maruti Suzuki Ciaz is a premium mid-size sedan known for its spacious cabin, fuel efficiency, and comfortable ride. It offers a balance of elegance, affordability, and practicality, making it a strong competitor in the sedan segment.",
  },

  {
    id: 8,
    brand: "Mahindra Marazzo",
    rating: 52,
    carName: "Mahindra Marazzo",
    imgUrl: marazzo,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Mahindra Marazzo is a premium 7- or 8-seater MPV (Multi-Purpose Vehicle) known for its spacious cabin, smooth ride, and powerful diesel engine. Designed with a shark-inspired look, it is a great option for families and fleet buyers looking for a practical and comfortable people mover.",
  },
  {
    id: 9,
    brand: "Maruti Suzuki Ertiga",
    rating: 52,
    carName: "Maruti Suzuki Ertiga",
    imgUrl: ertiga,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Maruti Suzuki Ertiga is a practical and fuel-efficient 7-seater MPV that is popular among families and fleet buyers. It offers a spacious cabin, comfortable ride, and multiple fuel options, making it a great value-for-money choice in the MPV segment.",
  },
  {
    id: 10,
    brand: "Toyota Innova Crysta",
    rating: 52,
    carName: "Toyota Innova Crysta",
    imgUrl: crysta,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Toyota Innova Crysta is a premium 7- or 8-seater MPV known for its powerful engine, spacious cabin, reliability, and comfort. It is a favorite among families, fleet buyers, and business users due to its long-lasting durability and low maintenance costs.",
  },
  {
    id: 11,
    brand: "Honda Amaze",
    rating: 52,
    carName: "Honda Amaze",
    imgUrl: amaze,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Honda Amaze is a stylish and fuel-efficient compact sedan known for its spacious cabin, refined engine, and smooth ride quality. It is a great choice for buyers looking for an affordable sedan with premium features and Honda’s reliability.",
  },
  {
    id: 12,
    brand: "Maruti Suzuki Dzire",
    rating: 52,
    carName: "Maruti Suzuki Dzire",
    imgUrl: dezire,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Maruti Suzuki Dzire is a popular compact sedan known for its fuel efficiency, spacious cabin, and affordability. It is a top choice for families and commercial buyers looking for a reliable and economical sedan with modern features.",
  },
  {
    id: 13,
    brand: "Tata Tiago",
    rating: 52,
    carName: "Tata Tiago",
    imgUrl: tiago,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Tata Tiago is a stylish and well-built hatchback known for its safety, fuel efficiency, and value for money. It is a great choice for first-time car buyers and those looking for a reliable and affordable city car.",
  },
  {
    id: 14,
    brand: "Hyundai Aura",
    rating: 52,
    carName: "Hyundai Aura",
    imgUrl: aura,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Hyundai Aura is a stylish and feature-packed compact sedan designed for comfort, efficiency, and modern technology. It is ideal for buyers looking for a fuel-efficient and spacious sedan with premium features.",
  },
  {
    id: 15,
    brand: "Maruti Suzuki Celerio",
    rating: 52,
    carName: "Maruti Suzuki Celerio",
    imgUrl: celerio,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Maruti Suzuki Celerio is a stylish and fuel-efficient hatchback, known for its compact design, spacious cabin, and best-in-class mileage. It is a great choice for city driving, offering a smooth ride with low running costs.",
  },
  {
    id: 16,
    brand: "Verna",
    rating: 52,
    carName: "Verna",
    imgUrl: verna,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Hyundai Verna is a premium mid-size sedan known for its bold design, powerful engines, advanced features, and comfortable ride. It is a strong competitor in its segment, offering a balance of performance, technology, and luxury.",
  },
  {
    id: 17,
    brand: "Innova",
    rating: 52,
    carName: "Innova",
    imgUrl: innova,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Toyota Innova (now available as the Innova Crysta and Innova Hycross) is a premium 7- or 8-seater MPV, known for its comfort, reliability, and powerful performance. It is widely popular among families, business users, and fleet operators due to its durability and high resale value.",
  },
  {
    id: 18,
    brand: "Crysta",
    rating: 52,
    carName: "Crysta",
    imgUrl: crysta,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Toyota Innova Crysta is a premium 7- or 8-seater MPV, known for its rugged reliability, spacious cabin, powerful diesel engine, and comfortable ride quality. It is a top choice for families, business users, and fleet buyers due to its durability, strong resale value, and Toyota’s trusted after-sales service.",
  },
  {
    id: 19,
    brand: "BMW",
    rating: 52,
    carName: "BMW",
    imgUrl: bmw,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic and Manual",
    description:
      "  Whether it’s for a wedding, corporate travel, airport transfer, or a thrilling weekend drive, BMW cars offer a perfect mix of luxury, power, and advanced technology. With sleek designs, high-performance engines, and world-class interiors, renting a BMW guarantees a stylish and unforgettable ride.",
  },
  {
    id: 20,
    brand: "Audi",
    rating: 52,
    carName: "Audi",
    imgUrl: audi,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic and Manual",
    description:
      " Audi cars offer a premium blend of comfort, cutting-edge technology, and high-performance driving, making them a top choice for luxury car rentals. Whether you prefer a sleek sedan, a powerful SUV, or a thrilling sports car, renting an Audi ensures a first-class travel experience.",
  },
  
  {
    id: 21,
    brand: "Jaguar",
    rating: 52,
    carName: "Jaguar",
    imgUrl: Jaguar,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic and Manual",
    description:
      " Jaguar cars offer the perfect blend of elegance, performance, and cutting-edge technology. Whether you need a Jaguar for a wedding, corporate event, airport transfer, or a luxurious road trip, renting a Jaguar ensures a stylish and unforgettable experience.",
  },
  {
    id: 22,
    brand: "Zest",
    rating: 52,
    carName: "Zest",
    imgUrl: zest,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Tata Zest was a compact sedan launched in 2014 as part of Tata’s new-generation cars. It was praised for its bold design, fuel-efficient engine options, spacious cabin, and feature-rich interior. The Zest was designed to compete with popular sedans like the Honda Amaze, Maruti Suzuki Dzire, and Hyundai Xcent.",
  },
  {
    id: 23,
    brand: "Bolero",
    rating: 52,
    carName: "Bolero",
    imgUrl: bolero,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Mahindra Bolero is a tough, durable, and high-mileage SUV, known for its reliability, low maintenance costs, and ability to handle rough terrains. It is a favorite among rural and semi-urban buyers, as well as government and commercial fleet users, thanks to its rugged build and powerful diesel engine.",
  },
  {
    id: 24,
    brand: "Tuv",
    rating: 52,
    carName: "Tuv",
    imgUrl: tuv,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " he Mahindra TUV300 was a compact SUV known for its tough build, high ground clearance, and powerful diesel engine. Designed with a military tank-inspired look, the TUV300 was ideal for those who wanted a bold and durable SUV with good seating capacity.",
  },
  {
    id: 25,
    brand: "Eeco",
    rating: 52,
    carName: "Eeco",
    imgUrl: eeco,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Maruti Suzuki Eeco is the perfect choice for family trips, business use, or cargo transport. With its comfortable seating, fuel efficiency, and ample space, the Eeco is ideal for both personal and commercial purposes.",
  },
  {
    id: 26,
    brand: "Scorpio",
    rating: 52,
    carName: "Scorpio",
    imgUrl: scorpio,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Mahindra Scorpio is the perfect choice for road trips, business travel, weddings, and off-road adventures. With its powerful diesel engine, spacious cabin, and premium features, the Scorpio ensures a smooth and commanding driving experience on all terrains.",
  },
  {
    id: 27,
    brand: "tempo travellers",
    rating: 52,
    carName: "Tempo Travellers",
    imgUrl: van,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Tempo Traveller is the best choice for family trips, corporate outings, pilgrimages, weddings, and long-distance travel. With its spacious seating, air conditioning, and smooth ride, the Tempo Traveller ensures a comfortable and hassle-free journey.",
  },
  
];

export default carData;
