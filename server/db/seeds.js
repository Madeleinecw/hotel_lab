use hotel;
db.dropDatabase();

db.bookings.insertMany([{
        name: "Dolly Parton",
        email: "Dolly@Dollywood.com",
        checked_in: true
    },
    {
        name: "Cher",
        email: "Cher@cherrocks.com",
        checked_in: true
    },
    {
        name: "Mariah Carey",
        email: "M@Glitter.com",
        checked_in: true
    }
]);