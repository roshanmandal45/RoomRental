
import dbConnect from "../lib/dbConnect";

import User from "../models/User";
import Property from "../models/Property";
import Booking from "../models/Booking";

import usersData from "../data/user";
import propertiesData from "../data/property";
import bookingsData from "../data/booking";

async function seed() {
  try {
    // Connect to MongoDB
    await dbConnect();

    console.log("MongoDB connected.");

    // 2. Clear existing data
    await Booking.deleteMany({});
    await Property.deleteMany({});
    await User.deleteMany({});

    console.log("Old data cleared.");

    // Insert Users
    const users = await User.insertMany(usersData);

    console.log(`${users.length} users inserted.`);

    const userMap: Record<string, any> = {
      OWNER_1: users[0]._id,
      OWNER_2: users[1]._id,
      OWNER_3: users[2]._id,

      RENTER_1: users[3]._id,
      RENTER_2: users[4]._id,
      RENTER_3: users[5]._id,
    };

    // Insert Properties
    const properties = [];

    for (const propertyData of propertiesData) {
      const ownerId = userMap[propertyData.owner];

      if (!ownerId) {
        throw new Error(
          `Owner "${propertyData.owner}" was not found in userMap.`
        );
      }

      const property = await Property.create({
        ...propertyData,
        owner: ownerId,
      });

      properties.push(property);
    }

    console.log(`${properties.length} properties inserted.`);

    // Create a map between fake property IDs and real MongoDB IDs
    const propertyMap: Record<string, any> = {};

    properties.forEach((property, index) => {
      propertyMap[`PROPERTY_${index + 1}`] = property._id;
    });

    // 5. Insert Bookings
    const bookings = [];

    for (const bookingData of bookingsData) {
      const renterId = userMap[bookingData.renter];
      const propertyId = propertyMap[bookingData.property];

      if (!renterId) {
        throw new Error(
          `Renter "${bookingData.renter}" was not found in userMap.`
        );
      }

      if (!propertyId) {
        throw new Error(
          `Property "${bookingData.property}" was not found in propertyMap.`
        );
      }

      const booking = await Booking.create({
        ...bookingData,
        renter: renterId,
        property: propertyId,
      });

      bookings.push(booking);
    }

    console.log(`${bookings.length} bookings inserted.`);

    console.log("Seeding completed successfully.");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();

