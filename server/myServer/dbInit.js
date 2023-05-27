import { loremIpsum } from "lorem-ipsum"

export default async (models) => {

    const personModel = [
        {
            name: "Hassan",
            surname: "Santos",
            image: "liang-gupta.jpg",
            cv: "Hassan is a renewable energy engineer with over 10 years of experience in project development and management. He has a degree in mechanical engineering from the University of Cairo and a Master's degree in renewable energy from the Technical University of Munich. Hassan has worked on renewable energy projects in Europe, Africa, and the Middle East, gaining extensive experience in managing wind, solar, and hydroelectric projects.Thanks to his experience, Hassan is capable of managing all aspects of a renewable energy project, from development to construction and commissioning. He has a solid understanding of renewable energy production technologies and their practical applications, allowing him to assess the technical and financial feasibility of projects.Moreover, Hassan is an expert in site assessment, which enables him to identify the best technical and economic solutions for a renewable energy project. He can perform wind and solar radiation analysis and use this information to determine the capacity and feasibility of a project.With his extensive experience and expertise, Hassan is a reliable and highly competent professional who can provide valuable input to any renewable energy project.",
            motto: "I believe that sustainable energy is the key to a better future for all.",
        },
        {
            name: "Fatima",
            surname: "Nakamura",
            image: "ahmed-ali.jpg",
            cv: "Fatima is a sustainability specialist with a background in environmental science. She holds a Bachelor's degree in environmental science from the American University of Sharjah and a Master's degree in sustainable development from the University of California, Berkeley. With her strong academic background, Fatima has developed a deep understanding of sustainability issues and the skills necessary to address them effectively.Fatima has worked on sustainability projects in the United Arab Emirates, the United States, and Europe, giving her a broad perspective on the challenges and opportunities in the field. She has experience in developing sustainability strategies, conducting carbon footprint analyses, and assessing the environmental impacts of projects.As a sustainability specialist, Fatima is skilled in analyzing complex data and using it to identify opportunities for reducing environmental impact and enhancing sustainability performance. She has experience in designing and implementing sustainability programs that help organizations meet their sustainability goals while also improving their bottom line.Fatima is committed to making a positive impact on the environment and society through her work. She is passionate about finding innovative solutions to sustainability challenges and collaborating with others to create a more sustainable future. Her strong analytical and problem-solving skills, combined with her deep commitment to sustainability, make her a valuable asset to any sustainability project or team.",
            motto: "I am committed to finding innovative financing solutions that support sustainable growth."
        },
        {
            name: "Mei",
            surname: "Schmitt",
            image: "mei-schmitt.jpg",
            cv: "Mei is a sustainability consultant with a focus on green building design and sustainable urban planning. She holds a Bachelor's degree in architecture from Tsinghua University in Beijing, China and a Master's degree in sustainable urban planning from the University of California, Berkeley. With her academic background and professional experience, Mei has developed a deep understanding of sustainability issues and the skills necessary to address them effectively.Mei has worked on sustainability projects in China, the United States, and Europe, giving her a global perspective on the challenges and opportunities in the field. She is skilled in sustainable design, green building certification programs, and sustainable urban planning. As a sustainability consultant, Mei provides guidance to architects, engineers, and developers on sustainable design strategies that can reduce environmental impact and increase energy efficiency.Mei is passionate about creating sustainable communities that prioritize the health and well-being of their residents. She believes that sustainable design can improve the quality of life for people while also protecting the environment. Her expertise in green building design and sustainable urban planning enables her to identify opportunities for sustainable development and to help clients implement strategies that can reduce their environmental impact and increase their sustainability performance.Mei's strong analytical and problem-solving skills, combined with her deep commitment to sustainability, make her a valuable asset to any sustainability project or team. She is dedicated to creating a more sustainable future through her work and is always looking for new and innovative ways to promote sustainability in the built environment.",
            motto: "I am passionate about developing technologies that reduce our impact on the environment.",
        },
        {
            name: "Juan",
            surname: "Rodriguez",
            image: "juan-rodriguez.jpg",
            cv: "Juan is a civil engineer with extensive experience in renewable energy project management. He holds a Bachelor's degree in civil engineering from the University of Mexico and a Master's degree in renewable energy from the University of California, Berkeley. With his academic background, Juan has developed a solid understanding of the technical aspects of renewable energy production and the skills necessary to manage complex projects.Juan has worked on renewable energy projects in Latin America, North America, and Europe, gaining extensive experience in managing projects of various sizes and scopes. He is skilled in project planning, design, and construction management, which enables him to oversee all phases of a project, from initial planning to construction and commissioning.Juan has a proven track record of delivering projects on time and within budget. He is skilled in managing project teams and subcontractors, ensuring that all aspects of a project are executed to the highest standards. Moreover, Juan has experience in working with regulatory agencies and obtaining the necessary permits and approvals for renewable energy projects.As a civil engineer, Juan is also skilled in site assessment and selection. He can identify the optimal location for a renewable energy project based on a variety of factors, including wind speed, solar radiation, terrain, and local regulations.Juan's expertise and experience make him a valuable asset to any renewable energy project team. His technical skills, project management experience, and commitment to delivering high-quality projects make him a highly competent and reliable professional.",
            motto: "I believe that consumers have the power to drive change, and I am committed to empowering them to make sustainable choices.",
        },
        {
            name: "Ahmed",
            surname: "Ali",
            image: "ahmed-ali.jpg",
            cv: "Ahmed is an environmental engineer with a focus on water and wastewater treatment. He holds a Bachelor's degree in environmental engineering from the University of Alexandria in Egypt and a Master's degree in environmental engineering from the University of California, Berkeley. With his academic background and professional experience, Ahmed has developed a deep understanding of environmental engineering and the skills necessary to design and implement sustainable water and wastewater treatment systems.Ahmed has worked on environmental engineering projects in Egypt, the United States, and Europe, giving him a global perspective on the challenges and opportunities in the field. He is skilled in water and wastewater treatment technologies, including membrane filtration, disinfection, and nutrient removal. Ahmed is experienced in project management, including overseeing construction and commissioning of treatment facilities.As an environmental engineer, Ahmed is passionate about creating sustainable solutions to the world's water and wastewater challenges. He believes that access to clean water is a fundamental human right and is committed to developing innovative technologies that can provide safe and sustainable water and wastewater treatment for all.Ahmed's strong technical skills, combined with his passion for environmental engineering, make him a valuable asset to any water or wastewater treatment project or team. He is dedicated to finding sustainable solutions to the challenges facing the water and wastewater treatment industry and is always looking for new ways to innovate and improve the design and implementation of these systems.",
            motto: "I am excited to apply my skills to projects that will have a positive impact on the environment and society.",
        },
        {
            name: "Liang",
            surname: "Gupta",
            image: "liang-gupta.jpg",
            cv: "Liang is a renewable energy engineer with a focus on solar and wind power. He holds a Bachelor's degree in electrical engineering from Zhejiang University in China and a Master's degree in renewable energy from the Technical University of Munich in Germany. With his academic background and professional experience, Liang has developed a deep understanding of renewable energy systems and the skills necessary to design and implement them effectively.Liang has worked on renewable energy projects in China, Germany, and the United States, giving him a global perspective on the challenges and opportunities in the field. He is skilled in project design, simulation, and optimization, as well as in testing and commissioning renewable energy systems.As a renewable energy engineer, Liang is passionate about creating a more sustainable future through the deployment of renewable energy technologies. He is particularly interested in solar and wind power, as these technologies have the potential to significantly reduce greenhouse gas emissions and mitigate climate change. Liang is experienced in developing and designing solar and wind power projects, including site assessment, system sizing, and performance modeling.Liang's strong technical skills, combined with his passion for renewable energy, make him a valuable asset to any renewable energy project or team. He is dedicated to finding innovative solutions to the challenges facing the renewable energy industry and is always looking for new ways to push the boundaries of what is possible.",
            motto: "I am dedicated to finding solutions that balance economic growth with environmental protection.",
        },
        {
            name: "Emmanuel",
            surname: "Kowalska",
            image: "emmanuel-kowalska.jpg",
            cv: "Emmanuel is a renewable energy expert with a focus on energy storage technologies. He holds a Bachelor's degree in electrical engineering from the University of Lagos in Nigeria and a Master's degree in renewable energy from the Technical University of Munich in Germany. With his academic background and professional experience, Emmanuel has developed a deep understanding of renewable energy systems and the skills necessary to design and implement them effectively.Emmanuel has worked on renewable energy projects in Nigeria, Germany, and the United States, giving him a global perspective on the challenges and opportunities in the field. He is skilled in energy storage technologies, including batteries, flywheels, and pumped hydroelectric storage. Emmanuel is experienced in project management, including overseeing the design, installation, and commissioning of energy storage systems.As a renewable energy expert, Emmanuel is passionate about creating a more sustainable future through the deployment of renewable energy technologies. He believes that energy storage technologies are key to unlocking the full potential of renewable energy and reducing greenhouse gas emissions. Emmanuel is experienced in developing and designing energy storage projects, including system sizing, performance modeling, and financial analysis.Emmanuel's strong technical skills, combined with his passion for renewable energy, make him a valuable asset to any renewable energy project or team. He is dedicated to finding innovative solutions to the challenges facing the renewable energy industry and is always looking for new ways to push the boundaries of what is possible.",
            motto: "I am passionate about ensuring that sustainable development benefits all members of society.",
        },
        {
            name: "Julia",
            surname: "Sanchez",
            image: "julia-sanchez.jpg",
            cv: "Julia is an environmental economist with a focus on sustainability and natural resource management. She holds a Bachelor's degree in economics from the University of California, Berkeley and a Master's degree in environmental economics from the University of Oxford in the UK. With her academic background and professional experience, Julia has developed a deep understanding of the economic drivers of environmental sustainability and the skills necessary to design and implement effective policies and programs.Julia has worked on sustainability and natural resource management projects in the United States, Europe, and Africa, giving her a global perspective on the challenges and opportunities in the field. She is skilled in environmental policy analysis, including cost-benefit analysis, policy evaluation, and impact assessment. Julia is experienced in project management, including developing project proposals, securing funding, and coordinating project teams.As an environmental economist, Julia is passionate about promoting sustainable development and finding innovative solutions to environmental challenges. She believes that economic incentives and market-based mechanisms can play a key role in promoting environmental sustainability and protecting natural resources. Julia is experienced in designing and evaluating market-based mechanisms, such as carbon pricing and payment for ecosystem services.Julia's strong analytical skills, combined with her passion for sustainability, make her a valuable asset to any sustainability or natural resource management project or team. She is dedicated to finding effective solutions to the challenges facing the environmental and sustainability fields and is always looking for new ways to push the boundaries of what is possible.",
            motto: "I am committed to expanding our reach and developing partnerships that promote sustainable development.",
        },
        {
            name: "Jorgen",
            surname: "Lee",
            image: "jorgen-lee.jpg",
            cv: "Jorgen is a mechanical engineer with a specialization in renewable energy technologies. He holds a Bachelor's degree in mechanical engineering from the Technical University of Denmark and a Master's degree in renewable energy from the University of Michigan in the United States. With his academic background and professional experience, Jorgen has developed a deep understanding of renewable energy systems and the skills necessary to design and implement them effectively.Jorgen has worked on renewable energy projects in Europe, North America, and Asia, giving him a global perspective on the challenges and opportunities in the field. He is skilled in project management, including overseeing the design, installation, and commissioning of renewable energy systems. Jorgen is experienced in a range of renewable energy technologies, including wind, solar, and biomass, and has expertise in energy system modeling and optimization.As a mechanical engineer specializing in renewable energy, Jorgen is passionate about creating a more sustainable future through the deployment of renewable energy technologies. He believes that a shift to renewable energy is essential to reducing greenhouse gas emissions and mitigating the impacts of climate change. Jorgen is experienced in developing and designing renewable energy projects, including system sizing, performance modeling, and financial analysis.Jorgen's strong technical skills, combined with his passion for renewable energy, make him a valuable asset to any renewable energy project or team. He is dedicated to finding innovative solutions to the challenges facing the renewable energy industry and is always looking for new ways to push the boundaries of what is possible.",
            motto: "I believe that investing in our employees is key to achieving our sustainability goals.",
        },
        {
            name: "Sofia",
            surname: "Chang",
            image: "sofia-chang.jpg",
            cv: "Sofia is a sustainability expert with a strong background in environmental science and policy. She holds a Bachelor's degree in Environmental Science from the University of California, Berkeley, and a Master's degree in Environmental Policy from the London School of Economics and Political Science. With her academic background and professional experience, Sofia has developed a deep understanding of the environmental and social challenges facing businesses today and the skills necessary to design and implement sustainability strategies that address these challenges.Sofia has worked with businesses and organizations across the globe to develop and implement sustainability programs that align with their core values and business objectives. She is skilled in sustainability strategy development, carbon footprint analysis, life cycle assessment, and stakeholder engagement. Sofia is also experienced in developing and implementing sustainability reporting frameworks, including the Global Reporting Initiative and the Sustainability Accounting Standards Board.As a sustainability expert, Sofia is passionate about creating a more sustainable future by driving change within the private sector. She believes that businesses have a crucial role to play in addressing environmental and social challenges and is committed to helping businesses take the necessary steps to become more sustainable. Sofia is skilled at building relationships and working collaboratively with stakeholders to achieve common sustainability goals.Sofia's strong technical skills, combined with her passion for sustainability, make her a valuable asset to any organization looking to improve its sustainability performance. She is dedicated to finding innovative solutions to the sustainability challenges facing businesses today and is always looking for new ways to push the boundaries of what is possible.",
            motto: "I am dedicated to ensuring that our projects comply with international legal standards and promote sustainable development.",
        },

    ]
    const person0 = await models.Person.create(personModel[0])
    const person1 = await models.Person.create(personModel[1])
    const person2 = await models.Person.create(personModel[2])
    const person3 = await models.Person.create(personModel[3])
    const person4 = await models.Person.create(personModel[4])
    const person5 = await models.Person.create(personModel[5])
    const person6 = await models.Person.create(personModel[6])
    const person7 = await models.Person.create(personModel[7])
    const person8 = await models.Person.create(personModel[8])
    const person9 = await models.Person.create(personModel[9])

    const projectModel = [
        {
            name: "The Artificial Meat",
            image: "artificial-meat.png",
            team: ["Bart", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Artificial meat offers a sustainable and ethical alternative to traditional meat production",
            descriptionLong: "Artificial meat, also known as cultured meat or lab-grown meat, is a type of meat produced by in vitro cultivation of animal cells. The process involves taking a small sample of animal cells and then growing them in a lab setting to produce muscle tissue that can be processed and cooked like conventional meat. The goal of artificial meat is to provide a more sustainable and ethical alternative to traditional meat production, which is associated with environmental degradation, animal cruelty, and public health risks. While still in the experimental stage, artificial meat has the potential to revolutionize the food industry and help address some of the world's most pressing challenges.",
            personId: person0.id,
            investment: 1000

        },
        {
            name: "Windpower",
            image: "windpower.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Windpower creates vertical wind turbines, perfect for for urban areas, accessible and easy to maintain.",
            descriptionLong: "Vertical wind turbines are a type of wind turbine where the main rotor shaft is arranged vertically. Unlike traditional horizontal axis turbines, vertical wind turbines can operate in turbulent and gusty winds from any direction, making them ideal for urban areas. They have a smaller footprint and can be installed at lower heights, making them more accessible and easier to maintain. Vertical wind turbines are also quieter than their horizontal counterparts, making them a more attractive option for residential areas. They are an innovative and sustainable solution for generating clean energy.",
            personId: person1.id,
            investment: 2000
        },
        {
            name: "Solar roads",
            image: "solar-roads.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Solar roads are a renewable energy technology that embeds solar panels into roadways to generate electricity. ",
            descriptionLong: "Solar roads are a type of renewable energy technology that involves embedding solar panels into roadways to generate electricity. The solar panels are designed to be durable enough to withstand the weight of vehicles and weather conditions. The electricity generated from the solar panels can be used to power streetlights, electric vehicles, and nearby buildings. Solar roads have the potential to reduce carbon emissions and promote sustainability by generating clean energy from existing infrastructure. However, the technology is still in the early stages of development, and there are concerns about its cost and efficiency.",
            personId: person2.id,
            investment: 5000
        },
        {
            name: "Wind solar",
            image: "wind-solar.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Wind solar is a solution that combines wind turbines and solar panels to generate electricity, taking the best of both worlds.",
            descriptionLong: "The wind-solar hybrid technology is a renewable energy solution that combines the benefits of wind and solar energy generation in a single system. The system consists of a wind turbine that is equipped with solar panels. When the wind is blowing, the turbine generates electricity, but when there is no wind, the solar panels take over and generate power from the sun.The wind turbine is designed with a unique blade system that is capable of rotating 360 degrees around the central axis, allowing it to capture wind from any direction. The blades are made from lightweight materials, such as carbon fiber or composite materials, to reduce the weight of the turbine and increase its efficiency.The solar panels are installed on the surface of the turbine blades, and are made from high-efficiency photovoltaic cells that can convert sunlight into electricity. When the turbine is not in use, the blades can be tilted to face the sun and maximize the amount of solar energy that is captured.The system is equipped with a control unit that monitors the wind speed and solar irradiance, and automatically switches between wind and solar power generation based on the available resources. This ensures that the system always operates at maximum efficiency, and provides a reliable and consistent source of renewable energy.The wind-solar hybrid technology is ideal for areas with fluctuating wind and solar conditions, and can provide a reliable source of renewable energy throughout the day and night. It is also highly versatile, and can be installed in a wide range of locations, including onshore and offshore wind farms, rooftops, and remote areas.Overall, the wind-solar hybrid technology is a promising solution for renewable energy generation, offering a unique and innovative approach to combining wind and solar power generation in a single system.",
            personId: person3.id,
            investment: 1000
        },
        {
            name: "Trash",
            image: "trash.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Trash is a waste disposal sink that sorts and transports waste to the appropriate recycling or disposal location.",
            descriptionLong: "The waste disposal sink is a new technology that allows for the easy disposal of various types of waste within a household or commercial building. The sink is designed with a built-in shredder and a system of sensors and pipes that sorts and transports the waste to the appropriate recycling or disposal location.When waste is placed into the sink, it is automatically shredded into smaller pieces to make it easier to transport through the pipes. The system uses a series of sensors and x-rays to identify and sort the different types of waste, including organic, plastic, metal, and glass. The sorted waste is then transported through a network of pipes to the appropriate location for recycling or disposal.The system is designed to be easy to use, and can be installed in any household or commercial building with a water supply and drainage system. The sink itself is made from high-quality materials that are durable and easy to clean, and the system is designed to be low-maintenance and cost-effective.One of the key benefits of the waste disposal sink is its ability to promote recycling and reduce the amount of waste that ends up in landfills or incinerators. By separating the different types of waste and ensuring that they are properly recycled or disposed of, the system helps to reduce the environmental impact of waste disposal.Overall, the waste disposal sink is a promising technology for sustainable waste management, offering an innovative and convenient solution for households and businesses looking to reduce their environmental impact and promote recycling.",
            personId: person4.id,
            investment: 2000
        },

        {
            name: "Uphill Road",
            image: "uphill-road.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Uphill road is a bike escalator technology designed to help cyclists easily navigate hills and other steep inclines.",
            descriptionLong: "The bike escalator is a new technology designed to help cyclists easily navigate hills and other steep inclines. The system is essentially a series of conveyor belts that run parallel to a bike path, allowing cyclists to ride their bikes onto the belts and be carried up the hill.The bike escalator is designed to be easy to use and safe for cyclists of all ages and skill levels. The conveyor belts are covered in a non-slip material to ensure that bikes and riders stay securely in place during the ride up the hill. The system also includes safety features such as handrails and barriers to prevent accidents and keep cyclists safe.The bike escalator is powered by electricity and is designed to be environmentally friendly, with low energy consumption and minimal impact on the surrounding environment. The system can be easily installed along existing bike paths, and can be customized to fit the specific needs of different locations and inclines.One of the key benefits of the bike escalator is its ability to promote cycling as a sustainable and healthy mode of transportation. By making it easier for cyclists to navigate hills and other challenging terrain, the system encourages more people to use bikes as a means of transportation, reducing the environmental impact of cars and other vehicles.Overall, the bike escalator is a promising technology for sustainable transportation, offering an innovative and convenient solution for cyclists looking to navigate hills and other challenging terrain.",
            personId: person5.id,
            investment: 3000

        },
        {
            name: "Smart Road",
            image: "smart-road.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "A road that can recharge electric vehicles while they are in motion, why stop and recharge when you can just drive.",
            descriptionLong: "A street that can recharge electric cars is a type of smart road that uses wireless charging technology to power electric vehicles (EVs) while they are in motion. The technology works by embedding wireless charging coils into the road surface, which generate electromagnetic fields that can be used to charge EV batteries. This eliminates the need for EV drivers to stop and plug in their cars at charging stations. The street can also be equipped with sensors and other smart features to improve traffic flow and reduce congestion. While still in the early stages of development, this technology has the potential to revolutionize the way we travel and reduce our dependence on fossil fuels.",
            personId: person6.id,
            investment: 2000
        },
        {
            name: "Green roofs",
            image: "green-roofs.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Green roofs are sustainable roofing systems that support vegetation on top of a building. ",
            descriptionLong: "Green roofs, also known as living roofs or eco-roofs, are sustainable roofing systems designed to support vegetation and soil on top of a building's surface. They provide a natural insulation layer, help reduce heat island effect, and absorb rainwater, reducing runoff and improving overall water management. Green roofs can also improve air quality, provide habitats for wildlife, and enhance the aesthetic value of a building. They can be installed on new or existing buildings and can be customized to suit different climates, building types, and vegetation preferences. Overall, green roofs are a great way to promote sustainability and reduce the environmental impact of buildings.",
            personId: person7.id,
            investment: 1000
        },
        {
            name: "EcoHomes",
            image: "eco-homes.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "EcoHomes are the new net zero energy buildings. No bills by helping the planet.",
            descriptionLong: "Net zero energy buildings are sustainable buildings that produce as much energy as they consume over the course of a year. These buildings are designed to be highly energy-efficient and typically incorporate renewable energy sources, such as solar panels, to generate the energy needed to power the building. By reducing energy consumption and utilizing renewable energy sources, net zero energy buildings can significantly reduce greenhouse gas emissions and promote sustainability. Net zero energy buildings are becoming increasingly popular in the green building industry as a way to reduce the environmental impact of buildings and promote a more sustainable future.",
            personId: person8.id,
            investment: 1000
        },
        {
            name: "Smart farming",
            image: "smart-farming.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Smart farming employes precision farming to optimize crop production while minimizing waste.",
            descriptionLong: "Precision farming is an innovative approach to agriculture that utilizes technology to optimize crop production and minimize waste. It involves the use of advanced tools such as GPS, sensors, drones, and machine learning algorithms to collect and analyze data on soil conditions, weather patterns, and crop growth in real-time. This information is then used to make informed decisions about planting, fertilization, irrigation, and pest management, resulting in increased yields, reduced costs, and improved sustainability. By using precision farming techniques, farmers can reduce their environmental impact while increasing profitability and ensuring food security for future generations.",
            personId: person9.id,
            investment: 3000
        },
        {
            name: "Permaculture",
            image: "permaculture.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Permaculture uses natural principles and patterns to create self-sufficient and ecologically balanced systems.",
            descriptionLong: "Permaculture is a sustainable and holistic approach to agriculture and design that aims to create self-sufficient and ecologically balanced systems. It involves using natural principles and patterns to design landscapes that mimic the diversity, stability, and resilience of natural ecosystems. Permaculture emphasizes the use of renewable resources, waste reduction, and the integration of plants and animals to create a productive and sustainable ecosystem. It also focuses on building soil health, conserving water, and using low-tech solutions to minimize energy consumption. Permaculture principles can be applied to urban and rural environments, and can promote food security, biodiversity, and community resilience.",
            personId: person0.id,
            investment: 2000
        },
        {
            name: "Insecta",
            image: "insecta.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Insecta employes insect farming as sustainable and efficient source of food.",
            descriptionLong: "Insect farming is the practice of breeding and raising insects for human consumption and other uses. Insects such as crickets, mealworms, and grasshoppers are high in protein, low in fat, and require significantly less water and land than traditional livestock. Insect farming has the potential to be a more sustainable and efficient way to produce food, as well as provide alternative sources of protein for people around the world. While still a relatively new concept, insect farming is gaining popularity as people become more interested in sustainable food sources.",
            personId: person1.id,
            investment: 1000
        },
        {
            name: "Hydrogrow",
            image: "hydro-grow.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Hydrogrow specializes in developing and implementing sustainable hydroponic farming solutions for urban agriculture.",
            descriptionLong: "Hydrogrow is a forward-thinking start-up that is committed to making a positive impact on the environment and promoting sustainable agriculture. Their primary focus is on hydroponic farming, which is a soilless method of growing crops in nutrient-rich water. Hydroponic systems use significantly less water than traditional farming methods and can be implemented in urban environments, making it an ideal solution for increasing local food production in cities.Hydrogrow designs and builds customized hydroponic systems that are tailored to meet the specific needs of their clients. They offer a range of products and services, including vertical farming systems, aquaponic systems, and automated monitoring and control systems. Their solutions are scalable, efficient, and can be used to grow a variety of crops, including vegetables, herbs, and fruits.Hydrogrow's commitment to sustainability extends beyond their products and services. They prioritize environmentally-friendly practices in their operations, such as using renewable energy sources, reducing waste, and recycling materials. Hydrogrow is dedicated to advancing the future of agriculture and providing sustainable food solutions for communities around the world.",
            personId: person2.id,
            investment: 3000
        },
        {
            name: "Rivercross",
            image: "rivercross.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Rivercross creates sustainable and innovative solutions for water management.",
            descriptionLong: "Rivercross is a startup that is dedicated to solving the complex challenges of water management through sustainable and innovative solutions. They provide a range of services and products that aim to improve the quality and availability of water while reducing waste and promoting conservation. Rivercross works with clients in various sectors, including agriculture, industry, and municipalities, to identify and implement water management strategies that are tailored to their specific needs.Their services include water quality testing and analysis, water treatment solutions, rainwater harvesting systems, and wastewater treatment and reuse. They also offer a range of products such as water sensors, filtration systems, and irrigation equipment to help clients conserve and manage water resources more efficiently.At Rivercross, sustainability is at the core of everything they do. They believe that by developing sustainable solutions for water management, they can help create a more equitable and resilient world. Their innovative approach to water management has already made a significant impact, and they continue to push the boundaries of what is possible in this critical field.",
            personId: person3.id,
            investment: 2000
        },
        {
            name: "Solar genius",
            image: "solar-genius.png",
            team: ["Boe", "Lisa", "Maggie", "Homer", "Marge"],
            descriptionShort: "Solar Genius is a startup focused on providing renewable energy solutions to homes and businesses.",
            descriptionLong: "Solar Genius is a startup that was founded with the mission of promoting sustainable and environmentally friendly energy solutions. They specialize in solar panel installations for homes and businesses, and offer a comprehensive range of services to their clients. These services include consultation, design, installation, and maintenance of solar panels.Solar Genius is dedicated to providing customized solutions to each of their clients, based on their unique energy needs and budget. They work closely with their clients to assess their energy consumption, and develop a customized plan that is tailored to their specific needs. Their team of experts is highly skilled and experienced in the design and installation of solar panels, and they use only the highest quality materials to ensure the best possible performance and longevity of their systems.In addition to solar panel installations, Solar Genius also provides a range of other services related to renewable energy. They offer energy efficiency assessments, which can help identify areas where energy consumption can be reduced, as well as battery storage solutions to help store excess energy generated by solar panels. They also provide ongoing maintenance and support services to ensure that their clients' solar panel systems are always performing at their best.Overall, Solar Genius is a startup that is focused on helping people transition to cleaner, more sustainable energy sources. Their dedication to providing customized solutions, high-quality installations, and ongoing support has made them a trusted provider of renewable energy solutions in their community.",
            personId: person4.id,
            investment: 1000
        },
    ]
    const project0 = await models.Project.create(projectModel[0])
    const project1 = await models.Project.create(projectModel[1])
    const project2 = await models.Project.create(projectModel[2])
    const project3 = await models.Project.create(projectModel[3])
    const project4 = await models.Project.create(projectModel[4])
    const project5 = await models.Project.create(projectModel[5])
    const project6 = await models.Project.create(projectModel[6])
    const project7 = await models.Project.create(projectModel[7])
    const project8 = await models.Project.create(projectModel[8])
    const project9 = await models.Project.create(projectModel[9])
    const project10 = await models.Project.create(projectModel[10])
    const project11 = await models.Project.create(projectModel[11])
    const project12 = await models.Project.create(projectModel[12])
    const project13 = await models.Project.create(projectModel[13])
    const project14 = await models.Project.create(projectModel[14])

    const areaModel = [
        {
            name: "Renewable energy",
            image: "renewable-energy.png",
            descriptionShort: "Renewable energy sources, such as solar, wind, hydro, and geothermal power, are sustainable and do not harm the environment. Investing in renewable energy is essential to reduce the carbon footprint and create a cleaner future for generations to come.",
            descriptionLong: "Renewable energy sources, such as solar, wind, hydro, and geothermal power, are essential to the future of our planet. Unlike fossil fuels, which emit harmful greenhouse gases that contribute to climate change, renewable energy sources are clean, sustainable, and do not harm the environment. Investing in renewable energy is fundamental to reduce the carbon footprint, promote energy independence, and create a cleaner, more sustainable future for generations to come. In addition, renewable energy sources are becoming more affordable and accessible, making them a smart investment for individuals, businesses, and governments alike.",
            totalInvestment: 500000
        },
        {
            name: "Sustainable transport",
            image: "sustainable-transport.png",
            descriptionShort: "Sustainable transport aims to reduce carbon emissions and promote environmentally friendly modes of transportation such as walking, cycling, and public transportation. Investing in sustainable transport can reduce traffic congestion, air pollution, and energy consumption while improving public health and saving money on transportation costs.",
            descriptionLong: "Sustainable transport is important because traditional modes of transportation have a significant impact on the environment and contribute to climate change. Sustainable transport, on the other hand, aims to reduce carbon emissions and promote more environmentally friendly modes of transportation, such as walking, cycling, and public transportation. Investing in sustainable transport can help reduce traffic congestion and air pollution, improve public health, and promote energy independence. It can also help individuals and businesses save money on transportation costs over time. Companies can benefit from investing in sustainable transport by reducing their carbon footprint and improving their reputation as socially responsible businesses. Similarly, individuals can benefit from using sustainable transport by reducing their environmental impact and improving their health and well-being.",
            totalInvestment: 750000
        },
        {
            name: "Green and smart building",
            image: "green-building-and-intelligent-housing.png",
            descriptionShort: "Green building is a sustainable approach to construction that helps reduce carbon emissions, save energy, and promote a healthier environment.They also have a significant impact on reducing greenhouse gas emissions and help address the global challenge of climate change. Investing in green buildings is a smart decision for individuals, businesses, and governments looking to promote sustainability and contribute to a better future for all.",
            descriptionLong: "Green building is important as it helps in reducing carbon emissions, conserving energy, and promoting a healthier environment . Buildings account for almost 40% of global energy-related CO2 emissions, and green buildings like those that are LEED certified are an effective solution for reducing this impact . Investing in green building has several economic benefits such as operating cost savings and increased asset value . According to a report, green buildings represent a significant low-carbon investment opportunity of $24.7 trillion by 2030, with most of the construction growth occurring in middle-income countries . Green buildings not only lower energy consumption and operational costs but also achieve higher sale premiums and attract and retain more tenants . By investing in green buildings, governments, developers, and building owners can take the lead in shaping and accelerating this multitrillion-dollar business opportunity, while also promoting a more sustainable and equitable future for all.",
            totalInvestment: 1000000
        },
        {
            name: "Sustainable agriculture",
            image: "sustainable-agriculture-and-farming.png",
            descriptionShort: "Sustainable agriculture is essential for meeting the world's food demands and reducing the environmental impact of farming. It also leads to economic benefits such as cost reduction, asset value increase, and improved profitability. Overall, investing in sustainable agriculture is crucial for creating a healthier and more equitable world for all.",
            descriptionLong: "Sustainable agriculture plays a crucial role in meeting the food demands of the world's growing population while reducing the environmental impact of farming . It aims to maintain soil fertility, make efficient use of resources and natural cycles, and improve the quality of life for farmers and society, while enhancing environmental quality . Investing in sustainable agriculture can lead to economic benefits such as reducing costs, increasing asset value, and improving profitability . Additionally, sustainable agriculture practices can help minimize animal cruelty, eliminate unsustainable farming practices, and preserve the environment . Therefore, individuals, businesses, and governments should invest in sustainable agriculture to promote a cleaner, more sustainable future for all.",
            totalInvestment: 750000
        }
    ]
    const area0 = await models.Area.create(areaModel[0])
    const area1 = await models.Area.create(areaModel[1])
    const area2 = await models.Area.create(areaModel[2])
    const area3 = await models.Area.create(areaModel[3])

    // Associate project with areas (Many-To-Many relationship)
    // 0 - Renewable energy 
    await area0.addProject(project1);
    await area0.addProject(project2);
    await area0.addProject(project3);
    await area0.addProject(project6);
    await area0.addProject(project8);
    await area0.addProject(project14);

    // 1 - Sustainable transport
    await area1.addProject(project2);
    await area1.addProject(project6);
    await area1.addProject(project5);
    await area1.addProject(project13);

    // 2 - Green building and intelligent housing
    await area2.addProject(project4);
    await area2.addProject(project7);
    await area2.addProject(project8);

    // 3 - Sustainable agriculture and food production
    await area3.addProject(project9);
    await area3.addProject(project10);
    await area3.addProject(project11);
    await area3.addProject(project12);
    await area3.addProject(project0);

}
