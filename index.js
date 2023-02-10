class Car {
  constructor(type) {
    this.type = type;
  }
}

class Service {
  constructor(code, name, hatchbackPrice, sedanPrice, suvPrice) {
    this.code = code;
    this.name = name;
    this.hatchbackPrice = hatchbackPrice;
    this.sedanPrice = sedanPrice;
    this.suvPrice = suvPrice;
  }
}

const services = [
  new Service("BS01", "Basic Servicing", 2000, 4000, 5000),
  new Service("EF01", "Engine Fixing", 5000, 8000, 10000),
  new Service("CF01", "Clutch Fixing", 2000, 4000, 6000),
  new Service("BF01", "Brake Fixing", 1000, 1500, 2500),
  new Service("GF01", "Gear Fixing", 3000, 6000, 8000),
];

function onGenerateBillClick() {
  const carType = document.getElementById("carType").value;
  const serviceCodes = document.getElementById("serviceCodes").value.split(",");

  const car = new Car(carType);
  let totalAmount = 0;

  let bill = `Car Type:${car.type}\n`;
  //   bill += "Service Code\t\nService\tAmount\n";

  for (const serviceCode of serviceCodes) {
    const service = services.find(s => s.code === serviceCode);
    if (!service) {
      bill += `Invalid Service Code :${serviceCode}`;
      continue;
    }

    let serviceAmount;
    if (car.type === "Hatchback") {
      serviceAmount = service.hatchbackPrice;
    } else if (car.type === "Sedan") {
      serviceAmount = service.sedanPrice;
    } else {
      serviceAmount = service.suvPrice;
    }

    (bill += `Service Code :${service.code}\nService Type: ${service.name}\nService Amount :${serviceAmount}\n`),
      (totalAmount += serviceAmount);
  }

  bill += `\nTotal Amount: ${totalAmount}`;

  document.getElementById("bill").innerText = bill;
}
