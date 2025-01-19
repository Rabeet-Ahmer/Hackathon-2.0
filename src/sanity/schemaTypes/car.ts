import { defineField, defineType } from "sanity";                                                           

export const car = defineType({
    name: 'car',
    type: 'document',
    title: 'Car',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Car Name',
      }),
      defineField({
          name: 'type',
          type: 'string',
        title: 'Car Type',
        description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
      }),
      defineField({
        name: 'fuelCapacity',
        type: 'string',
        title: 'Fuel Capacity',
        description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)',
      }),
      defineField({
          name: 'transmission',
        type: 'string',
        title: 'Transmission',
        description: 'Type of transmission (e.g., Manual, Automatic)',
    }),
    defineField({
        name: 'seatingCapacity',
        type: 'string',
        title: 'Seating Capacity',
        description: 'Number of seats (e.g., 2 People, 4 seats)',
    }),
    defineField({
        name: 'pricePerDay',
        type: 'string',
        title: 'Price Per Day',
        description: 'Rental price per day',
    }),
    defineField({
      name: 'brand',
      type: 'string',
      title: 'Brand',
      description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
    }),
    defineField({
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
            layout: 'tags',
        },
        description: 'Tags for categorization (e.g., popular, recommended)',
    }),
    defineField({
        name: 'originalPrice',
        type: 'string',
        title: 'Original Price',
        description: 'Original price before discount (if applicable)',
    }),
    defineField({
        name: 'image',
        type: 'image',
        title: 'Car Image',
        options: {
            hotspot: true
        }
    }),
    ],
});                                                           
