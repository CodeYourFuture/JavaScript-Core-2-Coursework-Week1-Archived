
// exercise3
// The objects below have some syntax issues - try and fix them all!

let kitten = {
    furColour: "orange",
    age: "23",
};

let laptop = {
    brand: "Lenovo",
    ram: "5GB",
};

let phone = {
    operatingSystem: "iOS",
    hasStylus: true,
    megapixels: 12,
    batteryLife: "24 hours",
};
console.log(`The ${kitten.furColour} kitten is ${kitten.age} years old.`);
console.log(`The ${kitten.age} years old, ${kitten.furColour} kitten owns a ${laptop.brand} laptop with ${laptop.ram} of ram.`);
console.log(`The ${kitten.age} years old, ${kitten.furColour} kitten owns an ${phone.operatingSystem} phone with ${phone.batteryLife}
 of battery life and a ${phone.megapixels} megapixel front camera.`);
