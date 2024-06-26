import express from "express"
import { DataTypes, Sequelize } from "sequelize"
import { fileURLToPath } from "url"
import path from "path"
import cors from "cors"
import dbInitialization from "./dbInit.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log("DIRNAME --> " + __dirname)
const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})


// This fixes the CORS error. This allows only request from the set origin to communicate with the server
const corsOptions = {
    origin: "http://localhost:3000" // The link of your project when run locally
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

async function initDB() {
    const models = {}

    await db.authenticate()

    models.Project = db.define('project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Sequelize doesn't support array types, so we need to use a serialized string
        team: {
            type: Sequelize.STRING,
            allowNull: false,
            get() {
                return JSON.parse(this.getDataValue('team'));
            },
            set(val) {
                this.setDataValue('team', JSON.stringify(val));
            },
        },
        descriptionShort: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descriptionLong: {
            type: DataTypes.STRING,
            allowNull: false
        },
        investment: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })

    models.Area = db.define('area', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descriptionShort: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descriptionLong: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalInvestment: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })

    models.Person = db.define('person', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cv: {
            type: DataTypes.STRING,
            allowNull: false
        },
        motto: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    // 
    // Relationships
    // 

    // Many to many 
    models.Area.belongsToMany(models.Project, { through: 'ProjectAreas' });
    models.Project.belongsToMany(models.Area, { through: 'ProjectAreas' });

    // One to many, sequelize will generate the foreign key name automatically: "personId"
    models.Person.hasMany(models.Project)
    models.Project.belongsTo(models.Person)


    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    //
    // API calls for project(s)
    //

    app.get('/projects', async (req, res) => {
        const data = await models.Project.findAll({
            include: [
                {
                    model: models.Area,
                    attributes: ['id', 'name']
                },
                // To be removed, just for testing purposes
                {
                    model: models.Person
                }
            ]
        });

        res.status(200).json(data)
    })

    app.get('/projects/:id', async (req, res) => {
        const data = await models.Project.findOne({
            where: {
                id: req.params.id
            },
            include: [
               {
                    model: models.Person
            },
              {
                    model: models.Area
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    //
    // API calls for Area(s)
    //

    app.get('/areas', async (req, res) => {
        const data = await models.Area.findAll({
            include: [
                {
                    model: models.Project
                }
            ]
        });
        res.status(200).json(data)
    })


    app.get('/areas/:id', async (req, res) => {
        const data = await models.Area.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Project
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    // 
    // API calls for Person(s) 
    // 

    app.get('/people', async (req, res) => {
        const data = await models.Person.findAll();

        res.status(200).json(data)
    })

    app.get('/people/:id', async (req, res) => {
        const data = await models.Person.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Project
                },
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })
    // Using a different port
    app.listen(3001, () => {
        console.log("Listening on port 3001")
    })
}

initServer()
console.log("SERVER INITIALIZED")
// export default fromNodeMiddleware(app)