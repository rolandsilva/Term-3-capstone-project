
import mongoose from "mongoose";
import Products from "./models/products";
import { DB_URL } from "./config/db.config";



  const products = [
// {
//   id: 1111, productNbr: "MGX82LL", name: "2024 M4 MacBook Pro Laptop", category: "laptops", price: 4500, features: ["	Portable design", "Lightweight and under half an inch thin", "Get more done faster", "The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly", "Up to 18 hours of battery life — Amazing, all-day battery life so you can leave the power adapter at home", "A brilliant display — The 13.6-inch Liquid Retina display supports 1 billion colors", "Look sharp, sound great — Everything looks and sounds amazing with a 1080p FaceTime HD camera, three mics, and four speakers with 	Spatial Audio"], specifications: ["10 core cpu", "10 core gpu", "16-core Neural Engine", "13/15-inch Liquid Retina display with True Tone", "1080p FaceTime HD camera"," MagSafe 3 charging port", "Two Thunderbolt / USB 4 ports", "Support for up to two external","displays (with laptop lid closed)", "Magic Keyboard with Touch ID", "Force Touch trackpad", "35W Dual USB-C Port Compact PowerAdapter"], availability: 99, image_url: "/mbair.png"
// }

// {
//   id: 1112, productNbr: "MGX82LL/A", name: "2024 M4 MacBook Air", category: "laptops", price: 1699, features: ["Portable design", "Lightweight and under half an inch thin", "Get more done faster", "The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly","Up to 18 hours of battery life", "Amazing, all-day battery life so you can leave the power adapter at home", "A brilliant display", "The 13.6-inch Liquid Retina display supports 1 billion colors","Look sharp, sound great", "Everything looks and sounds amazing with a 1080p FaceTime HD camera, three mics, and four speakers with patial Audio."], specifications: ["	M3 Max Chip", "14-Core CPU", "40-Core GPU", "48GB Unified Memory", "1TB SSD Storage", "14/16-inch Liquid Retina display with True Tone", "1080p FaceTime HD camera", "MagSafe 3 charging port", "Three Thunderbolt / USB 4 ports", "Support for up to four external displays (with laptop lid closed)", "Magic Keyboard with Touch ID", "Force Touch trackpad", "140W Dual USB-C Port Compact Power Adapter"], availability: 22, image_url: "/mbair.png"
// },

// {
//   id: 1113, productNbr: "MNN72LL/A", name: "2024 M4 MacBook Max", category: "laptops", price: 3999, features: ["With M3, M3 Pro, or M3 Max", "our most advanced chips for personal computers", " MacBook Pro empowers you to take on the most demanding projects",
// 	"Go all day with up to 22 hours of battery life",	"Liquid Retina XDR display is the best ever in a laptop, with Extreme Dynamic Range", "Look sharp and sound clear — anywhere — with the 1080p FaceTime HD camera", "Three studio-quality mics, and six speakers with Spatial Audio", "Connect everything you need with up to three Thunderbolt 4 ports", "An SDXC card slot, an HDMI port, a MagSafe 3 port, and a headphone jack"], specifications: ["M3 Max Chip", "14-Core CPU", "40-Core GPU", "48GB Unified Memory", "1TB SSD Storage", "14/16-inch Liquid Retina display with True Tone", "1080p FaceTime HD camera", "MagSafe 3 charging port", "Three Thunderbolt / USB 4 ports", "Support for up to four external displays (with laptop lid closed)", "Magic Keyboard with Touch ID", "Force Touch trackpad", "140W Dual USB-C Port Compact Power Adapter"], availability: 11, image_url: "/M3MBP.png"
// },

// {
//   id: 1114, productNbr: "MQD32LL/A", name: "2024 iPhone 15", category: "iPhones", price: 700, features: ["	Face ID", "Dual SIM: Nano-SIM and eSIM", "Siri", "Apple Pay", "Audio: Spatial audio, Dolby Atmos support", "Sensors: Face ID, Barometer, Three-axis gyro, Accelerometer, Proximity sensor, Ambient light sensor" ], specifications: ["Super XDR Retina Display 6.1 in", "memory:  128gb 256GB, 512gb","connections: wifi, cellular", "camera: 48MP Wide camera, ƒ/1.8 aperture", "colors: Black, White, Blue, Green, Pink"], availability: 99, image_url: "/iphones3.png"
// },

// {
//   id: 1115, productNbr: "M1FJ3LL/A", name: "2024 iPhone 15 plus", category: "iPhones", price: 800, features: ["	Face ID", "Dual SIM: Nano-SIM and eSIM", "Siri", "Apple Pay", "Audio: Spatial audio, Dolby Atmos support", "Sensors: Face ID, Barometer, Three-axis gyro, Accelerometer, Proximity sensor, Ambient light sensor" ], specifications: ["Super XDR Retina Display 6.7 in", "memory:  128gb 256GB, 512gb","connections: wifi, cellular", "camera: 48MP Wide camera, ƒ/1.8 aperture", "colors: Black, White, Blue, Green, Pink"], availability: 99, image_url: "/iphone152.png"
// },

// {
//   id: 1116, productNbr: " MHXH3LL/A", name: "2024  iPhone 15 Pro", category: "iPhones", price: 900, features: ["	Face ID", "Dual SIM: Nano-SIM and eSIM", "Siri", "Apple Pay", "Audio: Spatial audio, Dolby Atmos support", "Sensors: Face ID, Barometer, Three-axis gyro, Accelerometer, Proximity sensor, Ambient light sensor" ],  specifications: ["Super XDR Retina Display 6.1 in", "memory:  128gb 256GB, 512gb, 1tb","connections: wifi, cellular", "camera: 48MP Wide camera, ƒ/1.8 aperture", "colors: Graphite, Gold, Silver, Sierra Blue"], availability: 75, image_url: "/iphones15.png"
// },

// {
//   id: 1117, productNbr: " MHXH3LL/A", name: "2024  iPhone 15 Pro Max", category: "iPhones", price: 1000, features: ["	Face ID", "Dual SIM: Nano-SIM and eSIM", "Siri", "Apple Pay", "Audio: Spatial audio, Dolby Atmos support", "Sensors: Face ID, Barometer, Three-axis gyro, Accelerometer, Proximity sensor, Ambient light sensor" ],  specifications: ["Super XDR Retina Display 6.1 in", "memory:  128gb 256GB, 512gb, 1tb","connections: wifi, cellular", "camera: 48MP Wide camera, ƒ/1.8 aperture", "colors: Graphite, Gold, Silver, Sierra Blue"], availability: 55, image_url: "/iphone15_all2.jpg"
// },

// {
//   id: 1118, productNbr: "MWP22AM/A", name: "2024 iMac", category: "desktops", price: 1999, features: ["Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive", "Immersive 24-inch 4.5K Retina display", "Strikingly thin all-in-one desktop in seven vibrant colors", "Look sharp and sound great with the 1080p FaceTime HD camera, three-mic array, and six-speaker sound system with Spatial Audio", "Color-matched Magic Mouse and Magic Keyboard included"], specifications: ["M3 Pro Chip", "8-Core CPU",	"10-Core GPU", "512GB storage",	"8GB unified memory", "24-inch 4.5K Retina display", "Two Thunderbolt / USB 4 ports", "Two USB 3 ports", "Gigabit Ethernet", "Magic Keyboard with Touch ID", ], availability: 99, image_url: "/imac.png"
// },

// {
//   id: 1119, productNbr: "MK2E3LL/A", name: "2024 Mac Mini", category: "desktops", price: 1299, features: ["Do more and do it faster with the next-generation M2 or M2 Pro chip", "Mac mini turns any desk into a powerful workstation", "Customize your setup using Mac mini’s two or four Thunderbolt 4 ports, two USB-A ports, HDMI, and Gigabit Ethernet", "Complete your system with Studio Display and Magic accessories"], specifications: ["M3 Chip", "10-Core CPU", "16-Core GPU",	"16GB Unified Memory", "512GB SSD Storage", "16-core Neural Engine", "Four Thunderbolt 4 ports", "Two USB-A ports", "HDMI port, Gigabit Ethernet, headphone jack"], availability: 66, image_url: "/macmini.png"
// },

// {
//   id: 1120, productNbr: "MKQX2LL/A", name: "2024 Mac Studio", category: "desktops", price: 3999, features: ["Supercharged by the M2 Max or M2 Ultra chip", "A wide array of high-performance ports allows you to build the studio of your dreams", "Stunningly compact design fits right on your desk", "Pairs perfectly with Studio Display — or up to eight displays"], specifications: ["M2 Ultra Chip", "24-Core CPU", "60-Core GPU",	"32-Core Neural Engine", "64GB unified memory", "1TB SSD storage","Front: Two Thunderbolt 4 ports, one SDXC card slot", "Back: Four Thunderbolt 4 ports, two, USB-A ports, one HDMI port, one 10Gb Ethernet port, one 3.5 mm headphone jack" ], availability: 44, image_url: "/macstudio.jpg"
// },

// {
//   id: 1121, productNbr: "MYD82LL/A", name: "Mac Pro", category: "desktops", price: 3999, features: ["	Supercharged by M2 Ultra, our most powerful and capable chip", "PCIe gen 4 expansion slots provide up to twice the bandwidth", "Connect all your accessories with high-performance I/O, including eight Thunderbolt 4, two HDMI, and two 10Gb Ethernet ports", "Runs cool and quiet, even under intensive workloads", "Comes with Magic accessories", "Complete your setup with Pro Display XDR"], specifications: ["	M2 Ultra Chip", "24-Core CPU",	"60-Core GPU",	"32-Core Neural Engine", "64GB unified memory", "1TB SSD storage", "Stainless steel frame with feet", "Magic Mouse", "Magic Keyboard with Touch ID and Numeric Keypad - US English"], availability: 33, image_url: "/macpro.png"
// },

// {
//   id: 1122, productNbr: "MLWK3LL/A", name: "2024 Studio Display", category: "displays", price: 1599, features: ["27-inch 5K Retina display draws you in with 14.7 million pixels and one billion colors", "12MP Ultra Wide camera with Center Stage — powered by Apple silicon — allows for more engaging video calls", "Three studio-quality mics and six-speaker sound system with Spatial Audio for more immersive calls, movies, and music", "With ports for connectivity and charging and three stand options, it fits any setup", "Pairs perfectly with any Mac, including the all-new Mac Studio", "Add new matching Magic accessories to complete your studio"], specifications: 	["27-inch 5K Retina display", "14.7 million pixels and one billion colors", "12MP Ultra Wide camera with Center Stage", "Powered by Apple silicon allows for more engaging video calls", "Three studio-quality mics and six-speaker sound system with Spatial Audio for more immersive calls, movies, and music", "With ports for connectivity and charging and three stand options, it fits any setup"], availability: 64, image_url: "/retinadisplay.png"
// },

// {
//   id: 1123, productNbr: "MXQU2LL/A", name: "2024 Pro Display XDE", category: "displays", price: 4999, features: ["32-inch 6K Retina display provides astoundingly sharp and detailed imagery", "XDR Extreme Dynamic Range (XDR) for next-level brightness, contrast, and color", "1000 nits full-screen sustained brightness and 1600 nits peak brightnessFootnote", "1,000,000:1 contrast ratio and stunningly real XDR imagery"], specifications: ["32-inch 6K Retina display, provides astoundingly sharp and detailed imagery", "XDR Extreme Dynamic Range (XDR) for next-level brightness, contrast, and color", "1000 nits full-screen sustained brightness and 1600 nits peak brightness", "1,000,000:1 contrast ratio and stunningly real XDR imagery"], availability: 99, image_url: "/studiodisplayxde.png"
// },




{
  id: 1124, productNbr: "MJV73LL/A", name: "iPad Mini", category: "ipads", price: 599, features: ["Apple Pencil support", "Face ID/Touch ID", "Sensors: Touch ID, Three-axis gyro, Accelerometer, Barometer, Ambient light sensor", "Color Options: Space Gray, Pink, Purple, Starlight", "This compact and powerful iPad Mini is ideal for users looking for a portable and versatile device with advanced features and performance."], specifications: ["Liquid Retina Display 8.3 in", "memory:  64GB, 256GB", "connections: wifi, cellular", "camera: 12MP Wide camera, ƒ/1.8 aperture", ], availability: 11, image_url: "/mbair.png"
},

{
  id: 1125, productNbr: " MMEF2AM/A", name: "iPad 10th Gen", category: "ipads", price: 899, features: ["Apple Pencil support", "Face ID/Touch ID", "Sensors: Touch ID, Three-axis gyro, Accelerometer, Barometer, Ambient light sensor", "Color Options: Space Gray, Pink, Purple, Starlight", "This compact and powerful iPad Mini is ideal for users looking for a portable and versatile device with advanced features and performance."], specifications: ["Liquid Retina Display 10.9 in", "memory options: 64GB, 256GB", "connections: wifi, cellular", ], availability: 89, image_url: "/mbair.png"
},

{
  id: 1126, productNbr: "MWP42AM/A", name: "iPad Air", category: "ipads", price: 999, features: ["Apple Pencil support", "Face ID/Touch ID", "Sensors: Touch ID, Three-axis gyro, Accelerometer, Barometer, Ambient light sensor", "Color Options: Space Gray, Pink, Purple, Starlight"], specifications: ["10.9 in Liquid Retina Display", "memory options: 64gb, 256gb", "connections: wifi, cellular", ], availability: 79, image_url: "/mbair.png"
},

{
  id: 1127, productNbr: "MXAX2LL/A", name: "iPad Pro", category: "ipads", price: 1099, features: ["Apple Pencil support", "Face ID/Touch ID", "Sensors: Touch ID, Three-axis gyro, Accelerometer, Barometer, Ambient light sensor", "Color Options: Space Gray, Silver, Black"], specifications: ["11, 13 in Liquid Retina Display", "memory options: 128gb, 256gb, 512gb, 1tb, 2tb", "connections: wifi, cellular"], availability: 68, image_url: "/mbair.png"
},

{
  id: 1128, productNbr: "MGYL3LL/A", name: "iWatch Series 9", category: "iWatches", price: 599, features: ["Heart Rate Sensor", "ECG Sensor", "Blood Oxygen Sensor", "Accelerometer", "Gyroscope", "Ambient Light Sensor", "Altimeter", "Compass", "SpO2 Sensor", "U1 Chip"], specifications: ["display options: 41mm, 45mm Retina Display", "memory options: 64gb", "glass options: Ion-X glass (aluminum models), Sapphire crystal (stainless steel and titanium models)", "connections: wifi, cellular"], availability: 58, image_url: "/mbair.png"
},

{
  id: 1129, productNbr: "MQLU2LL/A", name: "iWatch Se", category: "iWatches", price: 399, features: ["Heart Rate Sensor", "ECG Sensor", "Blood Oxygen Sensor", "Accelerometer", "Gyroscope", "Ambient Light Sensor", "Altimeter", "Compass", "SpO2 Sensor", "U1 Chip"], specifications: ["display options: 40mm, 45mm Retina Display", "memory options: 32gb", "glass options: Ion-X glass (aluminum models), Sapphire crystal (stainless steel and titanium models)", "connections: wifi, cellular"], availability: 48, image_url: "/mbair.png"
},

{
  id: 1130, productNbr: " MWP82AM/A", name: "iWatch Ultra 2", category: "iWatches", price: 799, features: ["Heart Rate Sensor", "ECG Sensor", "Blood Oxygen Sensor", "Accelerometer", "Gyroscope", "Ambient Light Sensor", "Altimeter", "Compass", "SpO2 Sensor", "U1 Chip", "Depth Guage", "sleep tracking"], specifications: ["	display options: 49mm Retina Display", "memory options: 32gb", "glass options: Ion-X glass (aluminum models), Sapphire crystal (stainless steel and titanium models)", "connections: wifi, cellular"], availability: 38, image_url: "/mbair.png"
},


{
  id: 1131, productNbr: "MLYU3LL/A", name: "AirPods 2nd Gen", category: "airpods", price: 199, features: ["Hands-free access to Siri with voice commands", "Automatic ear detection: Plays and pauses automatically", "Seamless switching between devices", "Double-tap to play or skip forward", "Charges quickly in the case"], specifications: ["Color: White", "Use: Mobile Phone", "Wireless Type: Bluetooth", "Style: In Ear", "Battery: 5 hours"], availability: 28, image_url: "/mbair.png"
},

{
  id: 1132, productNbr: "MWTL2LL/A", name: "AirPods 3rd Gen", category: "airpods", price: 299, features: ["Hands-free access to Siri with voice commands", "Automatic ear detection: Plays and pauses automatically", "Seamless switching between devices", "Double-tap to play or skip forward", "Charges quickly in the case"], specifications: ["Color: White", "Use: Mobile Phone", "Wireless Type: Bluetooth", "Style: In Ear", "Battery: 5 hours"], availability: 18, image_url: "/mbair.png"
},

{
  id: 1133, productNbr: "MX3X2LL/A", name: "AirPods Pro 2nd Gen", category: "airpods", price: 399, features: ["Hands-free access to Siri with voice commands", "Automatic ear detection: Plays and pauses automatically", "Seamless switching between devices", "Double-tap to play or skip forward", "Charges quickly in the case"], specifications: ["Color: White", "Use: Mobile Phone", "Wireless Type: Bluetooth", "Active Nosie Cancellation", "connection: usb-c", "Battery: 6 hours"], availability: 79, image_url: "/mbair.png"
},

{
  id: 1134, productNbr: "MK193LL/A", name: "AirPods Max", category: "airpods", price: 499, features: ["Apple-designed dynamic driver provides high-fidelity audio. Active Noise Cancellation blocks outside noise. PERSONALIZED SPATIAL AUDIO. Designed with a knit-mesh canopy and memory foam ear cushions for an exceptional over-ear fit that perfectly seals in sound. AirPods Max pause audio when you take them off. And Automatic Switching makes listening between your iPhone, iPad, and Mac completely effortless. Up to 20 hours of listening, movie watching, or talk time with Active Noise Cancellation and Personalized Spatial Audio enabled. The Digital Crown to play and pause music, to answer, end, and mute yourself on calls, and to control volume and skip between tracks."], specifications: ["Color: Silver, Space Gray, Sky Blue, Pink,Green. Apple-designed dynamic driver. Active Noise Cancellation. Transparency mode. Personalized Spatial Audio with dynamic head tracking Adaptive EQ. Battery: Up to 20 hours of listening time on a single charge with Active Noise Cancellation or Transparency mode enabled. Storage in the Smart Case preserves battery charge in ultra-low-power state. Charging via Lightning connector"], availability: 79, image_url: "/mbair.png"

},

{
  id: 1135, productNbr: "MXW72LL/A", name: "Usb C 1 Meter Cable", category: "accesories", price: 69, features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 55, image_url: "/mbair.png"
},

{
  id: 1136, productNbr: "MKH53LL/A", name: "Usb C 2 Meter Cable", category: "accesories", price: 129, features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 44, image_url: "/mbair.png"
},

{
  id: 1137, productNbr: "MNYH2LL/A", name: "Usb C MagSafe Cable", category: "accesories", price: 39, features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 33, image_url: "/mbair.png"
},

{
  id: 1138, productNbr: "MRR42LL/A", name: "Pencil Pro", category: "accesories", price: 129, features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 29, image_url: "/mbair.png"
},

{
  id: 1139, productNbr: "MRR432LL/A", name: "Keyboard", category: "accesories", price: 125, features: ["Magic Keyboard is available with Touch ID, providing fast, easy, and secure authentication for logins and purchases. Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience. It features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys, which are great for gaming. The numeric keypad is also ideal for spreadsheets and finance applications. It’s wireless and features a rechargeable battery that will power your keyboard for about a month or more between charges.¹ It pairs automatically with your Mac, so you can get to work right away. And it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac"], specifications: [" General", "Multimedia keys", "Connections and Expansion", "Bluetooth", "Lightning port", "Wireless"], availability: 25, image_url: "/mbair.png"
},

{
  id: 1140, productNbr: "MRY42LL/A", name: "Magic KeyBoard", category: "accesories", price: 299, features: ["Magic Keyboard is an amazing companion for iPad Air 11-inch. It features an incredible typing experience, a trackpad that expands how you can work with iPadOS, a USB‑C connector for pass-through charging, and front and back protection. Magic Keyboard has a floating cantilever design, allowing you to attach iPad Air magnetically and to smoothly adjust it to the perfect viewing angle for you."], specifications: ["Comfortable backlit keys and a scissor mechanism with 1 mm travel for quiet, responsive typing. Designed for Multi‑Touch gestures and the cursor in iPadOS. Smooth angle adjustability delivers the perfect viewing angle. USB-C connector for charging iPad Air, freeing up the connector on the iPad for other accessories. Folds into a case to provide front and back protection for traveling with iPad Air."], availability: 22, image_url: "/mbair.png"
},

{
  id: 1141, productNbr: "MRY42LL/B", name: "Magic Mouse", category: "accesories", price: 99, features: ["Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk.The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents. The incredibly long-lasting internal battery will power your Magic Mouse for about a month or more between charges.It's ready to go right out of the box and pairs automatically with your Mac, and it includes a woven USB Type-C to Lightning cable that lets you pair and charge by connecting to a USB Type-C port on your Mac"], specifications: [" Color:Silver, Mouse Standard Type, Tracking Method, Touchpad, Connectivity: Wireless, Connectivity:Bluetooth, Rechargeable Battery Mouse, Charging Interface Lightning"], availability: 19, image_url: "/mbair.png"
},

{
  id: 1142, productNbr: "MRY42LL/C", name: "Magic TrackPad", category: "accesories", price: 119, features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 9, image_url: "/mbair.png"
},

{
  id: 1143, productNbr: "MRY42LL/D", name: "iPad Mini Folio", category: "accesories", price: 59, features: ["The Smart Folio for iPad Mini supports a wider range of viewing angles for reading, watching movies, typing, or making FaceTime calls. It automatically wakes your iPad Mini when opened and puts it to sleep when closed. Thin and light, it protects the front and back of iPad Mini."], specifications: ["Color: Black, Blue, Red, Green.Color. Apple iPad Mini 8.3 in. Case Style Folio."], availability: 21, image_url: "/mbair.png"
},

{
  id: 1144, productNbr: "MRY42LL/E", name: "iPad Air Folio", category: "accesories", price: 79, features: ["The Smart Folio for iPad Air supports a wider range of viewing angles for reading, watching movies, typing, or making FaceTime calls. It automatically wakes your iPad Pro when opened and puts it to sleep when closed. Thin and light, it protects the front and back of iPad Air."], specifications: ["Color: Black, Blue, Red, Green.Color. Apple iPad Air 11 in. Case Style Folio."], availability: 39, image_url: "/mbair.png"
},

{
  id: 1144, productNbr: "MRY42LL/E", name: "iPad Pro Folio", category: "accesories", price: 99, features: ["The Smart Folio for iPad Pro (M4) supports a wider range of viewing angles for reading, watching movies, typing, or making FaceTime calls. It automatically wakes your iPad Pro when opened and puts it to sleep when closed. Thin and light, it protects the front and back of iPad Pro."], specifications: ["Color: Black, Blue, Red, Green.Color. Apple iPad Pro 13 in. Case Style Folio."], availability: 49, image_url: "/mbair.png"
},

{
  id: 1146, productNbr: "MRY42LL/F", name: "AirTags", category: "accesories", price: 39, features: ["Attach an AirTag to your keys or backpack. If you misplace something, just use the Find My app to locate it. An AirTag can be shared with up to five people, so friends and family can keep track of items everyone uses."], specifications: ["Rated IP67 (maximum depth of 1 meter up to 30 minutes)", "Connectivity: Bluetooth for proximity finding.Apple-designed U1 chip for Ultra Wideband and Precision Finding. NFC tap for Lost Mode. Speaker: Built-in speaker. Battery: User-replaceable CR2032 coin cell battery. Sensor: Accelerometer. Accessibility: The Find My app is compatible with these iPhone accessibility features"], availability: 49, image_url: "/mbair.png"
},

// {
//   id: 1140, productNbr: "MRY42LL/G", name: "Magic KeyBoard", category: "accesories", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
// },

// {
//   id: 1140, productNbr: "MLWK3LL/H", name: "Magic KeyBoard", category: "accesories", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
// },


// {
//   id: 1140, productNbr: "MLWK3LL/I", name: "Magic KeyBoard", category: "accesories", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
// },


// {
//   id: 1140, productNbr: "MLWK3LL/J", name: "Magic KeyBoard", category: "accesories", price: , features: ["", "", "Get more done faster", "", "", ""], specifications: ["", "", "", ], availability: 99, image_url: "/mbair.png"
// },
]

