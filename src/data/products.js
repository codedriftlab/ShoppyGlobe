const products = [
  {
    id: 1,
    title: "iPhone 14",
    price: 80000,
    description: "Apple smartphone",
    thumbnail: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
    specs: {
      ram: "6GB",
      processor: "A15 Bionic",
      storage: "128GB",
      camera: "12MP",
      battery: "3279mAh"
    }
  },
  {
    id: 2,
    title: "Samsung Galaxy S22",
    price: 70000,
    description: "Samsung flagship phone",
    thumbnail: "https://api.samsungmobilepress.com/api/v1/file/BEB4E9A0290E5C11DCB88E288202ECCC2AF1A742231242CF82FC6A93EDC5CFAB8CFA4E6088D1032E93F9FAC5885765772B6FEAA92302243DCCB425FE739516954B13249ADA5794A4C0B64E7EE2AF35E278137C136B5149F3759008768EEEE73484EDA77B2F0E2B093A04CF55A8C92826C53F1D49304971AD8C2D29F41FDC0F1E428A66843D54CD7D6DE09C044B169CBB",
    specs: {
      ram: "8GB",
      processor: "Snapdragon 8 Gen 1",
      storage: "128GB",
      camera: "50MP",
      battery: "3700mAh"
    }
  },
  {
    id: 3,
    title: "OnePlus 11",
    price: 60000,
    description: "Fast and smooth phone",
    thumbnail: "https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg",
    specs: {
      ram: "8GB",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB",
      camera: "50MP",
      battery: "5000mAh"
    }
  },
  {
    id: 4,
    title: "HP Laptop",
    price: 55000,
    description: "HP powerful laptop",
    thumbnail: "https://hp.widen.net/content/okaik5jt1f/webp/okaik5jt1f.png?w=320&h=240&dpi=72&color=ffffff00",
    specs: {
      ram: "8GB",
      processor: "Intel i5",
      storage: "512GB SSD",
      graphics: "Intel UHD",
      display: "15.6 inch"
    }
  },
  {
    id: 5,
    title: "Dell Inspiron",
    price: 65000,
    description: "Dell reliable laptop",
    thumbnail: "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/i/n/inspiron-14-7440-2-in-1-laptop-pn5122w-in-festive3.png",
    specs: {
      ram: "16GB",
      processor: "Intel i7",
      storage: "512GB SSD",
      graphics: "NVIDIA MX350",
      display: "14 inch"
    }
  },
  {
    id: 6,
    title: "MacBook Air",
    price: 95000,
    description: "Apple lightweight laptop",
    thumbnail: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    specs: {
      ram: "8GB",
      processor: "Apple M1",
      storage: "256GB SSD",
      graphics: "Integrated GPU",
      display: "13.3 inch Retina"
    }
  },
  {
    id: 7,
    title: "Boat Headphones",
    price: 2500,
    description: "Wireless headphones",
    thumbnail: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SX679_.jpg",
    specs: {
      type: "Over Ear",
      battery: "20 hrs",
      connectivity: "Bluetooth",
      mic: "Yes"
    }
  },
  {
    id: 8,
    title: "Sony Headphones",
    price: 5000,
    description: "Noise cancelling headphones",
    thumbnail: "https://sony.scene7.com/is/image/sonyglobalsolutions/WH-CH720N_Product_intro_Pink_01_M?$productIntroPlatemobile$&fmt=png-alpha",
    specs: {
      type: "Over Ear",
      battery: "35 hrs",
      connectivity: "Bluetooth",
      noiseCancellation: "Yes"
    }
  },
  {
    id: 9,
    title: "JBL Speaker",
    price: 4000,
    description: "Portable speaker",
    thumbnail: "https://m.media-amazon.com/images/I/81MjIZM2H9L._SX679_.jpg",
    specs: {
      output: "20W",
      battery: "12 hrs",
      waterproof: "Yes",
      connectivity: "Bluetooth"
    }
  },
  {
    id: 10,
    title: "Smart Watch",
    price: 3000,
    description: "Fitness smartwatch",
    thumbnail: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SX679_.jpg",
    specs: {
      display: "1.8 inch",
      battery: "7 days",
      sensors: "Heart rate",
      waterproof: "Yes"
    }
  },
  {
    id: 11,
    title: "Mi Band",
    price: 2000,
    description: "Fitness band",
    thumbnail: "https://www.desertcart.in/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51bkPDf8dUL.jpg&w=128&q=75",
    specs: {
      display: "AMOLED",
      battery: "14 days",
      sensors: "SpO2",
      waterproof: "Yes"
    }
  },
  {
    id: 12,
    title: "Gaming Mouse",
    price: 1500,
    description: "RGB gaming mouse",
    thumbnail: "https://m.media-amazon.com/images/I/61AcT0ZuO3L._SX679_.jpg",
    specs: {
      dpi: "16000",
      rgb: "Yes",
      connectivity: "Wired"
    }
  },
  {
    id: 13,
    title: "Mechanical Keyboard",
    price: 4500,
    description: "RGB keyboard",
    thumbnail: "https://vrkaa.com/cdn/shop/files/61XqYeYoEZL._UF1000_1000_QL80.jpg?v=1754300464&width=990",
    specs: {
      type: "Mechanical",
      rgb: "Yes",
      connectivity: "Wired"
    }
  },
  {
    id: 14,
    title: "24 inch Monitor",
    price: 12000,
    description: "Full HD monitor",
    thumbnail: "https://image.benq.com/is/image/benqco/pv3200u-1?$ResponsivePreset$&fmt=png-alpha",
    specs: {
      size: "24 inch",
      resolution: "1920x1080",
      refreshRate: "75Hz",
      panel: "IPS"
    }
  },
  {
    id: 15,
    title: "Power Bank",
    price: 1200,
    description: "Fast charging power bank",
    thumbnail: "https://m.media-amazon.com/images/I/61NONhp2YZL._SX679_.jpg",
    specs: {
      capacity: "10000mAh",
      fastCharge: "Yes",
      ports: "2 USB"
    }
  },
  {
    id: 16,
    title: "Bluetooth Earbuds",
    price: 2500,
    description: "Wireless earbuds",
    thumbnail: "https://m.media-amazon.com/images/I/61QyJsjiBcL._SX679_.jpg",
    specs: {
      battery: "24 hrs",
      bluetooth: "5.0",
      mic: "Yes"
    }
  },

  // ✅ New 4 items
  {
    id: 17,
    title: "Tablet",
    price: 20000,
    description: "Android tablet",
    thumbnail: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SX679_.jpg",
    specs: {
      ram: "4GB",
      processor: "Snapdragon",
      storage: "64GB",
      display: "10 inch"
    }
  },
  {
    id: 18,
    title: "Wireless Mouse",
    price: 800,
    description: "Smooth wireless mouse",
    thumbnail: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
    specs: {
      dpi: "1200",
      connectivity: "Wireless",
      battery: "AA"
    }
  },
  {
    id: 19,
    title: "External Hard Drive",
    price: 5500,
    description: "1TB storage device",
    thumbnail: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SX679_.jpg",
    specs: {
      capacity: "1TB",
      type: "HDD",
      usb: "3.0"
    }
  },
  {
    id: 20,
    title: "Webcam",
    price: 2500,
    description: "Full HD webcam",
    thumbnail: "https://m.media-amazon.com/images/I/71iNwni9TsL._SX679_.jpg",
    specs: {
      resolution: "1080p",
      mic: "Yes",
      connectivity: "USB"
    }
  }
];

export default products;