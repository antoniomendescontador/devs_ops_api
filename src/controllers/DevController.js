const axios = require('axios');
const Dev = require('../models/Dev');
const parseArrayAsString = require('../Utils/parseStringAsArray');
//index, show, store, update, destroy

module.exports = {

    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const {name = login, avatar_url, bio} = apiResponse.data;
        
            //console.log(name, avatar_url, bio, github_username, techs)
    
            const techsArray = parseArrayAsString(techs);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
                };
    
            dev = await Dev.create({
                github_username,
                name,
                bio,
                avatar_url,
                techs: techsArray,
                location,
                })

        }

        
        return response.json( dev );
        
},

async update(){},

async destroy(request, response){
   const dev_id = request.params 
   console.log(dev_id )
   //await Dev.findByIdAndDelete({dev_id});
      
},
};