async function insertProducts() {
  try {
    await mongoose.connect("mongodb+srv://rolandsilvajr:khCydihqJWxkgCYV@cluster0.zovhy6d.mongodb.net/capstone?retryWrites=true&w=majority&appName=Cluster0", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
    console.log("Connected to MongoDB");

    const result = await Products.insertMany(products);
    console.log(`${result.length} products were inserted`);
  } catch (err) {
    console.error("Error inserting products:", err);
  } finally {
    mongoose.connection.close();
  }
}

insertProducts();



// SeedDatabase from kenzie cart products
// import { connect, disconnect } from "mongoose";
// import chalk from "chalk";
// import User from "./models/user";
// import Product from "./models/product";
// import keys from "./config/keys";


// async function seedDatabase() {
//   try {
//     await connect(keys.database.url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     const users = await User.find({});
//     const products = await Product.find({});
//     if (users.length === 0 && products.length === 0) {
//       console.log(
//         chalk.yellow(
//           "No users or products in the database, creating sample data..."
//         )
//       );
    //   const user = new User({ name: "John Doe", age: 34 });
    //   await user.save();
    //   console.log(chalk.green("Sample user successfuly created!"));
//       const newProducts = [
//         {
//           name: "Bluetooth Speaker",
//           description:
//             "This is a small product description to explain the item…",
//           price: 30,
//           quantity: 50,
//           category: "electronics",
//           productImage: "speaker.png",
//         },
//       ];
//       await Product.insertMany(newProducts);
//       console.log(
//         chalk.green(`${newProducts.length} product(s) successfuly created!`)
//       );
//     } else {
//       console.log(
//         chalk.yellow("Database already initiated, skipping populating script")
//       );
//     }
//   } catch (error) {
//     console.log(chalk.red(error));
//   }
// }

// {
//     name: "Unisex Perfume",
//     description:
//       "This is a small product description to explain the item…",
//     price: 15,
//     quantity: 50,
//     category: "wellness",
//     productImage: "perfume.png",
//   },



// const productsSchema = new mongoose.Schema(
//   {
//     id: {
//       type: 1111,
//       required: true,
//     },
//     productNbr: {
//         type: MGX82LL,
//         required: true,
//       },
//     name: {
//       type: "2023 MacBook Air",
//       required: true,
//     },
//     category: {
//       type: "laptop",
//       required: true,
//     },
//     price: {
//       type: 4500,
//       required: true,
//     },
//     features: {
//       type: "Apple 16 inch M3 MacBook Pro, 12-core CPU, 18-core GPU, 48gb memory, 1tb capacity",
//       required: true,
//     },
//     specifications: {
//       type: "Apple 16 inch M3 MacBook Pro, 12-core CPU, 18-core GPU, 48gb memory, 1tb capacity",
//       required: true,
//     },
//     availability: {
//       type: 99,
//       required: true,
//     },
//     image_url: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Products = mongoose.model("Products", productsSchema);

// export default Products;