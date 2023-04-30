import { loremIpsum } from "lorem-ipsum"

export default async (models) => {
    const locationModel = [
        {
            name: "Dog Paradise",
            city: "Milan"
        },
        {
            name: "Dog City",
            city: "Rome"
        }
    ]

    const location0 = await models.Location.create(locationModel[0])
    const location1 = await models.Location.create(locationModel[1])

    const projectModel = [
        {
            name: "Insecta",
            image: "https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-02-Skate-icon.png",
            team: ["Bart", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: loremIpsum({
                count: 1,
                units: "paragraph"
            }),
            descriptionLong: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
        },
        {
            name: "HydroGrow",
            image: "https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-02-Skate-icon.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: loremIpsum({
                count: 1,
                units: "paragraph"
            }),
            descriptionLong: loremIpsum({
                count: 4,
                units: "paragraph"
            })
        },
        {
            name: "EcoHomes",
            image: "https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-02-Skate-icon.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: loremIpsum({
                count: 1,
                units: "paragraph"
            }),
            descriptionLong: loremIpsum({
                count: 4,
                units: "paragraph"
            })
        },
        {
            name: "RiverCross",
            image: "https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-02-Skate-icon.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: loremIpsum({
                count: 1,
                units: "paragraph"
            }),
            descriptionLong: loremIpsum({
                count: 4,
                units: "paragraph"
            })
        },
    ]

    const dogModel = [
        {
            name: "Orfeo",
            breed: "Schnauzer",
            age: 14,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Lessie",
            breed: "Collie",
            age: 7,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Rex",
            breed: "German Shepard",
            age: 10,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Balto",
            breed: "???",
            age: 6,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location1.id
        },
        {
            name: "Doggo",
            breed: "Pug",
            age: 110,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location1.id
        }
    ]
    await models.Dog.bulkCreate(dogModel)

    await models.Project.bulkCreate(projectModel)
}
